import React from 'react'
import NavigationTemplate from './NavigationTemplate'

const page = {
  page: {
    id: 'navigation',
    name: 'some-name',
  },
}

const navigationTemplateDefault = <NavigationTemplate page={page} startPageRoute="/" />

export default navigationTemplateDefault
