import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import '../App.css';

import { 
    changeUsername, changePassword, login, setErrorMessage
} from '../redux/login/loginActions';

function Login(props) {
    if(props.loginData.isLoggedIn === true) {
        return (
            <Redirect to="/dashboard"/>
        );
    }

    const handleOnChange = event => {
        if(event.target.name === 'username') {
            props.dispatchChangeUsername(event.target.value);
        } else if(event.target.name === 'password') {
            props.dispatchChangePassword(event.target.value);   
        }
    };

    const handleOnSubmit = event => {
        const { username, password, validUsername, validPassword } = props.loginData;
        if(username === validUsername && password === validPassword) {
            props.dispatchLogin();
        } else {
            props.dispatchSetErrorMessage('Invalid Username/Password');
        }
        event.preventDefault();
    }
    
    return (
        <div className="login-card">
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="email" 
                    name="username" 
                    value={props.loginData.username}
                    onChange={handleOnChange}
                    placeholder="Username"
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    value={props.loginData.password}
                    onChange={handleOnChange}
                    placeholder="Password"
                    required
                    minLength={6}
                    title="Password must be atleast 6 characters long"
                />
                {props.loginData.errorMessage ? 
                    <p>{props.loginData.errorMessage}</p> :
                    null}
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

const mapStateToprops = state => ({
    loginData: state.login
});

const mapDispatchToProps = dispatch => ({
    dispatchLogin: () => dispatch(login()),
    dispatchSetErrorMessage: (errorMessage) => dispatch(setErrorMessage(errorMessage)),
    dispatchChangeUsername: username => dispatch(changeUsername(username)),
    dispatchChangePassword: password => dispatch(changePassword(password))
});

export default connect(mapStateToprops, mapDispatchToProps)(Login);