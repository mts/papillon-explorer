import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import ButtonsTemplate from '../../template/ButtonsTemplate'

const ButtonsPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <ButtonsTemplate page={data.pages.pages.find(page => page.id === 'buttons')} /> : null
      }
    </Query>
  )
}

export default ButtonsPage