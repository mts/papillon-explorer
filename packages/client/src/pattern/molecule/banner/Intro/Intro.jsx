import React from 'react'
import { node } from 'prop-types'

const Intro = ({ children }) => (
  <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
    <div className="flex-row width-full bg-blue py-3 py-lg-6">
      <div className="main-content mx-auto py-4 px-3 px-md-6 px-lg-3 text-white">
        <div className="">{children}</div>
      </div>
    </div>
    <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3" />
  </div>
)

Intro.defaultProps = {
  children: null,
}

Intro.propTypes = {
  children: node,
}

export default Intro
