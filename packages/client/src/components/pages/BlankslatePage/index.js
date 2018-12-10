import React from 'react';
import { Link } from 'react-router-dom';
import { startPageRoute } from '../../../routes'

const BlankslatePage = () => {
  return (
    <div>
      <h2>Blankslate Page</h2>
      <div>
        Under construction 🙂
        <Link to={startPageRoute}> Back to Home Page</Link>
      </div>
    </div>
  )
}

export default BlankslatePage;
