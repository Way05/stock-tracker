export interface authResponse {
  token: string;
  timeOut: number;
}

export interface postObject {
  title: string;
  content: string;
  author: string;
  date: Date;
  votes: number;
}
