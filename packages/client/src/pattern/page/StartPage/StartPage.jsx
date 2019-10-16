import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { StartTemplate } from '../../template/StartTemplate'

export const StartPage = () => {
  const { data } = useQuery(PAGES)

  if (data && data.pages && data.pages.pages) {
    return <StartTemplate page={data.pages.pages.find(page => page.id === 'start')} />
  }

  return null
}

export default StartPage
