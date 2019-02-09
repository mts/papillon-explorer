import React from 'react'
import { Link } from 'react-router-dom'
import {
  alertsPageRoute,
  avatarsPageRoute,
  blankslatePageRoute,
  breadcrumbPageRoute,
  buttonsPageRoute,
  labelsPageRoute,
  navigationPageRoute,
} from '../../../../../route'

const ComponentsLinks = () => {
  return (
    <React.Fragment>
      <a href="/" className="position-relative f4 d-block text-gray-dark">
        Components
      </a>
      <ul className="pt-2 list-style-none">
        <li className="">
          <Link className="position-relative f5 py-1 d-block" to={alertsPageRoute.path}>
            Alerts
          </Link>
        </li>
        <li className="">
          <Link className="position-relative f5 py-1 d-block" to={avatarsPageRoute.path}>
            Avatars
          </Link>
        </li>
        <li className="">
          <Link className="position-relative f5 py-1 d-block" to={blankslatePageRoute.path}>
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
          <Link className="position-relative f5 py-1 d-block" to={breadcrumbPageRoute.path}>
            Breadcrumb
          </Link>
        </li>
        <li className="">
          <Link className="position-relative f5 py-1 d-block" to={buttonsPageRoute.path}>
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
          <Link className="position-relative f5 py-1 d-block" to={labelsPageRoute.path}>
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
          <Link className="position-relative f5 py-1 d-block" to={navigationPageRoute.path}>
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
    </React.Fragment>
  )
}

export default ComponentsLinks
