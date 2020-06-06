export interface Thing {
  name: string;
  img?: string;
  description: string;
  url: URL;
  tags: string[];
}

export interface Streak {
  id: string;
  length: number;
}

export interface Decision {
  winnerId: string;
  loserId: string;
  time: number;
}
