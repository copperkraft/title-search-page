const express = require('express');
const initStatic = require('./static');
const initGraphql = require('./graphql');

module.exports = initWeb = (port = 3000) => {
  const app = express();

  initStatic(app);
  initGraphql(app);

  app.listen(port, function () {
    console.log(`app listening on port ${port}`);
  });
};
