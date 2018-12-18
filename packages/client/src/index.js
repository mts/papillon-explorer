import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const StartPage = React.lazy(() => import('./components/pages/StartPage'))
const asyncStartPage = () => <React.Suspense fallback={null}><StartPage /></React.Suspense>

const AlertsPage = React.lazy(() => import('./components/pages/AlertsPage'))
const asyncAlertsPage = () => <React.Suspense fallback={null}><AlertsPage /></React.Suspense>

const AvatarsPage = React.lazy(() => import('./components/pages/AvatarsPage'))
const asyncAvatarsPage = () => <React.Suspense fallback={null}><AvatarsPage /></React.Suspense>

const BlankslatePage = React.lazy(() => import('./components/pages/BlankslatePage'))
const asyncBlankslatePage = () => <React.Suspense fallback={null}><BlankslatePage /></React.Suspense>

const BreadcrumbPage = React.lazy(() => import('./components/pages/BreadcrumbPage'))
const asyncBreadcrumbPage = () => <React.Suspense fallback={null}><BreadcrumbPage /></React.Suspense>

const ButtonsPage = React.lazy(() => import('./components/pages/ButtonsPage'))
const asyncButtonsPage = () => <React.Suspense fallback={null}><ButtonsPage /></React.Suspense>

const LabelsPage = React.lazy(() => import('./components/pages/LabelsPage'))
const asyncLabelsPage = () => <React.Suspense fallback={null}><LabelsPage /></React.Suspense>

const LayoutPage = React.lazy(() => import('./components/pages/LayoutPage'))
const asyncLayoutPage = () => <React.Suspense fallback={null}><LayoutPage /></React.Suspense>

const NavigationPage = React.lazy(() => import('./components/pages/NavigationPage'))
const asyncNavigationPage = () => <React.Suspense fallback={null}><NavigationPage /></React.Suspense>


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

function addDivWithIdToBody() {
  const appElement = document.createElement("div")
  appElement.id = 'app'
  document.body.appendChild(appElement)
}

addDivWithIdToBody()

const App = () => {
  return (
    <Router>
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
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
