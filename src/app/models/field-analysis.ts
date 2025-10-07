export interface FieldAnalysis {
  id?: string;
  fieldId: string;
  date: Date;
  ndviIndex: number;
  pestDetected: boolean;
  imageUrl: string;
  notes?: string;
  createdAt?: Date;
}
