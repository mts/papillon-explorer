import React from 'react'
import BlankslateTemplate from './BlankslateTemplate'

const page = {
  page: {
    id: 'blankslate',
    name: 'some-name',
  },
}

const blankslateTemplateDefault = <BlankslateTemplate page={page} startPageRoute="/" />

export default blankslateTemplateDefault
