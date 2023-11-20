import type { FC, ImgHTMLAttributes } from "react";
import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  View
} from "react-native";

import Text from "../Text";
import getUserInitials from "../../utils/get-user-initials";
import getRandomColor from "../../utils/get-random-color";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%"
  }
});

const sizes = {
  xl: 80,
  lg: 60,
  md: 40,
  sm: 30
};

const textSizes = {
  xl: "h2",
  lg: "xl",
  md: "lg",
  sm: "sm"
};

const shapes = {
  rounded: 4,
  square: 0,
  round: 2
};

interface AvatarProps extends ImgHTMLAttributes<any> {
  source?: ImageSourcePropType;
  style?: any; //TODO:
  /**If an image is missing, show initials instead generated from username */
  username?: string;
  size?: keyof typeof sizes;
  shape?: keyof typeof shapes;
}

const Avatar: FC<AvatarProps> = ({
  source,
  username,
  size = "lg",
  style,
  shape = "round"
}) => {
  const initials = getUserInitials(username);
  const backgroundColor = getRandomColor();
  if (source) {
    return (
      <Image
        resizeMode="cover"
        style={[
          style,
          {
            height: sizes[size],
            width: sizes[size],
            borderRadius: shape === "square" ? 0 : sizes[size] / shapes[shape]
          }
        ]}
        source={source}
      />
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            height: sizes[size],
            width: sizes[size],
            borderRadius: shape === "square" ? 0 : sizes[size] / shapes[shape]
          }
        ]}
      >
        <Text fontWeight="bold" size={textSizes[size]}>
          {initials}
        </Text>
      </View>
    );
  }
};

export default Avatar;
