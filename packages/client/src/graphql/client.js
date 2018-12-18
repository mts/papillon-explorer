import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { typeDefs } from './resolvers'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: process.env.SERVER_URL,
  }),
  typeDefs,
})


export default client
