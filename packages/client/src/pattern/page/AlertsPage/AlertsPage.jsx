import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { AlertsTemplate } from '../../template/AlertsTemplate'

export const AlertsPage = () => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <AlertsTemplate page={data.pages.pages.find(page => page.id === 'alerts')} />
  }

  return null
}

export default AlertsPage
