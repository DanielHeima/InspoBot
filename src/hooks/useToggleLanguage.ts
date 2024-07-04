import { useContext } from "react";
import { LanguageContext } from "../context";

export function useToggleLanguage(): () => void {
  const { language, setLanguage } = useContext(LanguageContext);
  const isIcelandic = language === "is";
  if (isIcelandic) {
    return () => setLanguage('en');
  }
  return () => setLanguage('is');
}