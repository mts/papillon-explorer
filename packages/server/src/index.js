/* eslint no-console: 0 */
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const PageAPI = require('./datasources/page')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pageAPI: new PageAPI(),
  }),
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
