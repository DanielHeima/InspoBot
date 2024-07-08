import { Language } from "../types/context"

const EN = {
  convoPageTitle: 'AI chat',
  convoPlaceHolder: 'Type a message...',
  navHome: 'Home',
  navMyConvos: 'My convos',
  navSettings: 'Settings',
  navNewConvo: 'New convo',
  newConvoGoToOlder: 'Or go to an older conversation...',
  homePressButtonBelow: 'Press the button below to start a new convo.',
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
}

const IS: typeof EN = {
  convoPageTitle: 'AI samtal',
  convoPlaceHolder: 'Skrifa skilaboð...',
  navHome: 'Heim',
  navMyConvos: 'Mín samtöl',
  navSettings: 'Stillingar',
  navNewConvo: 'Nýtt samtal',
  newConvoGoToOlder: 'Eða opnaðu eldra samtal...',
  homePressButtonBelow: 'Ýttu á takkann að neðan til að byrja nýtt samtal.',
  greetingMorning: 'Góðan dag',
  greetingAfternoon: 'Góðan dag',
  greetingEvening: 'Gott kvöld',
}

type AppLabelsType = { [key in Language]: typeof EN }
export const APP_LABELS: AppLabelsType = {
  en: EN,
  is: IS
}
