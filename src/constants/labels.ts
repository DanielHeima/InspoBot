import { Language } from "../types/context"

const EN = {
  convoPageTitle: 'AI chat',
  convoPlaceHolder: 'Type a message...',
  navHome: 'Home',
  navMyConvos: 'My convos',
  navSettings: 'Settings',
  navNewConvo: 'New convo',
  navSupport: 'Support',
  homeGoToOlder: 'Or go to an older conversation...',
  homePressButtonBelow: 'Press the button below to start a new convo.',
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
  supportThanks: 'Thank you ❤️',
  supportThanksSub: 'for considering supporting this project. Hopefully the app has been valuable to you.',
  supportCoffeeLinkDesc: "This app was developed and funded by me alone. You can support me at the following link:",
  supportWatchAd: 'Or by watching an ad:',
  supportFoundBug: 'Found a bug?',
  supportRaiseIssue: 'Raise an issue at'
}

const IS: typeof EN = {
  convoPageTitle: 'AI samtal',
  convoPlaceHolder: 'Skrifa skilaboð...',
  navHome: 'Heim',
  navMyConvos: 'Mín samtöl',
  navSettings: 'Stillingar',
  navSupport: 'Styðja',
  navNewConvo: 'Nýtt samtal',
  homeGoToOlder: 'Eða opnaðu eldra samtal...',
  homePressButtonBelow: 'Ýttu á takkann að neðan til að byrja nýtt samtal.',
  greetingMorning: 'Góðan dag',
  greetingAfternoon: 'Góðan dag',
  greetingEvening: 'Gott kvöld',
  supportThanks: 'Takk fyrir ❤️',
  supportThanksSub: 'að íhuga að styðja þetta verkefni. Vonandi hefur appið verið þér einhvers virði.',
  supportCoffeeLinkDesc: 'Þetta app var þróað af mér einum og stend ég einnig straum af uppihaldskostnaði þess. Hægt er að styðja mig í því á eftirfarandi hlekk:',
  supportWatchAd: 'Eða með því að horfa á auglýsingu:',
  supportFoundBug: 'Fannstu pöddu?',
  supportRaiseIssue: 'Hægt er að búa til villulýsingu hér:'
}

export const APP_LABELS: { [lang in Language]: typeof EN } = {
  en: EN,
  is: IS
}
