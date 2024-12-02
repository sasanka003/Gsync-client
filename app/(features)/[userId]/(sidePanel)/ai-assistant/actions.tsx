import { TextStreamMessage } from "@/app/(features)/[userId]/(sidePanel)/ai-assistant/components/AiMessage";
import { openai } from "@ai-sdk/openai";
import { CoreMessage, generateId, generateText, tool } from "ai";
import {
  createAI,
  createStreamableValue,
  getMutableAIState,
  streamUI,
} from "ai/rsc";
import { ReactNode } from "react";
import { z } from "zod";

// Ensure this function is exported
export async function sendMessage(message: string) {
  "use server";

  const messages = getMutableAIState<typeof AI>("messages");
  const messagesClone = getMutableAIState<typeof AI>("messages");

  const contentStream = createStreamableValue("");
  const textComponent = <TextStreamMessage content={contentStream.value} />;

  // ... rest of your existing sendMessage implementation remains the same
}

export type UIState = Array<ReactNode>;

export type AIState = {
  chatId: string;
  messages: Array<CoreMessage>;
};

export const AI = createAI<AIState, UIState>({
  initialAIState: {
    chatId: generateId(),
    messages: [],
  },
  initialUIState: [],
  actions: {
    sendMessage, // Use the exported sendMessage function
  },
  onSetAIState: async ({ state, done }) => {
    "use server";

    if (done) {
      // save to database
    }
  },
});
