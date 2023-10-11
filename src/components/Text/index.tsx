import type { FC } from "react";
import type { TextProps, TextStyle } from "react-native";
import { Text as RNText } from "react-native";

import { useTheme } from "../../context/theme-context";
import { component, themeColor } from "../../constants/colors";
import { fontSize } from "../../constants/typography";

interface CustomTextProps extends TextProps {
  fontWeight?:
    | "thin"
    | "extra-light"
    | "light"
    | "regular"
    | "medium"
    | "semi-bold"
    | "bold"
    | "extra-bold"
    | "black";
  italic?: boolean;
  size?: keyof typeof fontSize;
  style?: TextStyle;
  status?: "primary" | "success" | "warning" | "info" | "danger";
}

const Text: FC<CustomTextProps> = (props: CustomTextProps) => {
  const { theme } = useTheme();
  const getFont = () => {
    if (props.italic) {
      return "Italic";
    } else {
      if (props.fontWeight) {
        return props.fontWeight[0].toUpperCase() + props.fontWeight.slice(1);
      }
      return "Regular";
    }
  };

  const getSize = () => {
    if (props.style?.fontSize) {
      return props.style?.fontSize;
    } else {
      return props.size ? fontSize[props.size] : fontSize.lg;
    }
  };

  return (
    <RNText
      {...props}
      style={{
        ...props.style,
        fontFamily: getFont(),
        fontSize: getSize(),
        color: props.status
          ? themeColor[props.status]
          : props.style?.color
          ? props.style?.color
          : component[theme].text.color
      }}
    />
  );
};

export default Text;
