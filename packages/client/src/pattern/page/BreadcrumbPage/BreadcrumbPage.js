import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import BreadcrumbTemplate from '../../template/BreadcrumbTemplate'

const BreadcrumbPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <BreadcrumbTemplate page={data.pages.pages.find(page => page.id === 'breadcrumb')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default BreadcrumbPage
