import React from 'react'
import BreadcrumbTemplate from './BreadcrumbTemplate'

const page = {
  page: {
    id: 'breadcrumb',
    name: 'some-name',
  },
}

const breadcrumbTemplateDefault = <BreadcrumbTemplate page={page} startPageRoute="/" />

export default breadcrumbTemplateDefault
