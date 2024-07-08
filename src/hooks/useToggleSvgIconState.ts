import { useContext } from "react";
import { SvgIconStateContext } from "../context";
import { moonUri, sunUri } from "../constants/uri";

export function useToggleSvgIconState(): () => void {
  const { svgIconState, setSvgIconState } = useContext(SvgIconStateContext);
  const isMoon = svgIconState.type === 'moon';
  if (isMoon) {
    return () => setSvgIconState({ type: 'sun', uri: sunUri });
  }
  return () => setSvgIconState({ type: 'moon', uri: moonUri });
}
