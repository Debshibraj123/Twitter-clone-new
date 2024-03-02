import { ApolloServer } from '@apollo/server'
import express from 'express'
import bodyParser from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'

export async function initServer() {
  const app = express()
  
  app.use(bodyParser.json())

  const graphqlServer = new ApolloServer({
    typeDefs: `type Query { 
      sayhello: String
      sayHelloToMe(name: String!): String
    } `,   
    resolvers: {
        Query: {
            sayhello: () => 'Hello, world!',
            sayHelloToMe : (parent: any, { name }: { name: string }) => null,
        },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));
  
  return app;

}