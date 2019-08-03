// Describing the shape of the system's slice of state
export interface AuthenticationState {
   loading: boolean;
  error: boolean;
  isAuthenticated: boolean;
  errorMessage: {};
  displayName: string;
  userName: string;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: AuthenticationState;
}

export type SystemActionTypes = UpdateSessionAction;
interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  loading: boolean;
  error: boolean;
  errorMessage: {};
  displayName: string;
  userName: string;
}

export type AuthenticationAction =
  | { type: 'START_AUTH'; input: LoginData }
  | { type: 'AUTH_SUCCESS'; user: UserData }
  | { type: 'AUTH_FAIL'; error: string };

// action creators
export function loginRequest(input: LoginData): AuthenticationAction {
  return { type: 'START_AUTH', input };
}

export function loginSuccess(user: UserData): AuthenticationAction {
  return { type: 'AUTH_SUCCESS', user };
}

export function loginFailed(error: string): AuthenticationAction {
  return { type: 'AUTH_FAIL', error };
}
