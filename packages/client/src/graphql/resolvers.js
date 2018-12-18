/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    pages(pageSize: Int, after: String): PageConnection!
    page(id: String!): Page
  }

  extend type PageConnection {
    cursor: String!
    hasMore: Boolean!
    pages: [Page]!
  }

  extend type Page {
    id: String!
    name: Float!
  }
`
