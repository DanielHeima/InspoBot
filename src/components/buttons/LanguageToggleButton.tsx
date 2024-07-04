import { Button } from "react-native";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { useToggleLanguage } from "@/src/hooks/useToggleLanguage";
import { useContext } from "react";
import { LanguageContext } from "@/src/context";
export function LanguageToggleButton() {
  const toggleLanguage = useToggleLanguage();
  const langCtx = useContext(LanguageContext);
  console.log(langCtx.language);
 
  return <Button
    onPress={toggleLanguage}
    title='Toggle language'
    color={useThemeColor('primary')}
  />
}