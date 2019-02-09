import { shape, string, bool } from 'prop-types'

export const routeShape = shape({
  path: string.isRequired,
  exact: bool.isRequired,
})
