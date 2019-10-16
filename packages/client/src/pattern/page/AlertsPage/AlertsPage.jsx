import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import AlertsTemplate from '../../template/AlertsTemplate'

export const AlertsPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <AlertsTemplate page={data.pages.pages.find(page => page.id === 'alerts')} /> : null
      }
    </Query>
  )
}
