var id = {
    imgur: {
        clientID: process.env.IMGUR_CLIENT_ID,
        clientSecret: process.env.IMGUR_CLIENT_SECRET,
        callbackURL: process.env.IMGUR_CALLBACK
    }
};

module.exports = id;