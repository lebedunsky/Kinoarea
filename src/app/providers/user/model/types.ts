import type { ReactNode } from "react";

import type { UserMoviesType } from "@/entities/server/types/types";

export type UserContextPropsType = {
  children: ReactNode;
};

export type UserType = {
  uid: string;
  email: string;
  loginName?: string;
  lastName?: string;
  userName?: string;
  avatar?: string;
  savedMovies?: UserMoviesType[];
};

export type UserContextType = {
  logout: () => void;
  user: UserType | null;
  isUserLoading: boolean;
};
