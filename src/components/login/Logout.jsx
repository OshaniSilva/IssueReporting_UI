// import React from "react";
// import {GoogleLogin, GoogleLogout} from "react-google-login";
// import {RefreshToken} from "./RefreshToken";
//
// const clientId = '529744051654-grqrd6ng7hnmi62h2f9od1jbeapfur4v.apps.googleusercontent.com';
//
// function Logout () {
//
//     const onSuccess = (res) => {
//         localStorage.setItem('loginData', JSON.stringify(res));
//         localStorage.setItem('tokenId', res.tokenId);
//         localStorage.setItem('loginSuccess', true);
//         RefreshToken(res);
//
//         if (localStorage.getItem('loginSuccess')) {
//             window.location.href = "/issue/create";
//         }
//
//         var loginData = JSON.parse(localStorage.getItem('loginData'));
//     };
//
//     const onLogoutSuccess = () => {
//         localStorage.setItem('loginSuccess', false);
//         localStorage.removeItem('tokenId');
//         alert('Logout made successfully');
//     };
//
//     const onFailure = (res) => {
//         // RefreshToken(res);
//         console.log('[LoginLogout failed] res: ', res);
//     };
//
//     return (
//         <div>
//             <div id="loginBtn">
//                 <GoogleLogin
//                     clientId={clientId}
//                     buttonText="Login"
//                     onSuccess={onSuccess}
//                     onFailure={onFailure}
//                     cookiePolicy={'single_host_origin'}
//                     style={{marginTop: '100px', width: '135px'}}
//                     isSignedIn={true}/>
//             </div>
//             <br/>
//             <GoogleLogout
//                 clientId={clientId}
//                 buttonText="Logout"
//                 onLogoutSuccess={onLogoutSuccess}
//             ></GoogleLogout>
//         </div>
//     );
// }
//
// export default Logout;