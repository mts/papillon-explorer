import React from 'react'
import StartTemplate from './StartTemplate'

const page = {
  page: {
    id: 'start',
    name: 'some-name',
  },
}

const startTemplateDefault = <StartTemplate page={page} startPageRoute="/" />

export default startTemplateDefault
