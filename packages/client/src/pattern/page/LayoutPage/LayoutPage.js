import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import LayoutTemplate from '../../template/LayoutTemplate'

const LayoutPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <LayoutTemplate page={data.pages.pages.find(page => page.id === 'layout')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default LayoutPage
