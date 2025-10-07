export interface Alert {
  id?: string;
  userId: string;
  sensorId?: string;
  fieldId?: string;
  condition: 'above' | 'below' | 'equals';
  threshold: number;
  notifyEmail: boolean;
  notifySMS: boolean;
  active: boolean;
  createdAt?: Date;
}
