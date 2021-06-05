import { CHANGE_PASSWORD, CHANGE_USERNAME, LOGIN, SET_ERROR_MESSAGE } from './loginActionTypes';

const initialState = {
    username: '',
    password: '',
    validUsername: 'hruday@gmail.com',
    validPassword: 'hruday123',
    errorMessage: '',
    isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            };
        case CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default loginReducer;