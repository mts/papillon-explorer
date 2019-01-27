import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import LabelsTemplate from '../../template/LabelsTemplate'

const LabelsPage = () => {
  return <Query query={PAGES}>{({ data }) => <LabelsTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default LabelsPage
