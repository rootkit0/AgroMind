export interface Satellite {
  id?: string;
  fieldId: string;
  coordinates: { lat: number; lng: number }[];
  requestedBy: string; // userId
  requestedAt: Date;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  resultUrl?: string;
}
