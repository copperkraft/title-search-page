const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');


const schema = buildSchema(`
  type Query {
    title(url: String): String
  }
`);

const root = {
  title: ({url}) => {
    return `${url} title`;
  },
};

module.exports = initGraphql = (app) => {
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root
  }));
};
