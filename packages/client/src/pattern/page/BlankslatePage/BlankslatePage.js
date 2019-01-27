import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import BlankslateTemplate from '../../template/BlankslateTemplate'

const BlankslatePage = () => {
  return <Query query={PAGES}>{({ data }) => <BlankslateTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default BlankslatePage
