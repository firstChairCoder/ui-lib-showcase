import type { FC } from "react";
import { type ColorValue, Pressable, View, type ViewStyle } from "react-native";

import { component, themeColor } from "../../constants/colors";
import { useTheme } from "../../context/theme-context";

interface RadioButtonProps {
  value: boolean;
  onValueChange?: (newValue: boolean) => void;
  checkedColor?: ColorValue;
  uncheckedColor?: ColorValue;
  inverseColor?: ColorValue;
  disabled?: boolean;
  style?: ViewStyle;
  size?: number;
}

const RadioButton: FC<RadioButtonProps> = ({
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
        borderRadius: size / 2,
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
      {value && (
        <View
          style={{
            width: size - 4,
            height: size - 4,
            borderRadius: (size - 4) / 2,
            borderWidth: 4,
            borderColor: disabled
              ? inverseColor
              : value
              ? inverseColor
              : selectedUncheckedColor,
            backgroundColor: disabled
              ? component[theme].checkBox.disabledColor
              : value
              ? selectedCheckedColor
              : "transparent"
          }}
        />
      )}
    </Pressable>
  );
};

export default RadioButton;
