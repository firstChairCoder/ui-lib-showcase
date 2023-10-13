import type { StackScreenProps } from "@react-navigation/stack";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

import type { MainStackParamList } from "../navigation/types";
import { useTheme } from "../context/theme-context";
import { Layout, Text, TopNav } from "../components";
import { themeColor } from "../constants/colors";

export const HomeScreen = ({
  navigation
}: StackScreenProps<MainStackParamList, "Home">) => {
  const { isDarkmode, setTheme } = useTheme();

  const styles = StyleSheet.create({
    listItem: {
      alignItems: "center",
      backgroundColor: isDarkmode ? "#262834" : "#FFF",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginTop: 20,
      padding: 20
    }
  });

  return (
    <Layout>
      <TopNav
        middleContent="UI Library"
        rightContent={
          <Icon
            name={isDarkmode ? "sunny" : "moon"}
            size={24}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <ScrollView>
        <Pressable onPress={() => navigation.navigate("Typography")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Typography</Text>
            <Icon
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Buttons")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Buttons</Text>
            <Icon
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Colors")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Colors</Text>
            <Icon
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Forms")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Forms</Text>
            <Icon
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Sections")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Sections</Text>
            <Icon
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Avatars")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Avatars</Text>
            <Icon
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </Pressable>
      </ScrollView>
    </Layout>
  );
};
