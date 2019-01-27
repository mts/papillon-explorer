import React from 'react'
import BreadcrumbTemplate from './BreadcrumbTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'breadcrumb',
        name: 'some-name',
      },
    ],
  },
}

const BreadcrumbTemplateDefault = <BreadcrumbTemplate data={data} startPageRoute="/" />

export default BreadcrumbTemplateDefault
