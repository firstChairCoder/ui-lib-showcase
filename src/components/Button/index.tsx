/* eslint-disable @typescript-eslint/no-shadow */
import type { FC, ReactNode } from "react";
import {
  type TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  type TouchableWithoutFeedbackProps,
  View,
  type ViewStyle
} from "react-native";

import { component, themeColor } from "../../constants/colors";
import Text from "../Text";
import { useTheme } from "../../context/theme-context";

interface ButtonProps extends TouchableWithoutFeedbackProps {
  type?: keyof typeof type;
  style?: ViewStyle;
  color?: string;
  outline?: boolean;
  inverseColor?: string;
  text?: string;
  textStyle?: TextStyle;
  size?: keyof typeof sizeProp;
  outlineWidth?: number;
  disabled?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  status?: "primary" | "success" | "warning" | "info" | "danger";
  width?: number;
}

interface ContentProps {
  style?: ViewStyle;
  color?: string;
  outline?: boolean;
  inverseColor?: string;
  text?: string;
  textStyle?: TextStyle;
  size?: keyof typeof sizeProp;
  outlineWidth?: number;
  disabled?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  selectedColor?: any;
  selectedInverseColor?: any;
  status?: "primary" | "success" | "warning" | "info" | "danger";
}

enum sizeProp {
  sm,
  md,
  lg // default
}

const type = {
  TouchableOpacity: "TouchableOpacity", // default
  TouchableWithoutFeedback: "TouchableWithoutFeedback",
  TouchableHighlight: "TouchableHighlight"
};

const parentStyle = {
  buttonColor: themeColor.primary, // background color
  buttonInverseColor: themeColor.white, // inversed background color
  outlineWidth: 2
};

const styles = {
  lg: {
    ...parentStyle,
    buttonBorderRadius: 8,
    buttonPaddingVertical: 12.5,
    buttonPaddingHorizontal: 15,
    textSize: "lg"
  },
  md: {
    ...parentStyle,
    buttonBorderRadius: 8,
    buttonPaddingVertical: 10,
    buttonPaddingHorizontal: 12.5,
    textSize: "md"
  },
  sm: {
    ...parentStyle,
    buttonBorderRadius: 8,
    buttonPaddingVertical: 7.5,
    buttonPaddingHorizontal: 12.5,
    textSize: "sm"
  }
};

const ButtonContent: FC<ContentProps> = (props: ContentProps) => {
  const {
    text,
    textStyle,
    outline,
    size,
    leftContent,
    rightContent,
    selectedColor,
    selectedInverseColor,
    disabled
  } = props;
  const { theme } = useTheme();
  return (
    <>
      {leftContent}
      <Text
        style={{
          ...textStyle,
          color: textStyle?.color
            ? textStyle?.color
            : outline
            ? selectedColor
            : disabled
            ? component[theme].button.disabledTextColor
            : selectedInverseColor,
          marginLeft: textStyle?.marginLeft
            ? textStyle?.marginLeft
            : leftContent
            ? 5
            : 0,
          marginRight: textStyle?.marginRight
            ? textStyle?.marginRight
            : rightContent
            ? 5
            : 0
        }}
        fontWeight="bold"
        size={size}
      >
        {text}
      </Text>
      {rightContent}
    </>
  );
};

const Button: FC<ButtonProps> = ({
  text,
  size,
  status,
  style,
  textStyle,
  outline,
  color,
  inverseColor,
  outlineWidth,
  disabled,
  leftContent,
  rightContent,
  type,
  width,
  ...buttonProps
}) => {
  const { theme } = useTheme();
  const selectedColor = disabled
    ? component[theme].button.disabledColor
    : color
    ? color
    : status
    ? themeColor[status]
    : styles[size || "lg"].buttonColor;

  const selectedInverseColor = inverseColor
    ? inverseColor
    : status
    ? themeColor.white
    : styles[size || "lg"].buttonInverseColor;

  const containerStyle = outline
    ? {
        borderWidth: outlineWidth || styles[size || "lg"].outlineWidth,
        backgroundColor: outline ? "transparent" : selectedInverseColor,
        borderColor: selectedColor
      }
    : { backgroundColor: selectedColor };

  const paddingHorizontal =
    style?.paddingHorizontal || styles[size || "lg"].buttonPaddingHorizontal;

  const paddingVertical = outline
    ? styles[size || "lg"].buttonPaddingVertical -
      styles[size || "lg"].outlineWidth
    : style?.paddingVertical || styles[size || "lg"].buttonPaddingVertical;

  const borderRadius =
    style?.borderRadius || styles[size || "lg"].buttonBorderRadius;

  if (type === "TouchableWithoutFeedback") {
    return (
      <TouchableWithoutFeedback {...buttonProps} disabled={disabled}>
        <View
          style={{
            ...style,
            ...containerStyle,
            width,
            flexDirection: "row",
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            borderRadius: borderRadius,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ButtonContent
            {...{
              text,
              size,
              status,
              style,
              textStyle,
              outline,
              color,
              inverseColor,
              outlineWidth,
              disabled,
              leftContent,
              rightContent,
              type,
              ...buttonProps
            }}
            selectedColor={selectedColor}
            selectedInverseColor={selectedInverseColor}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  if (type === "TouchableHighlight") {
    return (
      <TouchableHighlight
        {...buttonProps}
        disabled={disabled}
        style={{
          ...style,
          ...containerStyle,
          width,
          flexDirection: "row",
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          borderRadius: borderRadius,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ButtonContent
          {...{
            text,
            size,
            status,
            style,
            textStyle,
            outline,
            color,
            inverseColor,
            outlineWidth,
            disabled,
            leftContent,
            rightContent,
            type,
            ...buttonProps
          }}
          selectedColor={selectedColor}
          selectedInverseColor={selectedInverseColor}
        />
      </TouchableHighlight>
    );
  }
  return (
    <TouchableOpacity
      {...buttonProps}
      disabled={disabled}
      style={{
        ...style,
        ...containerStyle,
        width,
        flexDirection: "row",
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        borderRadius: borderRadius,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ButtonContent
        {...{
          text,
          size,
          status,
          style,
          textStyle,
          outline,
          color,
          inverseColor,
          outlineWidth,
          disabled,
          leftContent,
          rightContent,
          type,
          ...buttonProps
        }}
        selectedColor={selectedColor}
        selectedInverseColor={selectedInverseColor}
      />
    </TouchableOpacity>
  );
};

export default Button;
