import { useContext } from "react";
import { APP_LABELS } from "../constants/labels";
import { LanguageContext } from "../context";


export function useLabel(
  labelName: keyof typeof APP_LABELS.en & keyof typeof APP_LABELS.is
) {
  const lang = useContext(LanguageContext).language;
  return APP_LABELS[lang][labelName];
}