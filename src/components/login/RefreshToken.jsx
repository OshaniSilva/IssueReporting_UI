// export const RefreshToken = (res) => {
//     console.log("----------RefreshToken----------res------------");
//     console.log(res);
//     if (res && res.tokenObj && res.tokenObj.expires_in && res.tokenObj.id_token) {
//         console.log("INSIDE IFFFFFFF=======================================")
//         let refreshTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
//
//         const refreshToken = async (res) => {
//             console.log("INSIDE 222222222222222")
//             const newAuthResponse = await res.reloadAuthResponse();
//             refreshTime = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000;
//             console.log('NEW AUTH ', newAuthResponse);
//             console.log('NEW AUTH TOKEN ',newAuthResponse.id_token);
//             localStorage.setItem('tokenId', newAuthResponse.id_token);
//             setTimeout(refreshToken,refreshTime);
//         }
//         setTimeout(refreshToken,refreshTime);
//     }
// }


export const RefreshToken = res => {

    // Timing to renew access token
    if (res && res.tokenObj && res.tokenObj.expires_in && res.tokenObj.id_token) {

        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

            // saveUserToken(newAuthRes.access_token);  <-- save new token
            console.log('NEW AUTH TOKEN ',newAuthRes.id_token);
            localStorage.setItem('tokenId', newAuthRes.id_token);

            // Setup the other timer after the first one
            setTimeout(refreshToken, refreshTiming);
        };

        // Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    }
};