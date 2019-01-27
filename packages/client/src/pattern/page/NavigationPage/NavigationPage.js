import React from 'react'
import { Query } from 'react-apollo'
import { startPageRoute } from '../../../routes'
import { PAGES } from '../../../graphql/query'
import NavigationTemplate from '../../template/NavigationTemplate'

const NavigationPage = () => {
  return <Query query={PAGES}>{({ data }) => <NavigationTemplate data={data} startPageRoute={startPageRoute} />}</Query>
}

export default NavigationPage
