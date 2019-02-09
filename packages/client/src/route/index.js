export const startPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/` : '/',
  exact: true,
}

export const alertsPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/alerts` : '/alerts',
  exact: true,
}

export const avatarsPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/avatars` : '/avatars',
  exact: true,
}

export const blankslatePageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/blankslate` : '/blankslate',
  exact: true,
}

export const breadcrumbPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/breadcrumb` : '/breadcrumb',
  exact: true,
}

export const buttonsPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/buttons` : '/buttons',
  exact: true,
}

export const labelsPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/labels` : '/labels',
  exact: true,
}

export const layoutPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/layout` : '/layout',
  exact: true,
}

export const navigationPageRoute = {
  path: process.env.BASE_URL ? `${process.env.BASE_URL}/navigation` : '/navigation',
  exact: true,
}
