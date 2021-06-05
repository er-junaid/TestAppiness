import { combineReducers } from 'redux';

import loginReducer from './login/loginReducer';
import employeesReducer from './employees/employeesReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    employees: employeesReducer
});

export default rootReducer;