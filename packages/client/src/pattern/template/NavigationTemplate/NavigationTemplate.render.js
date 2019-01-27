import React from 'react'
import NavigationTemplate from './NavigationTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'navigation',
        name: 'some-name',
      },
    ],
  },
}

const NavigationTemplateDefault = <NavigationTemplate data={data} startPageRoute="/" />

export default NavigationTemplateDefault
