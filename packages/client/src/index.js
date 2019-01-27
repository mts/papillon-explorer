import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AsyncStartPage from './pages/StartPage'
import AsyncAlertsPage from './pages/AlertsPage'
import AsyncAvatarsPage from './pages/AvatarsPage'
import AsyncBlankslatePage from './pages/BlankslatePage'
import AsyncBreadcrumbPage from './pages/BreadcrumbPage'
import AsyncButtonsPage from './pages/ButtonsPage'
import AsyncLabelsPage from './pages/LabelsPage'
import AsyncLayoutPage from './pages/LayoutPage'
import AsyncNavigationPage from './pages/NavigationPage'
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
          <Route exact path={labelsPageRoute} component={AsyncLabelsPage} />
          <Route exact path={layoutPageRoute} component={AsyncLayoutPage} />
          <Route exact path={navigationPageRoute} component={AsyncNavigationPage} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  )
}

addDivWithIdToBody('app')

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
