import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import BlankslateTemplate from '../../template/BlankslateTemplate'

const BlankslatePage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <BlankslateTemplate page={data.pages.pages.find(page => page.id === 'blankslate')} startPageRoute={startPageRoute} />
        ) : null
      }
    </Query>
  )
}

export default BlankslatePage
