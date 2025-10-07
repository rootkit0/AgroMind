export interface Field {
  id?: string;
  name: string;
  organizationId?: string;
  coordinates: { lat: number; lng: number }[]; // 4 points
  area?: number; // hectares
  cropType?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
