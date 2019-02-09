import { shape, string, bool, node, arrayOf } from 'prop-types'

export const routeShape = shape({
  path: string.isRequired,
  exact: bool.isRequired,
  component: node.isRequired,
  routes: arrayOf(
    shape({
      path: string.isRequired,
      exact: bool.isRequired,
      component: node.isRequired,
    }),
  ),
})
