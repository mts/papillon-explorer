import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/alerts">Alerts</Link>
        </li>
        <li>
          <Link to="/avatars">Avatars</Link>
        </li>
        <li>
          <Link to="/blankslate">Blankslate</Link>
        </li>
        <li>
          <Link to="/breadcrumb">Breadcrumb</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/labels">Labels</Link>
        </li>
        <li>
          <Link to="/layout">Layout</Link>
        </li>
        <li>
          <Link to="/navigation">Navigation</Link>
        </li>
      </ul>
    </div>
  )
}

export default StartPage;
