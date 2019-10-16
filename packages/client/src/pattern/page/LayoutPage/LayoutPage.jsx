import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import { LayoutTemplate } from '../../template/LayoutTemplate'

export const LayoutPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <LayoutTemplate page={data.pages.pages.find(page => page.id === 'layout')} /> : null
      }
    </Query>
  )
}
