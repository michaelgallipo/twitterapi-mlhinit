const needle = require('needle');
require("dotenv").config();

const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/users/by?usernames="

async function getRequest() {

    const params = {
        usernames: "magnus919", // Edit usernames to look up
        "user.fields": "created_at,description", // Edit optional query parameters here
        "expansions": "pinned_tweet_id"
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request')
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e, token);
        process.exit(-1);
    }
    process.exit();
})();