import React from 'react'
import LayoutTemplate from './LayoutTemplate'

const page = {
  page: {
    id: 'layout',
    name: 'some-name',
  },
}

const LayoutTemplateDefault = <LayoutTemplate page={page} startPageRoute="/" />

export default LayoutTemplateDefault
