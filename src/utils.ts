import { ConvoBubble } from "./types/model";

export function compareBubbles(a: ConvoBubble, b: ConvoBubble): number {
  return a.createdAt.getTime() - b.createdAt.getTime();
}