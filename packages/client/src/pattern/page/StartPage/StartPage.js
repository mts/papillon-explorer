import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import StartTemplate from '../../template/StartTemplate'

const StartPage = () => {
  return <Query query={PAGES}>{({ data }) => <StartTemplate data={data} />}</Query>
}

export default StartPage
