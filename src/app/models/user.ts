export interface User {
  id?: string;
  email: string;
  name?: string;
  role: 'admin' | 'farmer' | 'tech' | 'viewer';
  organizationId?: string;
  phone?: string;
  photoURL?: string;
  verified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
