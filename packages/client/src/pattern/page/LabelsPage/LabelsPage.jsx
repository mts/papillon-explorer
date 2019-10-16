import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { LabelsTemplate } from '../../template/LabelsTemplate'

export const LabelsPage = () => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <LabelsTemplate page={data.pages.pages.find(page => page.id === 'labels')} />
  }

  return null
}

export default LabelsPage
