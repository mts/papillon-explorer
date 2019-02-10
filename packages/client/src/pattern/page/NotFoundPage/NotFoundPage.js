import React from 'react'
import { object } from 'prop-types'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import NotFoundTemplate from '../../template/NotFoundTemplate'

const NotFoundPage = ({ location }) => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <NotFoundTemplate page={data.pages.pages.find(page => page.id === 'not-found')} location={location} />
        ) : null
      }
    </Query>
  )
}

NotFoundPage.propTypes = {
  location: object.isRequired,
}

export default NotFoundPage
