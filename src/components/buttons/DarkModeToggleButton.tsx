import { View, Pressable, ViewStyle } from "react-native";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { useContext } from "react";
import { ThemeSvgIconStateContext } from "@/src/context";
import { SvgUri } from "react-native-svg";
import { useSpring, animated } from "@react-spring/native";
import { COLORS } from "@/src/constants/colors";
import { useToggleSvgIconState } from "@/src/hooks/useToggleSvgIconState";
import { StyleProp } from "react-native";

export function DarkModeToggleButton({ style }: { style?: StyleProp<ViewStyle> }) {
  const { svgIconState } = useContext(ThemeSvgIconStateContext);
  const toggleTheme = useToggleTheme();
  const toggleUri = useToggleSvgIconState();
  const sunFillColor = COLORS['light']['icon'];
  const sunStrokeColor = COLORS['light']['secondary'];

  const handleClick = () => {
    toggleTheme();
    api.start({
      to: async (next) => {
        await next({
          rotate: "180deg",
          scale: 0,
          opacity: 0
        });
        toggleUri();
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
          fill={svgIconState.type === 'moon' ? '#333' : sunStrokeColor}
          stroke={svgIconState.type === 'moon' ? '#333' : sunFillColor}
          width={32}
          height={32}
          uri={svgIconState.uri} />
      </Pressable>
    </AnimatedView>
  </View>
}
