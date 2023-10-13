import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons as Icon } from "@expo/vector-icons";

import type { MainStackParamList } from "../navigation/types";
import { useTheme } from "../context/theme-context";
import {
  Layout,
  Section,
  SectionContent,
  SectionImage,
  Text,
  TopNav
} from "../components";
import { themeColor } from "../constants/colors";

export const Sections = ({
  navigation
}: StackScreenProps<MainStackParamList, "Sections">) => {
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
        middleContent="Sections"
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
      <>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text>This is a Section</Text>
          </SectionContent>
        </Section>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionImage source={require("../../assets/icon.png")} />
          <SectionContent>
            <Text>This is a Section with an image</Text>
          </SectionContent>
        </Section>
      </>
    </Layout>
  );
};
