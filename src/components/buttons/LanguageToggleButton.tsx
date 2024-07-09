import { View, Pressable, ViewStyle, StyleProp, Dimensions } from "react-native";
import { useContext } from "react";
import { LanguageContext } from "@/src/context";
import { SvgUri } from "react-native-svg";
import { useSpring, animated } from "@react-spring/native";
import { useToggleLanguage } from "@/src/hooks/useToggleLanguage";
import { gbUri, isUri } from "@/src/constants/uri";

export function LanguageToggleButton({ style }: { style?: StyleProp<ViewStyle> }) {
  const toggleLanguage = useToggleLanguage();
  const langCtx = useContext(LanguageContext);

  const handleClick = () => {
    api.start({
      to: async (next) => {
        await next({
          rotate: "180deg",
          opacity: 0
        });
        toggleLanguage();
        await next({
          rotate: "360deg",
          opacity: 1,
        })
      },
      from: { rotate: "0deg" }
    });
  }

  const [springs, api] = useSpring(() => {
    return {
      to: {
        rotate: "0deg",
        opacity: 1
      },
      from: { rotate: "0deg", opacity: 1 },
      config: {
        duration: 500,
      }
    }
  });

  const AnimatedView = animated(View);
  const iconDim = 30;

  return <View style={[style]}>
    <AnimatedView
      style={{
        transform: [
          { rotate: springs.rotate },
        ],
        opacity: springs.opacity
      }}
    >
      <Pressable
        onPress={handleClick}
      >
        <View style={{ borderRadius: iconDim / 2, width: iconDim, height: iconDim, overflow: "hidden", backgroundColor: 'gray' }}>
          <SvgUri
            width={30}
            height={30}
            uri={langCtx.language === 'is' ? isUri : gbUri} />
        </View>
      </Pressable>
    </AnimatedView>
  </View>
}
