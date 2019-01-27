import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import AvatarsTemplate from '../../template/AvatarsTemplate'

const AvatarsPage = () => {
  return <Query query={PAGES}>{({ data }) => <AvatarsTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default AvatarsPage
