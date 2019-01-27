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

const StartPage = React.lazy(() => import('./pages/StartPage'))
const asyncStartPage = () => (
  <React.Suspense fallback={null}>
    <StartPage />
  </React.Suspense>
)

const AlertsPage = React.lazy(() => import('./pages/AlertsPage'))
const asyncAlertsPage = () => (
  <React.Suspense fallback={null}>
    <AlertsPage />
  </React.Suspense>
)

const AvatarsPage = React.lazy(() => import('./pages/AvatarsPage'))
const asyncAvatarsPage = () => (
  <React.Suspense fallback={null}>
    <AvatarsPage />
  </React.Suspense>
)

const BlankslatePage = React.lazy(() => import('./pages/BlankslatePage'))
const asyncBlankslatePage = () => (
  <React.Suspense fallback={null}>
    <BlankslatePage />
  </React.Suspense>
)

const BreadcrumbPage = React.lazy(() => import('./pages/BreadcrumbPage'))
const asyncBreadcrumbPage = () => (
  <React.Suspense fallback={null}>
    <BreadcrumbPage />
  </React.Suspense>
)

const ButtonsPage = React.lazy(() => import('./pages/ButtonsPage'))
const asyncButtonsPage = () => (
  <React.Suspense fallback={null}>
    <ButtonsPage />
  </React.Suspense>
)

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
          <Route exact path={startPageRoute} component={asyncStartPage} />
          <Route exact path={alertsPageRoute} component={asyncAlertsPage} />
          <Route exact path={avatarsPageRoute} component={asyncAvatarsPage} />
          <Route exact path={blankslatePageRoute} component={asyncBlankslatePage} />
          <Route exact path={breadcrumbPageRoute} component={asyncBreadcrumbPage} />
          <Route exact path={buttonsPageRoute} component={asyncButtonsPage} />
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
