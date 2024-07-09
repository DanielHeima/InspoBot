import { useContext } from "react";
import { LanguageContext } from "../context";
import { storeAsyncStorage } from "../storage/asyncstorage/asyncstorage";

export function useToggleLanguage(): () => void {
  const { language, setLanguage } = useContext(LanguageContext);
  const isIcelandic = language === "is";
  if (isIcelandic) {
    return () => {
      setLanguage('en');
      storeAsyncStorage('global_lang', 'en');
    };
  }
  return () => {
    setLanguage('is');
    storeAsyncStorage('global_lang', 'is');
  };
}