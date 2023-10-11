import type { FC } from "react";
import {
  SafeAreaView,
  type SafeAreaViewProps
} from "react-native-safe-area-context";

import { useTheme } from "../../context/theme-context";
import { component } from "../../constants/colors";

interface LayoutProps extends SafeAreaViewProps {
  backgroundColor?: string;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      {...props}
      style={[
        props.style,
        {
          flex: 1,
          backgroundColor:
            props.backgroundColor || component[theme].layout.backgroundColor
        }
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default Layout;
