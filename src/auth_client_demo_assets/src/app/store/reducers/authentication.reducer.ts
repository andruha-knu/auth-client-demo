import {AuthenticationAction} from '../actions';
import {AuthenticationState} from '../states';

const initialState: AuthenticationState = new AuthenticationState();

export function authentication(state: AuthenticationState = initialState, action: AuthenticationAction): AuthenticationState {
    switch (action.type) {
        case 'ACTION_REQUEST':
            return {
                ...state,
                internetIdentity: '',
                loggingIn: true
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                loggingIn: false
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                internetIdentity: '',
                loggedIn: false,
                loggingIn: false
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                internetIdentity: '',
                loggedIn: false,
                loggingIn: false
            };
        case 'LOGOUT_ERROR':
            return {
                ...state,
                loggingIn: false
            };
        case 'INTERNET_IDENTITY_SUCCESS':
            return {
                ...state,
                internetIdentity: action.internetIdentity,
                loggingIn: false
            };
        case 'INTERNET_IDENTITY_ERROR':
            return {
                ...state,
                internetIdentity: '',
                loggingIn: false
            };
        default:
            return state
    }
}
