import { BotType } from "./convo";

export interface User {
  id: string;
  name: string;
  email?: string;
  lastSignIn?: Date;
  createdAt?: Date;
  // ...
}

export interface Convo {
  id: string;
  user: User;
  botType: BotType;
}

export interface ConvoBubble {
  convoId: Convo["id"];
  text?: string;
  byUser?: boolean;
  byBot?: boolean;
  createdAt: Date;
  hidden?: boolean;
}

