import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { NavigationTemplate } from '../../template/NavigationTemplate'

export const NavigationPage = () => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <NavigationTemplate page={data.pages.pages.find(page => page.id === 'navigation')} />
  }

  return null
}

export default NavigationPage
