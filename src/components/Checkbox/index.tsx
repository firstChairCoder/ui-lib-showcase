import type { FC } from "react";
import type { ColorValue, ViewStyle } from "react-native";
import { Pressable } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

import { component, themeColor } from "../../constants/colors";
import { useTheme } from "../../context/theme-context";

interface CheckboxProps {
  value: boolean;
  onValueChange?: (newValue: boolean) => void;
  checkedColor?: ColorValue;
  uncheckedColor?: ColorValue;
  inverseColor?: ColorValue;
  disabled?: boolean;
  style?: ViewStyle;
  size?: number;
}

const Checkbox: FC<CheckboxProps> = ({
  value = false,
  onValueChange,
  checkedColor,
  uncheckedColor,
  inverseColor = themeColor.white,
  disabled = false,
  size = 24,
  style
}) => {
  const { theme } = useTheme();
  const selectedCheckedColor = checkedColor
    ? checkedColor
    : component[theme].checkBox.checkedColor;
  const selectedUncheckedColor = uncheckedColor
    ? uncheckedColor
    : component[theme].checkBox.uncheckedColor;

  const handleChange = () => {
    if (onValueChange) {
      onValueChange(!value);
    }
  };

  return (
    <Pressable
      onPress={handleChange}
      style={{
        ...style,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: style?.borderRadius || 4,
        borderColor: value ? selectedCheckedColor : selectedUncheckedColor,
        backgroundColor: disabled
          ? component[theme].checkBox.disabledColor
          : value
          ? selectedCheckedColor
          : "transparent",
        borderWidth: 1
      }}
      disabled={disabled}
    >
      <Icon
        name="md-checkmark"
        size={size - 2}
        color={
          disabled
            ? inverseColor
            : value
            ? inverseColor
            : selectedUncheckedColor
        }
      />
    </Pressable>
  );
};

export default Checkbox;
