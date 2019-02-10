import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import NotFoundTemplate from '../../template/NotFoundTemplate'

const NotFoundPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <NotFoundTemplate page={data.pages.pages.find(page => page.id === 'not-found')} /> : null
      }
    </Query>
  )
}

export default NotFoundPage
