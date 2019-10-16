import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { BreadcrumbTemplate } from '../../template/BreadcrumbTemplate'

export const BreadcrumbPage = () => {
  const { data } = useQuery(PAGES)

  if (data && data.pages && data.pages.pages) {
    return <BreadcrumbTemplate page={data.pages.pages.find(page => page.id === 'breadcrumb')} />
  }

  return null
}

export default BreadcrumbPage
