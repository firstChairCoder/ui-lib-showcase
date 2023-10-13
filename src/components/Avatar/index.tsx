import type { FC } from "react";
import { Image, type ImageProps, type ImageSourcePropType } from "react-native";

const sizes = {
  xl: 80,
  lg: 60,
  md: 40,
  sm: 30
};

const shapes = {
  rounded: 4,
  square: 0,
  round: 2
};

interface AvatarProps extends ImageProps {
  source: ImageSourcePropType;
  size?: keyof typeof sizes;
  shape?: keyof typeof shapes;
}

const Avatar: FC<AvatarProps> = ({
  source,
  size = "lg",
  style,
  shape = "round"
}) => {
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
};

export default Avatar;
