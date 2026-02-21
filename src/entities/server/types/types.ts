export type MessageType = {
  message: string;
  isUser: boolean;
};

export type UserMoviesType = {
  name: string;
};

export type PayloadType = {
  message?: string;
  history?: MessageType[];
  userMovies?: UserMoviesType[];
};
