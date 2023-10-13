import type { FC } from "react";
import {
  Image,
  type ImageProps,
  type ImageSourcePropType,
  View
} from "react-native";

interface SectionImageProps extends ImageProps {
  source: ImageSourcePropType;
  height?: number;
}

const SectionImage: FC<SectionImageProps> = ({
  source,
  height = 150,
  style
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={[style, { height: height, flex: 1 }]} source={source} />
    </View>
  );
};

export default SectionImage;
