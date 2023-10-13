import {
  type ColorValue,
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View
} from "react-native";
import type { FC } from "react";
import { useState } from "react";
import { Ionicons as Icon } from "@expo/vector-icons";

import type { fontSize } from "../../constants/typography";
import { useTheme } from "../../context/theme-context";
import { component } from "../../constants/colors";
import Text from "../Text";

interface PickerProps {
  items: items[];
  placeholder: string;
  value?: string | null;
  onValueChange?: (val: string) => void;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: ColorValue;
  selectionBackgroundColor?: ColorValue;
  selectionBorderRadius?: number;
  iconColor?: ColorValue;
  labelColor?: ColorValue;
  closeIconColor?: ColorValue;
  labelSize?: keyof typeof fontSize;
  placeholderSize?: keyof typeof fontSize;
  placeholderColor?: ColorValue;
  disabled?: boolean;
}

interface items {
  label: string;
  value: string;
}

const Picker: FC<PickerProps> = ({
  items,
  placeholder,
  value,
  onValueChange,
  borderColor,
  borderWidth = 1,
  borderRadius = 8,
  backgroundColor,
  selectionBackgroundColor,
  selectionBorderRadius = 8,
  iconColor,
  labelColor,
  closeIconColor,
  labelSize = "lg",
  placeholderSize = "md",
  placeholderColor,
  disabled = false
}) => {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const [toggleModal, setToggleModal] = useState(false);

  const selected = items.find((o) => o.value === value);

  const [selectedValue, setSelectedValue] = useState<items | undefined | null>(
    value ? selected : null
  );

  const selectedBorderColor = borderColor
    ? borderColor
    : component[theme].picker.borderColor;
  const selectedBackgroundColor = backgroundColor
    ? backgroundColor
    : component[theme].picker.backgroundColor;
  const selectedSelectionBackgroundColor = selectionBackgroundColor
    ? selectionBackgroundColor
    : component[theme].picker.selectionBackgroundColor;
  const selectedIconColor = iconColor
    ? iconColor
    : component[theme].picker.iconColor;
  const selectedLabelColor = labelColor
    ? labelColor
    : component[theme].picker.labelColor;
  const selectedCloseIconColor = closeIconColor
    ? closeIconColor
    : component[theme].picker.closeIconColor;
  const selectedPlaceholderColor = placeholderColor
    ? placeholderColor
    : component[theme].picker.placeholderColor;

  const renderPickerItems = () => {
    return items.map((item, index) => {
      return (
        <Pressable
          key={index}
          onPress={() => {
            onValueChange && onValueChange(item.value);
            setSelectedValue(item);
            setToggleModal(!toggleModal);
          }}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20
          }}
        >
          <Text
            style={{ color: selectedLabelColor }}
            size={labelSize}
            fontWeight={
              selectedValue?.value === item.value ? "bold" : "regular"
            }
          >
            {item.label}
          </Text>
        </Pressable>
      );
    });
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={toggleModal}
        onRequestClose={() => {
          setToggleModal(!toggleModal);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.2)"
          }}
        >
          <View
            style={{
              backgroundColor: component[theme].picker.backgroundColor,
              borderRadius: 8,
              width: width - 40,
              maxHeight: height - 300
            }}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: selectedSelectionBackgroundColor,
                borderRadius: selectionBorderRadius
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: selectedLabelColor }} fontWeight="bold">
                  {placeholder}
                </Text>
              </View>

              <Pressable
                onPress={() => {
                  setToggleModal(!toggleModal);
                }}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 4,
                  backgroundColor: selectedCloseIconColor,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon name="ios-close" size={20} color="#fff" />
              </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {renderPickerItems()}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => {
          setToggleModal(!toggleModal);
        }}
        style={{
          backgroundColor: selectedBackgroundColor,
          borderColor: selectedBorderColor,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          flexDirection: "row",
          padding: 14,
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "space-between"
        }}
        disabled={disabled}
      >
        <Text
          style={{
            color: selectedValue
              ? selectedLabelColor
              : selectedPlaceholderColor,
            marginRight: 5
          }}
          size={placeholderSize}
        >
          {selectedValue?.label || placeholder}
        </Text>
        <Icon name="caret-down" size={18} color={selectedIconColor} />
      </Pressable>
    </>
  );
};

export default Picker;
