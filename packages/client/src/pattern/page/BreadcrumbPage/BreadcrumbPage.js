import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import BreadcrumbTemplate from '../../template/BreadcrumbTemplate'

const BreadcrumbPage = () => {
  return <Query query={PAGES}>{({ data }) => <BreadcrumbTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default BreadcrumbPage
