import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {useHistory} from "react-router-dom";
import './LoginLogoutStyles.css';
import {RefreshToken} from './RefreshToken';
import Logout from "./Logout";

const clientId = '529744051654-grqrd6ng7hnmi62h2f9od1jbeapfur4v.apps.googleusercontent.com';

function LoginLogout() {
    // const history = useHistory();
    // history.push("/issue/create");

    const onSuccess = (res) => {
        console.log("=======================LoginLogout===========onSuccess============")

        // if (!localStorage.getItem('loginSuccess')) {
            console.log("=======================LoginLogout===========ifffffffffff============")
            localStorage.setItem('loginData', JSON.stringify(res));
            localStorage.setItem('tokenId', res.tokenId);
            localStorage.setItem('loginSuccess', true);
            RefreshToken(res);

            if (localStorage.getItem('loginSuccess')) {
                window.location.href = "/issue/create";
            }

            var loginData = JSON.parse(localStorage.getItem('loginData'));
        // }
    };

    const onLogoutSuccess = () => {
        console.log("=======================LoginLogout===========onLogoutSuccess============")
        localStorage.setItem('loginSuccess', false);
        localStorage.removeItem('tokenId');
        alert('Logout made successfully');
    };

    const onFailure = (res) => {
        // RefreshToken(res);
        console.log("=======================LoginLogout===========onFailure============")
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
                    isSignedIn={true}/>
            </div>
            <br/>
            {/*<Logout/>*/}
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