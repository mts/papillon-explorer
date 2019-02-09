import React from 'react'
import UtilitiesLinks from './UtilitiesLinks'
import ObjectsLinks from './ObjectsLinks'
import ComponentsLinks from './ComponentsLinks'

const SideBar = () => (
  <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4" data-pjax="">
    <ul className="list-style-none">
      <li className="px-4 my-4">
        <a href="/papillon/support/" className="position-relative f4 d-block text-gray-dark">
          Support
        </a>
        <ul className="pt-2 list-style-none">
          <li className="">
            <a href="/papillon/support/breakpoints/" className="position-relative f5 py-1 d-block">
              Breakpoints
            </a>
          </li>
          <li className="">
            <a href="/papillon/support/color-system/" className="position-relative f5 py-1 d-block">
              Color system
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot v-align-text-top"
                    viewBox="0 0 8 16"
                    version="1.1"
                    width="9"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                  </svg>
                </span>
              </span>
            </a>
          </li>
          <li className="">
            <a href="/papillon/support/spacing/" className="position-relative f5 py-1 d-block">
              Spacing
            </a>
          </li>
          <li className="">
            <a href="/papillon/support/typography/" className="position-relative f5 py-1 d-block">
              Typography
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                    viewBox="0 0 8 16"
                    version="1.1"
                    width="9"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                  </svg>
                </span>
              </span>
            </a>
          </li>
          <li className="">
            <a href="/papillon/support/marketing-variables/" className="position-relative f5 py-1 d-block">
              Marketing variables
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="new release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                    viewBox="0 0 8 16"
                    version="1.1"
                    width="9"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                  </svg>
                </span>
              </span>
            </a>
          </li>
        </ul>
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
