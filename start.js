const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 5000

const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});