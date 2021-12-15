import {Action, Dispatch} from 'redux';
import {authenticationService} from '../../services';

export enum AuthenticationActionTypes {
    ACTION_REQUEST = 'ACTION_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_ERROR = 'LOGOUT_ERROR',
    INTERNET_IDENTITY_SUCCESS = 'INTERNET_IDENTITY_SUCCESS',
    INTERNET_IDENTITY_ERROR = 'INTERNET_IDENTITY_ERROR'
}

export interface RequestAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string,
}

export interface LoginSuccessAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string
}

export interface LoginFailureAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string,
    errorMessage: string
}

export interface LogoutSuccessAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string,
}

export interface LogoutFailureAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string,
    errorMessage: string
}

export interface InternetIdentitySuccessAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string,
}

export interface InternetIdentityFailureAction extends Action {
    type: AuthenticationActionTypes,
    internetIdentity: string,
}

export type AuthenticationAction =
    | RequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutSuccessAction
    | LogoutFailureAction
    | InternetIdentitySuccessAction
    | InternetIdentityFailureAction;

function loading() {
    return {
        type: AuthenticationActionTypes.ACTION_REQUEST,
        user: null
    }
}

export function login() {
    return async (dispatch: Dispatch) => {
        dispatch(loading());

        authenticationService
            .login()
            .then(() => {
                dispatch({
                    type: AuthenticationActionTypes.LOGIN_SUCCESS
                });
            })
            .catch((errorMessage => {
                dispatch({
                    type: AuthenticationActionTypes.LOGIN_ERROR,
                    errorMessage: errorMessage
                });
            }));
    }
}

export function logout() {
    return async (dispatch: Dispatch) => {
        dispatch(loading());

        authenticationService
            .logout()
            .then(() => {
                dispatch({
                    type: AuthenticationActionTypes.LOGOUT_SUCCESS
                });
            })
            .catch((errorMessage => {
                dispatch({
                    type: AuthenticationActionTypes.LOGOUT_ERROR,
                    errorMessage: errorMessage
                });
            }));
    }
}

export function getInternetIdentity() {
    return async (dispatch: Dispatch) => {
        dispatch(loading());

        authenticationService
            .getInternetIdentity()
            .then((internetIdentity) => {
                dispatch({
                    type: AuthenticationActionTypes.INTERNET_IDENTITY_SUCCESS,
                    internetIdentity: internetIdentity
                });
            })
            .catch((errorMessage => {
                dispatch({
                    type: AuthenticationActionTypes.INTERNET_IDENTITY_ERROR,
                    errorMessage: errorMessage
                });
            }));
    }
}
