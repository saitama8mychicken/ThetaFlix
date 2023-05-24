async function getWalletAccessToken() {
    //Check if a user is logged in...
    let isAuthenticated = true;

    if (!isAuthenticated) {
        //No user is logged in, no wallet will be used
        return null;
    }

    //This API should check the user's auth 
    let body = await yourAPIRequestToGenerateThetaWalletAccessTokenForAuthedUser();

    //Return the access token from the request body
    return body.access_token;
}