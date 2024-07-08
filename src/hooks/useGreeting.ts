import { useLabel } from "./useLabel";

export function useGreeting(
  name: string
) {
  let timeOfDay: 'greetingMorning'|'greetingAfternoon'|'greetingEvening' = 'greetingMorning';

  let hour = new Date().getHours();
  if (hour > 17) {
    timeOfDay = 'greetingEvening'
  } else if (hour > 12) {
    timeOfDay = 'greetingAfternoon'
  }

  return `${useLabel(timeOfDay)} ${name}.`
}