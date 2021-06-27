export const RefreshToken = (res) => {
    console.log(">>>refreshToken>>>");
    console.log(res.tokenObj);
    let refreshTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async (res) => {
        const newAuthResponse = await res.reloadAuthResponse();
        refreshTime = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000;
        console.log('NEW AUTH ', newAuthResponse);
        console.log('NEW AUTH TOKEN ',newAuthResponse.id_token);
        setTimeout(refreshToken,refreshTime);
    }
    setTimeout(refreshToken,refreshTime);
}