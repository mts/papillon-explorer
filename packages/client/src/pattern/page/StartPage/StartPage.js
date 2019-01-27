import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import StartTemplate from '../../template/StartTemplate'

const StartPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <StartTemplate page={data.pages.pages.find(page => page.id === 'start')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default StartPage
