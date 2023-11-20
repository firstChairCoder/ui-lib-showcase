import type { FC, ImgHTMLAttributes } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { borderRadius } from "styled-system";

import { Text } from "../../../src/components";
import { Flex } from "../../atoms";

const SIZES = {
  xxs: {
    diameter: 30,
    typeSize: "13"
  },
  xs: {
    diameter: 45,
    typeSize: "13"
  },

  sm: {
    diameter: 70,
    typeSize: "16"
  },
  md: {
    diameter: 100,
    typeSize: "24"
  }
};

export interface AvatarProps extends ImgHTMLAttributes<any> {
  src?: string;
  /**If an image is missing, show initials instead */
  initials?: string;
  size?: keyof typeof SIZES;
}

export const InitialsHolder = styled(Flex)`
  border: #e7e7e7;
  text-align: center;
  overflow: hidden;
  ${borderRadius}
`;

const Avatar: FC<AvatarProps> = ({ src, initials, size = "md" }) => {
  const { diameter } = SIZES[size];
  if (src) {
    return (
      <Image
        source={{ uri: src }}
        resizeMode="contain"
        style={{
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          borderColor: "#FFF",
          borderWidth: 1
        }}
      />
    );
  }

  return (
    <InitialsHolder>
      <Text size="md">{initials}</Text>
    </InitialsHolder>
  );
};

export default Avatar;
