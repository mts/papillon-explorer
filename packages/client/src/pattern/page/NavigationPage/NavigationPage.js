import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import NavigationTemplate from '../../template/NavigationTemplate'

const NavigationPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <NavigationTemplate page={data.pages.pages.find(page => page.id === 'navigation')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default NavigationPage
