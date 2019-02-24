import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import BreadcrumbTemplate from '../../template/BreadcrumbTemplate'

const BreadcrumbPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <BreadcrumbTemplate page={data.pages.pages.find(page => page.id === 'breadcrumb')} /> : null
      }
    </Query>
  )
}

export default BreadcrumbPage
