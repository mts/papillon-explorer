import React from 'react'
import AvatarsTemplate from './AvatarsTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'avatars',
        name: 'some-name',
      },
    ],
  },
}

const AvatarsTemplateDefault = <AvatarsTemplate data={data} startPageRoute="/" />

export default AvatarsTemplateDefault
