import { 
    LOGIN,
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    SET_ERROR_MESSAGE
} from './loginActionTypes';

export const login = () => ({
    type: LOGIN 
});

export const setErrorMessage = (errorMessage) => ({
    type: SET_ERROR_MESSAGE,
    payload: errorMessage
});

export const changeUsername = (username) => ({
    type: CHANGE_USERNAME,
    payload: username
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD,
    payload: password
});