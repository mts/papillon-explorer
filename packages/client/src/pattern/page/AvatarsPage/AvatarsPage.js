import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import AvatarsTemplate from '../../template/AvatarsTemplate'

const AvatarsPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <AvatarsTemplate page={data.pages.pages.find(page => page.id === 'avatars')} /> : null
      }
    </Query>
  )
}

export default AvatarsPage
