import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import LayoutTemplate from '../../template/LayoutTemplate'

const LayoutPage = () => {
  return <Query query={PAGES}>{({ data }) => <LayoutTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default LayoutPage
