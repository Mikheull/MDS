var id = {
    dropbox: {
        clientID: process.env.DROPBOX_CLIENT_ID,
        clientSecret: process.env.DROPBOX_CLIENT_SECRET,
        callbackURL: process.env.DROPBOX_CALLBACK
    }
};

module.exports = id;