import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";

import { ThemeProvider } from "./src/context/theme-context";
import RootNavigator from "./src/navigation";

enableScreens();
export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
