require('dotenv').config();

const server = require('./api/server.js');

const PORT = process.env.PORT || 7005;

server.listen(PORT, () => {
  console.log(`\n $$ API is running on ${PORT} $$\n`);
});
