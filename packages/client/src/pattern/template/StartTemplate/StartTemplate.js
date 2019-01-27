import React from 'react'
import { Link } from 'react-router-dom'
import {
  alertsPageRoute,
  avatarsPageRoute,
  blankslatePageRoute,
  breadcrumbPageRoute,
  buttonsPageRoute,
  labelsPageRoute,
  layoutPageRoute,
  navigationPageRoute,
} from '../../../routes'
import { version } from '../../../../../../lerna.json'

const style = {
  // position: '-webkit-sticky',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 101,
}

const StartTemplate = () => (
  <div>
    <div className="bg-gray-dark" style={style}>
      <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container">
        <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
          <a
            href="https://github.com/mts/papillon-explorer"
            className="border-gray-dark no-underline text-white"
            aria-label="Papillon Explorer"
          >
            <svg
              height="28"
              aria-label="github-logo"
              className="octicon octicon-mark-github"
              viewBox="0 0 16 16"
              version="1.1"
              width="28"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <div className="flex-self-center Details-content--shown">
            <div className="dropdown js-menu-container js-select-menu">
              <h1 className="h4 text-normal pl-3 mt-1">
                <button
                  className="btn-link text-white link-white no-underline js-menu-target"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Papillon Explorer v{version}
                </button>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex flex-wrap flex-lg-nowrap">
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
          <li className="px-4 my-4">
            <a href="/" className="position-relative f4 d-block text-gray-dark">
              Components
            </a>
            <ul className="pt-2 list-style-none">
              <li className="">
                <Link className="position-relative f5 py-1 d-block" to={alertsPageRoute}>
                  Alerts
                </Link>
              </li>
              <li className="">
                <Link className="position-relative f5 py-1 d-block" to={avatarsPageRoute}>
                  Avatars
                </Link>
              </li>
              <li className="">
                <Link className="position-relative f5 py-1 d-block" to={blankslatePageRoute}>
                  Blankslate
                </Link>
              </li>
              <li className="">
                <a href="/box/" className="position-relative f5 py-1 d-block">
                  Box
                  <span className="position-absolute right-0">
                    <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/box-overlay/" className="position-relative f5 py-1 d-block">
                  Box overlay
                  <span className="position-absolute right-0">
                    <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/boxed-groups/" className="position-relative f5 py-1 d-block">
                  Boxed groups
                  <span className="position-absolute right-0">
                    <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/branch-name/" className="position-relative f5 py-1 d-block">
                  Branch name
                </a>
              </li>
              <li className="">
                <Link className="position-relative f5 py-1 d-block" to={breadcrumbPageRoute}>
                  Breadcrumb
                </Link>
              </li>
              <li className="">
                <Link className="position-relative f5 py-1 d-block" to={buttonsPageRoute}>
                  Buttons
                </Link>
              </li>
              <li className="">
                <a href="/dropdown/" className="position-relative f5 py-1 d-block">
                  Dropdown
                </a>
              </li>
              <li className="">
                <a href="/flash-banner/" className="position-relative f5 py-1 d-block">
                  Flash banner
                  <span className="position-absolute right-0">
                    <span className="text-yellow  tooltipped tooltipped-nw" aria-label="In review">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/forms/" className="position-relative f5 py-1 d-block">
                  Forms
                </a>
              </li>
              <li className="">
                <Link className="position-relative f5 py-1 d-block" to={labelsPageRoute}>
                  Labels
                  <span className="position-absolute right-0">
                    <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                        viewBox="0 0 8 16"
                        version="1.1"
                        width="9"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </li>
              <li className="">
                <a href="/markdown/" className="position-relative f5 py-1 d-block">
                  Markdown
                </a>
              </li>
              <li className="">
                <a href="/marketing-buttons/" className="position-relative f5 py-1 d-block">
                  Marketing Buttons
                  <span className="position-absolute right-0">
                    <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <Link className="position-relative f5 py-1 d-block" to={navigationPageRoute}>
                  Navigation
                </Link>
              </li>
              <li className="">
                <a href="/octicons/" className="position-relative f5 py-1 d-block">
                  Octicons
                </a>
              </li>
              <li className="">
                <a href="/page-headers/" className="position-relative f5 py-1 d-block">
                  Page headers
                  <span className="position-absolute right-0">
                    <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/page-sections/" className="position-relative f5 py-1 d-block">
                  Page sections
                  <span className="position-absolute right-0">
                    <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/pagehead/" className="position-relative f5 py-1 d-block">
                  Pagehead
                </a>
              </li>
              <li className="">
                <a href="/pagination/" className="position-relative f5 py-1 d-block">
                  Pagination
                  <span className="position-absolute right-0">
                    <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/popover/" className="position-relative f5 py-1 d-block">
                  Popover
                  <span className="position-absolute right-0">
                    <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/progress/" className="position-relative f5 py-1 d-block">
                  Progress Bar
                  <span className="position-absolute right-0">
                    <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/select-menu/" className="position-relative f5 py-1 d-block">
                  Select menu
                </a>
              </li>
              <li className="">
                <a href="/subhead/" className="position-relative f5 py-1 d-block">
                  Subhead
                  <span className="position-absolute right-0">
                    <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/tables/" className="position-relative f5 py-1 d-block">
                  Tables
                  <span className="position-absolute right-0">
                    <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                      <svg
                        height="18"
                        className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
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
                <a href="/tooltips/" className="position-relative f5 py-1 d-block">
                  Tooltips
                </a>
              </li>
              <li className="">
                <a href="/truncate/" className="position-relative f5 py-1 d-block">
                  Truncate
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
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
