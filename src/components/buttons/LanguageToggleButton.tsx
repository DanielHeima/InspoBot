import { View, Pressable, ViewStyle, StyleProp } from "react-native";
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
          scale: 0,
          opacity: 0
        });
        toggleLanguage();
        await next({
          rotate: "360deg",
          scale: 1,
          opacity: 1,
        })
      },
      from: { rotate: "0deg", scale: 1 }
    });
  }

  const [springs, api] = useSpring(() => {
    return {
      to: {
        rotate: "0deg",
        scale: 1,
        opacity: 1
      },
      from: { rotate: "0deg", scale: 1, opacity: 1 },
      config: {
        duration: 500,
      }
    }
  });

  const AnimatedView = animated(View);

  return <View style={style}>
    <AnimatedView
      style={{
        transform: [
          { scale: springs.scale },
          { rotate: springs.rotate },
        ],
        opacity: springs.opacity
      }}
    >
      <Pressable
        onPress={handleClick}
      >
        <SvgUri
          width={30}
          height={30}
          uri={langCtx.language === 'is' ? isUri : gbUri} />
      </Pressable>
    </AnimatedView>
  </View>
}
