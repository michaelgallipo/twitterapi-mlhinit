const needle = require('needle');
require("dotenv").config();

const token = process.env.BEARER_TOKEN;
// const endpointURL = "https://api.twitter.com/2/users/by?usernames="
const endpointURL = "https://api.twitter.com/2/users/by/username/"

exports.findUser =  async (req, res) => {
  try {
      // Make request
      const response = await getRequest(req.params.twitterId);
      console.dir(response, {
          depth: null
      });
      res.json(response);

  } catch (e) {
      console.log(e, token);
      res.send(e);
      // process.exit(-1);
  }

  async function getRequest(user) {

    const params = {
        // username: user, // Edit usernames to look up
        "user.fields": "created_at,description,location,profile_image_url", // Edit optional query parameters here
        "expansions": "pinned_tweet_id"
    }

    // this is the HTTP header that adds bearer token authentication
    const resp = await needle('get', endpointURL + user, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (resp.body) {
        return resp.body;
    } else {
        throw new Error('Unsuccessful request')
    }
  }

};


