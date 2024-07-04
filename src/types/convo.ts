export type BotType = 'therapist';

export type ConvoHrefSearchParams = {
  convoId: string,
  botType: BotType
}

export type ConvoHrefObjectType = {
  pathname: string,
  params: ConvoHrefSearchParams
}