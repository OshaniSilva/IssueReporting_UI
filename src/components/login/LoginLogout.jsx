import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { useHistory  } from "react-router-dom";
import './LoginLogoutStyles.css';
import {RefreshToken} from './RefreshToken';

const clientId = '529744051654-grqrd6ng7hnmi62h2f9od1jbeapfur4v.apps.googleusercontent.com';

function LoginLogout() {
    const history = useHistory();

    const onSuccess = (res) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        console.log('RES : ', res.tokenId );
        console.log('[LoginLogout Success] currentUser : ', res.profileObj );
        // history.push("/issue/create");
        localStorage.setItem('loginData', res.tokenObj);

        let item = localStorage.getItem('loginData');
        console.log('>>>loginData : ',localStorage.getItem('loginData'));
        console.log("/////////// ", item.tokenObj)
        localStorage.setItem('tokenId', res.tokenId);
        RefreshToken(res);
    };

    const onLogoutSuccess = () => {
        alert('Logout made successfully');
    };

    const onFailure = (res) => {
        console.log('[LoginLogout failed] res: ', res);
    };



    return (
        <div id="login" className="col-md-6">
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="LoginLogout"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{marginTop: '100px'}}
                    isSignedIn={true}/>
            </div>
            <div>
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