import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import NavigationTemplate from '../../template/NavigationTemplate'

export const NavigationPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <NavigationTemplate page={data.pages.pages.find(page => page.id === 'navigation')} /> : null
      }
    </Query>
  )
}
