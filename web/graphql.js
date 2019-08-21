const graphqlHTTP = require('express-graphql');
const externalTitleService = require('../services/external-title-service');
const {buildSchema} = require('graphql');


const schema = buildSchema(`
  type Query {
    title(url: String): String
  }
`);

const root = {
  title: async ({url}) => {
    return await externalTitleService.getTitle(url);
  },
};

module.exports = initGraphql = (app) => {
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root
  }));
};
