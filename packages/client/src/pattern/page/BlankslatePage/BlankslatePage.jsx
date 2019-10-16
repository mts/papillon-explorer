import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { BlankslateTemplate } from '../../template/BlankslateTemplate'

export const BlankslatePage = () => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <BlankslateTemplate page={data.pages.pages.find(page => page.id === 'blankslate')} />
  }

  return null
}

export default BlankslatePage
