import React from 'react'
import { Link } from 'react-router-dom'
import { layoutPageRoute } from '../../../../routes'
import SideBarComponentsLinks from './Links/Components/SideBarComponentsLinks'

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
        <a href="/papillon/utilities/" className="position-relative f4 d-block text-gray-dark">
          Utilities
        </a>
        <ul className="pt-2 list-style-none">
          <li className="">
            <a href="/papillon/utilities/animations/" className="position-relative f5 py-1 d-block">
              Animations
            </a>
          </li>
          <li className="">
            <a href="/papillon/utilities/borders/" className="position-relative f5 py-1 d-block">
              Borders
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/marketing-borders/" className="position-relative f5 py-1 d-block">
              Marketing borders
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/box-shadow/" className="position-relative f5 py-1 d-block">
              Box shadow
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/colors/" className="position-relative f5 py-1 d-block">
              Colors
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/details/" className="position-relative f5 py-1 d-block">
              Details
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/marketing-filters/" className="position-relative f5 py-1 d-block">
              Filters
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/flexbox/" className="position-relative f5 py-1 d-block">
              Flexbox
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <Link className="position-relative f5 py-1 d-block" to={layoutPageRoute}>
              Layout
            </Link>
          </li>
          <li className="">
            <a href="/papillon/utilities/marketing-layout/" className="position-relative f5 py-1 d-block">
              Marketing layout
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/margin/" className="position-relative f5 py-1 d-block">
              Margin
            </a>
          </li>
          <li className="">
            <a href="/papillon/utilities/marketing-margin/" className="position-relative f5 py-1 d-block">
              Marketing margin
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/padding/" className="position-relative f5 py-1 d-block">
              Padding
            </a>
          </li>
          <li className="">
            <a href="/papillon/utilities/marketing-padding/" className="position-relative f5 py-1 d-block">
              Marketing padding
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/utilities/typography/" className="position-relative f5 py-1 d-block">
              Typography
            </a>
          </li>
          <li className="">
            <a href="/papillon/utilities/marketing-type/" className="position-relative f5 py-1 d-block">
              Marketing typography
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
        <a href="/papillon/objects/" className="position-relative f4 d-block text-gray-dark">
          Objects
        </a>
        <ul className="pt-2 list-style-none">
          <li className="">
            <a href="/papillon/objects/grid/" className="position-relative f5 py-1 d-block">
              Grid
              <span className="position-absolute right-0">
                <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/objects/layout/" className="position-relative f5 py-1 d-block">
              Layout
              <span className="position-absolute right-0">
                <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                  <svg
                    height="18"
                    className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
            <a href="/papillon/objects/table-object/" className="position-relative f5 py-1 d-block">
              Table object
            </a>
          </li>
        </ul>
      </li>
      <li className="mt-4 border-bottom" />

      <SideBarComponentsLinks />
    </ul>
  </nav>
)

export default SideBar
