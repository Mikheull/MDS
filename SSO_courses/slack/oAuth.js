var id = {
    slack: {
        clientID: process.env.SLACK_CLIENT_ID,
        clientSecret: process.env.SLACK_CLIENT_SECRET,
        callbackURL: process.env.SLACK_CALLBACK
    }
};

module.exports = id;