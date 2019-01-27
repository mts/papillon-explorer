import React from 'react'
import StartTemplate from './StartTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'start',
        name: 'some-name',
      },
    ],
  },
}

const StartTemplateDefault = <StartTemplate data={data} startPageRoute="/" />

export default StartTemplateDefault
