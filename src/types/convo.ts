export type BotType = 'raw'|'inspirational'|'therapist'|'travel agent';

export type ConvoHrefSearchParams = {
  convoId: string | 'new',
  botType: BotType
}

export type ConvoHrefObject = {
  pathname: string,
  params: ConvoHrefSearchParams
}

