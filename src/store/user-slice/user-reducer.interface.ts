export interface UserState {
  userName: string;
  error: string;
  isLoading: boolean;
}

export interface UserData {
  name: string;
  password: string;
}

export type UserTypes = Record<string, string>;

export interface IError {
  detail: string;
}
