import type { FC, ReactNode } from "react";
import { forwardRef } from "react";
import {
  type ColorValue,
  TextInput as RNTextInput,
  type TextInputProps,
  View,
  type ViewStyle
} from "react-native";

import { useTheme } from "../../context/theme-context";
import { component } from "../../constants/colors";

interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
}

const Input: FC<InputProps> = forwardRef((props: InputProps, ref: any) => {
  const { theme } = useTheme();
  const {
    containerStyle,
    leftContent,
    rightContent,
    backgroundColor = containerStyle?.backgroundColor ||
      component[theme].textInput.backgroundColor,
    borderColor = component[theme].textInput.borderColor,
    borderWidth = containerStyle?.borderWidth || 1,
    borderRadius = containerStyle?.borderRadius || 8,
    ...rest
  } = props;

  return (
    <View
      style={{
        ...containerStyle,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        flexDirection: containerStyle?.flexDirection || "row",
        paddingHorizontal: containerStyle?.paddingHorizontal || 20,
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {leftContent}
      <RNTextInput
        {...rest}
        ref={ref}
        placeholderTextColor={component[theme].textInput.placeholderTextColor}
        style={{
          flex: 1,
          color: component[theme].textInput.color,
          paddingVertical: containerStyle?.padding || 10,
          fontFamily: "Regular",
          marginLeft: leftContent ? 5 : 0,
          marginRight: rightContent ? 5 : 0
        }}
      />
      {rightContent}
    </View>
  );
});
export default Input;
