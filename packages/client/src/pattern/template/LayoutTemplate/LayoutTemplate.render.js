import React from 'react'
import LayoutTemplate from './LayoutTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'layout',
        name: 'some-name',
      },
    ],
  },
}

const LayoutTemplateDefault = <LayoutTemplate data={data} startPageRoute="/" />

export default LayoutTemplateDefault
