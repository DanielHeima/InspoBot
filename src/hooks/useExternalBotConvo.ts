import { useEffect, useState } from "react";
import { OpenAI } from "openai";
import { sleep } from "openai/core";
import { ConvoBubble } from "../types/model";
import { BotType } from "../types/convo";
import { compareBubbles } from "../utils";
import { ChatCompletionMessageParam, ChatModel } from "openai/resources";

// const apiBaseUrl = process.env.EXPO_PUBLIC_API_BASEURL;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const openai = new OpenAI({ organization: process.env.EXPO_PUBLIC_OPENAI_ORG, apiKey: apiKey });

type PostBody = {
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
    console.log(openai.models);

    function getRoleByMessageBubble(msgBubble: ConvoBubble): string {
      if (msgBubble.byBot)
        return "system";
      return "user"
    }

    function getPostBody(msgBubbles: ConvoBubble[], model: ChatModel = "gpt-4o"): PostBody {
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

    const fetchResponse = async (timeFetched: Date, body: PostBody) => {
      setIsLoading(true);
      setError('');

      
      // await sleep(1000);
      // const url = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 10) + 1}`;
      // console.log(url)
      // const result = await fetch(url);
      // const data: { userId: number, id: number, title: string, completed: false } = await result.json();


      // const answer: string = data["title"]
      

      const { max_tokens, messages, model, temperature } = body;
      console.log('messages', messages);
      console.log('body', body);
 
      const chatCompletion = await openai.chat.completions.create(body as OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming);

      console.log("AI/ML API:\n", chatCompletion.choices[0].message.content);

      const answer = chatCompletion.choices[0]?.message?.content ?? "";
      console.log(answer, update);
      

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

    const body = getPostBody(messageBubbles, "gpt-3.5-turbo");
    console.log('top level body', body)
    const result = fetchResponse(new Date(), body).catch((e) => {
      const err = e as Error;
      setIsLoading(false);
      setError('Something went wrong during communication with AI bot. Please try again later.');
      console.error(err);
    })

    console.log('result', result);

    return () => { update = false }
  }, [prompt, messageBubbles])

  return { isLoading, response, error }
}