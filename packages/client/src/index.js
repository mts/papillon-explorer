import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss'
import {
  startPageRoute,
  alertsPageRoute,
  avatarsPageRoute,
  blankslatePageRoute,
  breadcrumbPageRoute,
  buttonsPageRoute,
  labelsPageRoute,
  layoutPageRoute,
  navigationPageRoute,
} from './routes'
import '@babel/polyfill'
import client from './graphql/client'

import AsyncStartPage from './pages/StartPage'
import AsyncAlertsPage from './pages/AlertsPage'
import AsyncAvatarsPage from './pages/AvatarsPage'
import AsyncBlankslatePage from './pages/BlankslatePage'
import AsyncBreadcrumbPage from './pages/BreadcrumbPage'
import AsyncButtonsPage from './pages/BreadcrumbPage'

const LabelsPage = React.lazy(() => import('./pages/LabelsPage'))
const asyncLabelsPage = () => (
  <React.Suspense fallback={null}>
    <LabelsPage />
  </React.Suspense>
)

const LayoutPage = React.lazy(() => import('./pages/LayoutPage'))
const asyncLayoutPage = () => (
  <React.Suspense fallback={null}>
    <LayoutPage />
  </React.Suspense>
)

const NavigationPage = React.lazy(() => import('./pages/NavigationPage'))
const asyncNavigationPage = () => (
  <React.Suspense fallback={null}>
    <NavigationPage />
  </React.Suspense>
)

function addDivWithIdToBody() {
  const appElement = document.createElement('div')
  appElement.id = 'app'
  document.body.appendChild(appElement)
}

addDivWithIdToBody()

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path={startPageRoute} component={AsyncStartPage} />
          <Route exact path={alertsPageRoute} component={AsyncAlertsPage} />
          <Route exact path={avatarsPageRoute} component={AsyncAvatarsPage} />
          <Route exact path={blankslatePageRoute} component={AsyncBlankslatePage} />
          <Route exact path={breadcrumbPageRoute} component={AsyncBreadcrumbPage} />
          <Route exact path={buttonsPageRoute} component={AsyncButtonsPage} />
          <Route exact path={labelsPageRoute} component={asyncLabelsPage} />
          <Route exact path={layoutPageRoute} component={asyncLayoutPage} />
          <Route exact path={navigationPageRoute} component={asyncNavigationPage} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
