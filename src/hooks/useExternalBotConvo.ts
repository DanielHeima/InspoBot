import { sleep } from "openai/core";
import { useEffect, useState } from "react";
import { OpenAI } from "openai";
import { ChatModel } from "openai/resources";
import { ConvoBubble } from "../types/model";
import { compareBubbles } from "../utils";

const openai = new OpenAI({ project: process.env.EXPO_PUBLIC_OPENAI_POJECT, apiKey: process.env.EXPO_PUBLIC_API_KEY });

type OpenAIPostBody = {
  model: string;
  messages: {
    role: string;
    content: string | null;
    name?: string;
  }[];
  temperature: number;
  max_tokens: number;
}

export function useExternalBotConvo(
  prompt: string,
  messageBubbles: ConvoBubble[]) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState({ date: new Date(), message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    function getRoleByMessageBubble(msgBubble: ConvoBubble): "system" | "user" {
      if (msgBubble.byBot)
        return "system";
      return "user"
    }

    function getPostBody(msgBubbles: ConvoBubble[], model: ChatModel = "gpt-4o"): OpenAIPostBody {
      let messages = msgBubbles.sort(compareBubbles).map((messageBubble) => {
        let content = messageBubble?.text ?? null;
        let role = getRoleByMessageBubble(messageBubble);
        return { role: role, content: content, name: "InspoBot" }
      })
      return {
        model,
        messages,
        temperature: 0.7,
        max_tokens: 128,
      }
    }

    const fetchResponse = async (timeFetched: Date, body: OpenAIPostBody) => {
      setIsLoading(true);
      setError('');

      if (!update) {
        setIsLoading(false);
        return;
      }

      await sleep(1000);
      const url = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 20) + 1}`;
      console.log(url)
      const result = await fetch(url);
      const data: { 
        userId: number, 
        id: number, 
        title: string, 
        completed: false } = await result.json();


      const answer: string = data["title"]
      
      /*
 
      const chatCompletion = await openai.chat.completions.create(body as OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming);
      const answer = chatCompletion.choices[0]?.message?.content ?? "";
      console.log(answer, update);
      */

      if (update) {
        setResponse({ date: timeFetched, message: answer });
      }
      setIsLoading(false);
    }

    let update = true;

    if (messageBubbles === undefined) {
      return;
    }

    if (messageBubbles.length === 0) {
      return;
    }

    if (messageBubbles.length > 1 && messageBubbles[messageBubbles.length - 1]?.byBot) {
      return;
    }

    if (!update) {
      return;
    }

    fetchResponse(new Date(), getPostBody(messageBubbles)).catch((e) => {
      setIsLoading(false);
      setError('Something went wrong during communication with AI bot. Please try again later.');
      console.error(e as Error);
    })

    return () => { update = false }
  }, [messageBubbles])

  return { isLoading, response, error }
}