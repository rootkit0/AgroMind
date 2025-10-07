import { ChatMessage } from "./chat-message";

export interface ChatSession {
  id?: string;
  userId: string;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  messages: ChatMessage[];
  model?: string; // e.g., llama3, mistral, etc.
}
