import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { startPageRoute } from '../../routes'
import { PAGES } from '../../graphql/query'

const LayoutPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <div>
            <h2>{data.pages.pages.find(page => page.id === 'layout').name}</h2>
            <div>
              Under construction 🙂
              <Link to={startPageRoute}> Back to Home Page</Link>
            </div>
          </div>
        ) : null
      }
    </Query>
  )
}

export default LayoutPage
