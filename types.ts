/**
 * Global Type Definitions
 */

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface AIConversation {
  id: string;
  userId: string;
  messages: AIMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  homepage: string;
  features: string[];
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
