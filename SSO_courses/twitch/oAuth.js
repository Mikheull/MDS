var id = {
    twitch: {
        clientID: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_CLIENT_SECRET,
        callbackURL: process.env.TWITCH_CALLBACK
    }
};

module.exports = id;