export interface Sensor {
  id?: string;
  organizationId?: string;
  fieldId?: string;
  name: string;
  type: 'temperature' | 'humidity' | 'ph' | 'co2' | 'rain' | 'light' | 'custom';
  unit: string;
  status: 'online' | 'offline' | 'alert';
  lastReading?: number;
  lastUpdated?: Date;
  location?: { lat: number; lng: number };
  createdAt?: Date;
}
