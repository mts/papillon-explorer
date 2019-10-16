import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { AvatarsTemplate } from '../../template/AvatarsTemplate'

export const AvatarsPage = () => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return <AvatarsTemplate page={data.pages.pages.find(page => page.id === 'avatars')} />
  }

  return null
}

export default AvatarsPage
