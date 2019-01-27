import React from 'react'
import AlertsTemplate from './AlertsTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'alerts',
        name: 'some-name',
      },
    ],
  },
}

const alertsTemplateDefault = <AlertsTemplate data={data} startPageRoute="/" />

export default alertsTemplateDefault
