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
} from './routes'
import './index.scss'
import '@babel/polyfill'
import client from './graphql/client'
import { addDivWithIdToBody } from './utility/startup'

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path={startPageRoute} component={AsyncStartPage} />
        <Route exact path={alertsPageRoute} component={AsyncAlertsPage} />
        <Route exact path={avatarsPageRoute} component={AsyncAvatarsPage} />
        <Route exact path={blankslatePageRoute} component={AsyncBlankslatePage} />
        <Route exact path={breadcrumbPageRoute} component={AsyncBreadcrumbPage} />
        <Route exact path={buttonsPageRoute} component={AsyncButtonsPage} />
        <Route exact path={labelsPageRoute} component={AsyncLabelsPage} />
        <Route exact path={layoutPageRoute} component={AsyncLayoutPage} />
        <Route exact path={navigationPageRoute} component={AsyncNavigationPage} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
)

addDivWithIdToBody('app')

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
