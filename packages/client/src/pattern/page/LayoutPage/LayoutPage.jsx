import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { LayoutTemplate } from '../../template/LayoutTemplate'

export const LayoutPage = () => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <LayoutTemplate page={data.pages.pages.find(page => page.id === 'layout')} />
  }

  return null
}

export default LayoutPage
