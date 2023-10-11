import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import useCachedResources from "../hooks/useCachedResources";
import { component, themeColor } from "../constants/colors";

type ContextProps = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  isDarkmode?: boolean;
  images?: Array<any> | null;
  fonts?: any;
};

const ThemeContext = createContext<ContextProps>({
  theme: "light",
  setTheme: (_) => console.warn("no theme provider")
});

const useTheme = () => useContext(ThemeContext);
const ThemeProvider = (props: {
  theme?: "light" | "dark";
  isDarkmode?: boolean;
  images?: Array<any> | null;
  fonts?: any;
  children?: ReactNode;
  loading?: ReactNode;
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(props.theme || "light");
  const isLoadingComplete = useCachedResources(props.images, props.fonts);
  const isDarkmode = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, isDarkmode, setTheme }}>
      <StatusBar
        backgroundColor={component[theme].statusBar.color}
        barStyle={isDarkmode ? "light-content" : "dark-content"}
      />
      <SafeAreaProvider
        style={{
          backgroundColor: isDarkmode ? themeColor.dark : themeColor.white100
        }}
      >
        {!isLoadingComplete
          ? props.loading
            ? props.loading
            : null
          : props.children}
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, useTheme, ContextProps };
