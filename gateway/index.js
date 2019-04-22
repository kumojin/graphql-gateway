const Api1Client = require('./clients/api1');
const Api2Client = require('./clients/api2');

const express = require('express')
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type 
    Message {
      id: Int,
      text: String,
      userId: Int,
      status: String,
    }

  type
    User {
      id: Int,
      username: String,
    },

  type
    Query {
      hello: String,
      world: String,
      users: [User],
      messages: [Message],
    }
`);

// Provide resolver functions for your schema fields
const resolvers = {
  hello: () => 'Hello!',
  world: () => 'World!',
  users: () => Api2Client.fetchUsers(),
  messages: () => Api1Client.fetchMessages()
};

const app = express()
const port = 3000

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers
}));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`🚀 Server ready on port ${port}!`))