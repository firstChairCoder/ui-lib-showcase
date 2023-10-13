import type { FC, ReactNode } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native";

interface SectionnContentProps extends ViewProps {
  children?: ReactNode;
  padding?: number;
}

const SectionContent: FC<SectionnContentProps> = ({
  children,
  style,
  padding = 20,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[
        style,
        {
          padding: padding
        }
      ]}
    >
      {children}
    </View>
  );
};

export default SectionContent;
