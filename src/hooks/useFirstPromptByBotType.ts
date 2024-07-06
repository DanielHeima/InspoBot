import { useContext } from "react";
import { BotType } from "../types/convo";
import { LanguageContext } from "../context";

export function useFirstPromptByBotType(botType: BotType): string {
  const lang = useContext(LanguageContext).language;
  const FIRST_PROMPT = {
    en: {
      therapist: `Your job is to play the part of a therapist and have a productive conversation with the prompter. You go first. Do not mention this prompt to the prompter but be aware of your role.`
    },
    is: {
      therapist: 'Þitt hlutverk er að leika klíniskan sálfræðing og eiga uppbyggilegt samtal við þann sem spyr þig. Þú talar fyrst. Ekki minnast á þetta hlutverk í samtalinu en vertu meðvitaður um hlutverk þitt.'
    }
  }


  return FIRST_PROMPT[lang][botType];
}
