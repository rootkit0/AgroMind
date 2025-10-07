import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, doc, setDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message';
import { ChatSession } from '../models/chat-session';
import { ModelConfig } from '../models/model-config';

@Injectable({ providedIn: 'root' })
export class AgroregenService {
  private ollamaUrl = 'http://localhost:11434/api/chat';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  sendChat(messages: ChatMessage[]): Observable<any> {
    const body = { model: 'llama3', messages, stream: false };
    return this.http.post(this.ollamaUrl, body);
  }

  getUserChatHistory(userId?: string): Observable<ChatSession[]> {
    return collectionData(collection(this.firestore, `users/${userId}/chats`), { idField: 'id' }) as Observable<ChatSession[]>;
  }

  getChatById(userId: string, chatId: string): Observable<ChatSession> {
    return collectionData(collection(this.firestore, `users/${userId}/chats/${chatId}`)) as unknown as Observable<ChatSession>;
  }

  saveChat(userId: string, session: ChatSession) {
    const ref = doc(this.firestore, `users/${userId}/chats/${session.id}`);
    return setDoc(ref, session, { merge: true });
  }

  saveModelConfig(config: ModelConfig) {
    const ref = doc(this.firestore, `model-config/${config.modelName}`);
    return setDoc(ref, config, { merge: true });
  }
}
