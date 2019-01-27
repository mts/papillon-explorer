import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import ButtonsTemplate from '../../template/ButtonsTemplate'

const ButtonsPage = () => {
  return <Query query={PAGES}>{({ data }) => <ButtonsTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default ButtonsPage
