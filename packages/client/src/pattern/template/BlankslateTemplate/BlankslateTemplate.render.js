import React from 'react'
import BlankslateTemplate from './BlankslateTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'blankslate',
        name: 'some-name',
      },
    ],
  },
}

const blankslateTemplateDefault = <BlankslateTemplate data={data} startPageRoute="/" />

export default blankslateTemplateDefault
