/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'

export const PAGES = gql`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        id
        name
      }
    }
  }
`
