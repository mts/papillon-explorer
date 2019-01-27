import React from 'react'
import AlertsTemplate from './AlertsTemplate'

const page = {
  page: {
    id: 'alerts',
    name: 'some-name',
  },
}

const alertsTemplateDefault = <AlertsTemplate page={page} startPageRoute="/" />

export default alertsTemplateDefault
