const jwt = require('jsonwebtoken');

const algorithm = { algorithm: "HS256" };

const partnerApiKey = '';
const partnerApiSecret = '';

api.genAccessToken = function(userId) {
    let expiration = new Date().getTime() / 1000;
    expiration += 120;

    let payload = {
        api_key: partnerApiKey,
        user_id: userId, // this is the user id of your own user in your backend
        exp: expiration
    };

    return jwt.sign(payload, partnerApiSecret, algorithm);
};