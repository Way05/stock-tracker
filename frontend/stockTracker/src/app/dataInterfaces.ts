export interface authResponse {
  token: string;
  timeOut: number;
}

export interface postObject {
  title: string;
  content: string;
}

export interface postResponse {
  posts: postObject[];
}
