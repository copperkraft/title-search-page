const graphqlHTTP = require('express-graphql');
const titleService = require('../services/title-service');
const {buildSchema} = require('graphql');


const schema = buildSchema(`
  type Query {
    title(url: String): String
  }
`);

const root = {
  title: async ({url}) => {
    return await titleService.getByUrl(url);
  },
};

module.exports = initGraphql = (app) => {
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root
  }));
};
