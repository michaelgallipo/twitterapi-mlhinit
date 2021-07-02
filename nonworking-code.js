const express = require('express');
const request = require('request');
const router = express.Router();

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const token = process.env.BEARER_TOKEN;
const twitterID = "deviljmg"

router.get('/', (req, res) => {
  res.send("Server is Working");
});

router.get('/twitterid', (req, res) => {
  // request(
  //   { url: 'https://api.twitter.com/2/users/by?usernames=' +twitterID + 
  //   '&expansions=pinned_tweet_id',
  //     headers: {
  //       "User-Agent": "v2UserLookupJS",
  //       "authorization": `Bearer ${token}`
  //     }
  //   },
  //   (error, response, body) => {
  //     if (error || response.statusCode !== 200) {
  //       return res.status(500).json({ type: 'error', message: err.message });
  //     }

  //     res.json(JSON.parse(body));
  //   }
  // )
  // res.send(req.params.twitterID)
  res.send(twitterID)
});

const PORT = process.env.PORT || 3000;
const HOST = "localhost";
app.listen(PORT, HOST, () => console.log(`Starting proxy on ${HOST}:${PORT}`));