import React from 'react';
import { Link } from 'react-router-dom';
import RegularLabels from './RegularLabels'
import ThemeLabels from './ThemeLabels'
import StateLabels from './StateLabels'
import CounterLabels from './CounterLabels'

const LayoutPage = () => {
  return (
    <div>
      <h1 align="center" class="p-4">🎨 Papillon Labels Component Explorer</h1>
      <div className="d-flex flex-justify-around">
        <div className="col-3">
          <RegularLabels />
        </div>
        <div className="col-3">
          <ThemeLabels />
        </div>
        <div className="col-3">
          <StateLabels />
        </div>
        <div className="col-3">
          <CounterLabels />
        </div>
      </div>
      <div className="p-4">
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  )
}

export default LayoutPage;
