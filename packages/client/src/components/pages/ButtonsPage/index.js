import React from 'react';
import { Link } from 'react-router-dom';
import { startPageRoute } from '../../../routes'

const ButtonsPage = () => {
  return (
    <div>
      <h2>Buttons Page</h2>
      <div>
        Under construction 🙂
        <Link to={startPageRoute}> Back to Home Page</Link>
      </div>
    </div>
  )
}

export default ButtonsPage;
