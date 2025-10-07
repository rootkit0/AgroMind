export interface ModelConfig {
  id?: string;
  modelName: string;
  temperature: number;
  top_p: number;
  maxTokens: number;
  contextLength?: number;
  active?: boolean;
}
