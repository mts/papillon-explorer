import React from 'react'
import { version } from '../../../../../../lerna.json'
import Header from '../../molecule/navigation/Header'
import SideBar from '../../molecule/navigation/SideBar'

const StartTemplate = () => (
  <div>
    <Header>Papillon Explorer v{version}</Header>
    <div className="d-flex flex-wrap flex-lg-nowrap">
      <SideBar />
      <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
        <div className="flex-row width-full bg-blue py-3 py-lg-6">
          <div className="main-content mx-auto py-4 px-3 px-md-6 px-lg-3 text-white">
            <div className="">
              <h1 className="f000-light mb-4">Papillon Explorer</h1>
              <div className="f2-light pb-4">
                {
                  "Resources, tooling, and design guidelines for building websites with Papillon, React components for GitHub's Primer Design System"
                }
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3" />
      </div>
    </div>
  </div>
)

export default StartTemplate
