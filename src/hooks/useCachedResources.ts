import { Asset } from "expo-asset";
import { useEffect, useState } from "react";
import {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  useFonts
} from "@expo-google-fonts/montserrat";

export default function useCachedResources(
  images?: Array<any> | null,
  fonts?: any
) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const fontsLoaded = useFonts({
    Thin: Montserrat_100Thin,
    ExtraLight: Montserrat_200ExtraLight,
    Light: Montserrat_300Light,
    Regular: Montserrat_400Regular,
    Italic: Montserrat_400Regular_Italic,
    Medium: Montserrat_500Medium,
    SemiBold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
    ExtraBold: Montserrat_800ExtraBold,
    Black: Montserrat_900Black,
    ...fonts
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Promise.all([images && Asset.loadAsync(images), fontsLoaded]);
      } catch (err) {
        console.warn(err);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
