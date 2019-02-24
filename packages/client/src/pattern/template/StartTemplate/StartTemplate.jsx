import React from 'react'
import { version } from '../../../../../../lerna.json'
import Intro from '../../molecule/banner/Intro'
import Header from '../../molecule/navigation/Header'
import SideBar from '../../molecule/navigation/SideBar'

const StartTemplate = () => (
  <div>
    <Header>Papillon Explorer v{version}</Header>
    <div className="d-flex flex-wrap flex-lg-nowrap">
      <SideBar />
      <Intro>
        <h1 className="f000-light mb-4">Papillon Explorer</h1>
        <div className="f2-light pb-4">
          {
            "Resources, tooling, and design guidelines for building websites with Papillon, React components for GitHub's Primer Design System"
          }
        </div>
      </Intro>
    </div>
  </div>
)

export default StartTemplate
