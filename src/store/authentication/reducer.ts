import { AuthenticationState, AuthenticationAction } from "./actions";

const initialstate: AuthenticationState = {
  loading: false,
  userName: '',
  isAuthenticated: false,
  error: false,
  displayName: '',
  errorMessage: ''
}
const authentication = (state: AuthenticationState = initialstate, action: AuthenticationAction) => {
  switch (action.type) {
    case 'START_AUTH':
      return {
        ...state,
        loading: true,

      }

    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        userName: action.user.userName,
        displayName: action.user.displayName,

      }
    case 'AUTH_FAIL':
      return {
        ...state,
        loading: false,
        userName: '',
        displayName: '',

      }
    default:
      return state
  }
}

export default authentication;

