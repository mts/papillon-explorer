import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import AlertsTemplate from '../../template/AlertsTemplate'

const AlertsPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <AlertsTemplate page={data.pages.pages.find(page => page.id === 'alerts')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default AlertsPage
