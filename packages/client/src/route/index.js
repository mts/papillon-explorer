import AsyncStartPage from '../pattern/page/StartPage'
import AsyncAlertsPage from '../pattern/page/AlertsPage'
import AsyncAvatarsPage from '../pattern/page/AvatarsPage'
import AsyncBlankslatePage from '../pattern/page/BlankslatePage'
import AsyncBreadcrumbPage from '../pattern/page/BreadcrumbPage'
import AsyncButtonsPage from '../pattern/page/ButtonsPage'
import AsyncLabelsPage from '../pattern/page/LabelsPage'
import AsyncLayoutPage from '../pattern/page/LayoutPage'
import AsyncNavigationPage from '../pattern/page/NavigationPage'
import AsyncNotFoundPage from '../pattern/page/NotFoundPage'
import { startPagePath } from './path'
import { alertsPagePath } from './path'
import { avatarsPagePath } from './path'
import { blankslatePagePath } from './path'
import { breadcrumbPagePath } from './path'
import { buttonsPagePath } from './path'
import { labelsPagePath } from './path'
import { layoutPagePath } from './path'
import { navigationPagePath } from './path'

export const startPageRoute = {
  path: startPagePath,
  exact: true,
  component: AsyncStartPage,
}

export const alertsPageRoute = {
  path: alertsPagePath,
  exact: true,
  component: AsyncAlertsPage,
}

export const avatarsPageRoute = {
  path: avatarsPagePath,
  exact: true,
  component: AsyncAvatarsPage,
}

export const blankslatePageRoute = {
  path: blankslatePagePath,
  exact: true,
  component: AsyncBlankslatePage,
}

export const breadcrumbPageRoute = {
  path: breadcrumbPagePath,
  exact: true,
  component: AsyncBreadcrumbPage,
}

export const buttonsPageRoute = {
  path: buttonsPagePath,
  exact: true,
  component: AsyncButtonsPage,
}

export const labelsPageRoute = {
  path: labelsPagePath,
  exact: true,
  component: AsyncLabelsPage,
}

export const layoutPageRoute = {
  path: layoutPagePath,
  exact: true,
  component: AsyncLayoutPage,
}

export const navigationPageRoute = {
  path: navigationPagePath,
  exact: true,
  component: AsyncNavigationPage,
}

export const notFoundPageRoute = {
  component: AsyncNotFoundPage,
}
