import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartPage from './components/pages/StartPage';
import AlertsPage from './components/pages/AlertsPage';
import AvatarsPage from './components/pages/AvatarsPage';
import BlankslatePage from './components/pages/BlankslatePage';
import BreadcrumbPage from './components/pages/BreadcrumbPage';
import ButtonsPage from './components/pages/ButtonsPage';
import LabelsPage from './components/pages/LabelsPage';
import LayoutPage from './components/pages/LayoutPage';
import NavigationPage from './components/pages/NavigationPage';

function addDivWithIdToBody() {
  const appElement = document.createElement("div");
  appElement.id = 'app';
  document.body.appendChild(appElement);
}

addDivWithIdToBody()

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/alerts" component={AlertsPage} />
        <Route exact path="/avatars" component={AvatarsPage} />
        <Route exact path="/blankslate" component={BlankslatePage} />
        <Route exact path="/breadcrumb" component={BreadcrumbPage} />
        <Route exact path="/buttons" component={ButtonsPage} />
        <Route exact path="/labels" component={LabelsPage} />
        <Route exact path="/layout" component={LayoutPage} />
        <Route exact path="/navigation" component={NavigationPage} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
