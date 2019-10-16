import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { ButtonsTemplate } from '../../template/ButtonsTemplate'

export const ButtonsPage = () => {
  const { data } = useQuery(PAGES)

  if (data && data.pages && data.pages.pages) {
    return <ButtonsTemplate page={data.pages.pages.find(page => page.id === 'buttons')} />
  }

  return null
}

export default ButtonsPage
