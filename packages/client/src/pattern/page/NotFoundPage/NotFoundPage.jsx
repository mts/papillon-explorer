import React from 'react'
import { object } from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { NotFoundTemplate } from '../../template/NotFoundTemplate'

export const NotFoundPage = ({ location }) => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <NotFoundTemplate page={data.pages.pages.find(page => page.id === 'not-found')} location={location} />
  }

  return null
}

NotFoundPage.propTypes = {
  location: object.isRequired,
}

export default NotFoundPage
