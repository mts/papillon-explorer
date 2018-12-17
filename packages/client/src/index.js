import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import StartPage from './components/pages/StartPage'
import AlertsPage from './components/pages/AlertsPage'
import AvatarsPage from './components/pages/AvatarsPage'
import BlankslatePage from './components/pages/BlankslatePage'
import BreadcrumbPage from './components/pages/BreadcrumbPage'
import ButtonsPage from './components/pages/ButtonsPage'
import LabelsPage from './components/pages/LabelsPage'
import LayoutPage from './components/pages/LayoutPage'
import NavigationPage from './components/pages/NavigationPage'
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
        <Route exact path={startPageRoute} component={StartPage} />
        <Route exact path={alertsPageRoute} component={AlertsPage} />
        <Route exact path={avatarsPageRoute} component={AvatarsPage} />
        <Route exact path={blankslatePageRoute} component={BlankslatePage} />
        <Route exact path={breadcrumbPageRoute} component={BreadcrumbPage} />
        <Route exact path={buttonsPageRoute} component={ButtonsPage} />
        <Route exact path={labelsPageRoute} component={LabelsPage} />
        <Route exact path={layoutPageRoute} component={LayoutPage} />
        <Route exact path={navigationPageRoute} component={NavigationPage} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
