/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
  notFoundPageRoute,
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
        <Route exact={startPageRoute.exact} path={startPageRoute.path} component={startPageRoute.component} />
        <Route exact={alertsPageRoute.exact} path={alertsPageRoute.path} component={alertsPageRoute.component} />
        <Route exact={avatarsPageRoute.exact} path={avatarsPageRoute.path} component={avatarsPageRoute.component} />
        <Route exact={blankslatePageRoute.exact} path={blankslatePageRoute.path} component={blankslatePageRoute.component} />
        <Route exact={breadcrumbPageRoute.exact} path={breadcrumbPageRoute.path} component={breadcrumbPageRoute.component} />
        <Route exact={buttonsPageRoute.exact} path={buttonsPageRoute.path} component={buttonsPageRoute.component} />
        <Route exact={labelsPageRoute.exact} path={labelsPageRoute.path} component={labelsPageRoute.component} />
        <Route exact={layoutPageRoute.exact} path={layoutPageRoute.path} component={layoutPageRoute.component} />
        <Route exact={navigationPageRoute.exact} path={navigationPageRoute.path} component={navigationPageRoute.component} />
        <Route component={notFoundPageRoute.component} />
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
