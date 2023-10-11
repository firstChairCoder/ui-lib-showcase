import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";
import type { MainStackParamList } from "./types";

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();
const RootNavigator = () => {
  const linking = {
    prefixes: [
      /* todo: add pref prefixes. */
    ],
    config: {
      screens: {
        Home: "home",
        Typography: "typography",
        Buttons: "buttons",
        Colors: "colors",
        Forms: "forms"
      }
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Home" component={HomeScreen} />
        {/* <Screen name="Typography" component={Typography} />
        <Screen name="Buttons" component={Buttons} />
        <Screen name="Colors" component={Colors} />
        <Screen name="Forms" component={Forms} />
        <Screen name="Section" component={Section} />
        <Screen name="Avatar" component={Avatar} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
