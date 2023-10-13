import type { FC } from "react";
import { ScrollView, View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons as Icon } from "@expo/vector-icons";

import type { fontSize } from "../constants/typography";
import { Layout, Section, SectionContent, Text, TopNav } from "../components";
import type { MainStackParamList } from "../navigation/types";
import { useTheme } from "../context/theme-context";
import { themeColor } from "../constants/colors";

interface TypographyCardProps {
  size?: keyof typeof fontSize;
}

const TypographyCard: FC<TypographyCardProps> = ({ size }) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 24,
          flexDirection: "row"
        }}
      >
        <Text fontWeight="medium">Size </Text>
        <Text fontWeight="bold">{size}</Text>
      </View>

      <Section style={{ marginHorizontal: 20 }}>
        <SectionContent>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>Normal</Text>
          </View>
          <View>
            <Text fontWeight="bold" size={size}>
              Montserrat Bold
            </Text>
            <Text fontWeight="medium" size={size}>
              Montserrat Medium
            </Text>
            <Text fontWeight="regular" size={size}>
              Montserrat Regular
            </Text>
            <Text fontWeight="light" size={size}>
              Montserrat Light
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", marginBottom: 10, marginTop: 20 }}
          >
            <Text>Italic</Text>
          </View>
          <View>
            <Text fontWeight="bold" size={size} italic>
              Montserrat Bold
            </Text>
            <Text fontWeight="medium" size={size} italic>
              Montserrat Medium
            </Text>
            <Text fontWeight="regular" size={size} italic>
              Montserrat Regular
            </Text>
            <Text fontWeight="light" size={size} italic>
              Montserrat Light
            </Text>
          </View>
        </SectionContent>
      </Section>
    </>
  );
};

export const Typography = ({
  navigation
}: StackScreenProps<MainStackParamList, "Typography">) => {
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
        middleContent="Typography"
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
        <TypographyCard size="h1" />
        <TypographyCard size="h2" />
        <TypographyCard size="h3" />
        <TypographyCard size="xl" />
        <TypographyCard size="lg" />
        <TypographyCard size="md" />
        <TypographyCard size="sm" />
      </ScrollView>
    </Layout>
  );
};
