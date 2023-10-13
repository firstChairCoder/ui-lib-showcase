import type { ViewProps } from "react-native";
import { View } from "react-native";
import type { FC, ReactNode } from "react";

import SectionContent from "./section-content";
import SectionImage from "./section-image";
import { useTheme } from "../../context/theme-context";
import { component } from "../../constants/colors";

interface SectionProps extends ViewProps {
  children?: ReactNode;
  backgroundColor?: string;
  borderRadius?: number;
}

const Section: FC<SectionProps> = ({
  backgroundColor,
  borderRadius = 10,
  children,
  style,
  ...otherProps
}) => {
  const { theme } = useTheme();
  return (
    <View
      {...otherProps}
      style={[
        style,
        {
          flexDirection: "column",
          backgroundColor: backgroundColor
            ? backgroundColor
            : component[theme].section.backgroundColor,
          borderRadius: borderRadius,
          overflow: "hidden"
        }
      ]}
    >
      {children}
    </View>
  );
};

export { Section, SectionContent, SectionImage };
