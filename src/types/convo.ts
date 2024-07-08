export type BotType = 'therapist';

export type ConvoHrefSearchParams = {
  convoId: string | 'new',
  botType: BotType
}

export type ConvoHrefObject = {
  pathname: string,
  params: ConvoHrefSearchParams
}

