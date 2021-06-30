import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import './LoginLogoutStyles.css';
// import * as config from '../../config/config'

const clientId = '529744051654-grqrd6ng7hnmi62h2f9od1jbeapfur4v.apps.googleusercontent.com';

function LoginLogout() {

    // This function is called when a user successfully signs in
    const onSuccess = (res) => {

        // Once signed in through google login some data retrieved through the login is saved in local storage
        localStorage.setItem('loginData', JSON.stringify(res));
        localStorage.setItem('tokenId', res.tokenId);
        localStorage.setItem('loginSuccess', true);

        // If login is a success user is redirected to create issue page
        if (localStorage.getItem('loginSuccess')) {
            window.location.href = "/issue/create";
        }
    };

    // This function is called if a user logs out
    const onLogoutSuccess = () => {

        // Once user logs out tokenId is removed and loginSuccess is set to false in localStorage
        localStorage.setItem('loginSuccess', false);
        localStorage.removeItem('tokenId');
        alert('Logout made successfully');
    };

    // If a user is not able to login due to any failure this function is triggered
    const onFailure = (res) => {
        console.log('[LoginLogout failed] res: ', res);
    };

    return (
        <div id="login" className="col-md-6">
            <div id="loginBtn">
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{marginTop: '100px', width: '135px'}}
                />
            </div>
            <br/>
            <div id="logoutBtn">
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                ></GoogleLogout>
            </div>
        </div>
    );
}

export default LoginLogout;