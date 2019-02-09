/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AsyncStartPage from './pattern/page/StartPage'
import AsyncAlertsPage from './pattern/page/AlertsPage'
import AsyncAvatarsPage from './pattern/page/AvatarsPage'
import AsyncBlankslatePage from './pattern/page/BlankslatePage'
import AsyncBreadcrumbPage from './pattern/page/BreadcrumbPage'
import AsyncButtonsPage from './pattern/page/ButtonsPage'
import AsyncLabelsPage from './pattern/page/LabelsPage'
import AsyncLayoutPage from './pattern/page/LayoutPage'
import AsyncNavigationPage from './pattern/page/NavigationPage'
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
} from './route'
import './index.scss'
import '@babel/polyfill'
import client from './graphql/client'
import { addDivWithIdToBody, checkAccessibilityIssues } from './utility/startup'
import ErrorBoundary from './pattern/atom/error/ErrorBoundary'

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact={startPageRoute.exact} path={startPageRoute.path} component={AsyncStartPage} />
        <Route exact={alertsPageRoute.exact} path={alertsPageRoute.path} component={AsyncAlertsPage} />
        <Route exact={avatarsPageRoute.exact} path={avatarsPageRoute.path} component={AsyncAvatarsPage} />
        <Route exact={blankslatePageRoute.exact} path={blankslatePageRoute.path} component={AsyncBlankslatePage} />
        <Route exact={breadcrumbPageRoute.exact} path={breadcrumbPageRoute.path} component={AsyncBreadcrumbPage} />
        <Route exact={buttonsPageRoute.exact} path={buttonsPageRoute.path} component={AsyncButtonsPage} />
        <Route exact={labelsPageRoute.exact} path={labelsPageRoute.path} component={AsyncLabelsPage} />
        <Route exact={layoutPageRoute.exact} path={layoutPageRoute.path} component={AsyncLayoutPage} />
        <Route exact={navigationPageRoute.exact} path={navigationPageRoute.path} component={AsyncNavigationPage} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
)

addDivWithIdToBody('app')
checkAccessibilityIssues(React, ReactDOM, 1000)

const StrictApp = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

const RegularApp = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(<RegularApp />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
