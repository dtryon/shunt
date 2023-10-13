export interface Clue {
  id: string;
  message: string;
  image?: string;
  dummy?: boolean;
  secret?: string;
  fact?: string;
  reminder?: string;
  extra?: string;
  day?: number;
  number?: number;
}
