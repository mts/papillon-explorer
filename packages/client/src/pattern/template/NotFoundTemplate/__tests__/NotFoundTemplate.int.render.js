import React from 'react'
import { NotFoundTemplate } from '../NotFoundTemplate'

const props = {
  page: {
    id: 'not-found',
    name: 'some-name',
  },
  location: {
    pathname: 'some-path-name',
  },
}

export const notFoundTemplateDefault = <NotFoundTemplate page={props.page} location={props.location} />
