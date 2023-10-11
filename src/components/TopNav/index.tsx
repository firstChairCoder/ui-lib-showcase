import type { FC, ReactNode } from "react";
import type { TextStyle, ViewProps } from "react-native";
import { Pressable, View } from "react-native";

import { useTheme } from "../../context/theme-context";
import { component } from "../../constants/colors";
import Text from "../Text";

interface TopNavProps extends ViewProps {
  height?: number;
  backgroundColor?: string;
  borderColor?: string;
  leftAction?: VoidFunction;
  middleAction?: VoidFunction;
  rightAction?: VoidFunction;
  leftContent?: string | ReactNode;
  rightContent?: string | ReactNode;
  middleContent?: string | ReactNode;
  leftTextStyle?: TextStyle;
  rightTextStyle?: TextStyle;
  middleTextStyle?: TextStyle;
}

const TopNav: FC<TopNavProps> = ({
  height = 64,
  backgroundColor,
  borderColor,
  leftAction,
  middleAction,
  rightAction,
  leftContent,
  middleContent,
  rightContent,
  leftTextStyle,
  rightTextStyle,
  middleTextStyle,
  ...rest
}) => {
  const { theme } = useTheme();
  return (
    <View
      {...rest}
      style={{
        height: height,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: backgroundColor
          ? backgroundColor
          : component[theme].topNav.backgroundColor,
        alignItems: "center",
        borderColor: backgroundColor
          ? borderColor
          : component[theme].topNav.borderColor,
        borderBottomWidth: 1
      }}
    >
      <Pressable
        onPress={leftAction}
        style={{
          flex: 1,
          alignItems: "flex-start"
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          {typeof leftContent === "string" ? (
            <Text style={leftTextStyle} fontWeight="bold" size="lg">
              {leftContent}
            </Text>
          ) : (
            leftContent
          )}
        </View>
      </Pressable>
      <Pressable
        onPress={middleAction}
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {typeof middleContent === "string" ? (
            <Text style={middleTextStyle} fontWeight="bold" size="lg">
              {middleContent}
            </Text>
          ) : (
            middleContent
          )}
        </View>
      </Pressable>
      <Pressable
        onPress={rightAction}
        style={{
          flex: 1,
          alignItems: "flex-end"
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: "flex-end",
            justifyContent: "center"
          }}
        >
          {typeof rightContent === "string" ? (
            <Text style={rightTextStyle} fontWeight="bold" size="lg">
              {rightContent}
            </Text>
          ) : (
            rightContent
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default TopNav;
