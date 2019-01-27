import React from 'react'
import LabelsTemplate from './LabelsTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'labels',
        name: 'some-name',
      },
    ],
  },
}

const LabelsTemplateDefault = <LabelsTemplate data={data} startPageRoute="/" />

export default LabelsTemplateDefault
