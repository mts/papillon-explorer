import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import AlertsTemplate from '../../template/AlertsTemplate'

const AlertsPage = () => {
  return <Query query={PAGES}>{({ data }) => <AlertsTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default AlertsPage
