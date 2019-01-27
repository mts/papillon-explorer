import React from 'react'
import ButtonsTemplate from './ButtonsTemplate'

const data = {
  pages: {
    pages: [
      {
        id: 'buttons',
        name: 'some-name',
      },
    ],
  },
}

const ButtonsTemplateDefault = <ButtonsTemplate data={data} startPageRoute="/" />

export default ButtonsTemplateDefault
