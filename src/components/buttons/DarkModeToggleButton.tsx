import { Image, View, Text, Pressable } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { useContext, useState } from "react";
import { SvgIconStateContext, ThemeContext } from "@/src/context";
import { Svg, SvgUri } from "react-native-svg";
import { useSpring, animated } from "@react-spring/native";
import { ThemeToggleSvgIconState } from "@/src/types/icons";
import { Colors } from "@/src/constants/colors";
import { moonUri, sunUri } from "@/src/constants/uri";
import { useToggleSvgIconState } from "@/src/hooks/useToggleSvgIconState";

export function DarkModeToggleButton() {
  const { svgIconState } = useContext(SvgIconStateContext); 
  const toggleTheme = useToggleTheme();
  const toggleUri = useToggleSvgIconState();
  const sunFillColor = Colors['light']['icon'];
  const sunStrokeColor = Colors['light']['secondary'];

  const handleClick = () => {
    toggleTheme();
    api.start({
      to: async (next) => {
        await next({
          rotate: "180deg",
          scale: 0
        });
        toggleUri();
        await next({
          rotate: "360deg",
          scale: 1
        })
      },
      from: { rotate: "0deg", scale: 1 }
    });
  }

  const [springs, api] = useSpring(() => {
    return {
      to: {
        rotate: "360deg",
        scale: 1,
      },
      from: { rotate: "0deg", scale: 1 },
      config: {
        duration: 400
      }
    }
  });

  const AnimatedView = animated(View);

  return <AnimatedView
    style={{
      transform: [
        { scale: springs.scale },
        { rotate: springs.rotate }]
    }}
  >
    <Pressable
      onPress={handleClick}
    >
      <SvgUri
        fill={svgIconState.type === 'moon' ? '#333' : sunStrokeColor}
        stroke={svgIconState.type === 'moon' ? '#333' : sunFillColor}
        width={50}
        height={50}
        uri={svgIconState.uri} />
    </Pressable>
  </AnimatedView>

  // TODO takkar vita ekki af state i hvorum odrum
}
