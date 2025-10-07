export interface Notification {
  id?: string;
  userId: string;
  type: 'alert' | 'system' | 'chat';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}
