export interface authResponse {
  token: string;
  timeOut: number;
}

export interface postObject {
  title: string;
  content: string;
  author: string;
  date: number;
  votes: number;
}
