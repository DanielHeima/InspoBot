export type BotType = 'raw'|'inspirational'|'therapist';

export type ConvoHrefSearchParams = {
  convoId: string | 'new',
  botType: BotType
}

export type ConvoHrefObject = {
  pathname: string,
  params: ConvoHrefSearchParams
}

