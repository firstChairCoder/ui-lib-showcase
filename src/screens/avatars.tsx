import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons as Icon } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";

import type { MainStackParamList } from "../navigation/types";
import { useTheme } from "../context/theme-context";
import {
  Layout,
  Avatar as Profile,
  Section,
  SectionContent,
  Text,
  TopNav
} from "../components";
import { themeColor } from "../constants/colors";

export const Avatars = ({
  navigation
}: StackScreenProps<MainStackParamList, "Avatars">) => {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        leftContent={
          <Icon
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent="Avatars"
        rightContent={
          <Icon
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
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
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text fontWeight="medium">Sizes</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Extra large xl</Text>
              <Profile source={require("../../assets/female.jpg")} size="xl" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <Text size="lg">Large lg</Text>
              <Profile username="Jane Doe" size="lg" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Medium md</Text>
              <Profile
                source={require("../../assets/female-3.jpg")}
                size="md"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Small sm</Text>
              <Profile username="Mary Jane" size="sm" />
            </View>
          </SectionContent>
        </Section>
        <Section style={{ marginVertical: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text fontWeight="medium">Shapes</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Profile
                  source={require("../../assets/female.jpg")}
                  size="xl"
                />
                <Profile username="Jane Doe" size="lg" />
                <Profile
                  source={require("../../assets/female-3.jpg")}
                  size="md"
                />
                <Profile username="Mary Jane" size="sm" />
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>round</Text>
                <Text fontWeight="bold">default</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Profile
                  shape="rounded"
                  source={require("../../assets/female.jpg")}
                  size="xl"
                />
                <Profile shape="rounded" username="Jane Doe" size="lg" />
                <Profile
                  shape="rounded"
                  source={require("../../assets/female-3.jpg")}
                  size="md"
                />
                <Profile shape="rounded" username="Mary Jane" size="sm" />
              </View>
              <Text>rounded </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Profile
                  shape="square"
                  source={require("../../assets/female.jpg")}
                  size="xl"
                />
                <Profile shape="square" username="Jane Doe" size="lg" />
                <Profile
                  shape="square"
                  source={require("../../assets/female-3.jpg")}
                  size="md"
                />
                <Profile shape="square" username="Mary Jane" size="sm" />
              </View>
              <Text>square</Text>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
};
