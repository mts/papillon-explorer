import React from 'react'
import SupportLinks from './SupportLinks'
import UtilitiesLinks from './UtilitiesLinks'
import ObjectsLinks from './ObjectsLinks'
import ComponentsLinks from './ComponentsLinks'

const SideBar = () => (
  <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4" data-pjax="">
    <ul className="list-style-none">
      <li className="px-4 my-4">
        <SupportLinks />
      </li>
      <li className="mt-4 border-bottom" />
      <li className="px-4 my-4">
        <UtilitiesLinks />
      </li>
      <li className="mt-4 border-bottom" />
      <li className="px-4 my-4">
        <ObjectsLinks />
      </li>
      <li className="mt-4 border-bottom" />
      <li className="px-4 my-4">
        <ComponentsLinks />
      </li>
    </ul>
  </nav>
)

export default SideBar
