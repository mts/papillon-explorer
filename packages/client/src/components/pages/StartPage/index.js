import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  'position': '-webkit-sticky',
  'position': 'sticky',
  'top': 0,
  'left': 0,
  'right': 0,
  'zIndex': 101
}

const StartPage = () => {
  return (
    <div>
      <div className="bg-gray-dark" style={style}>
        <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container" data-pjax="#js-pjax-container">
          <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
            <a href="/" className="pt-2 border-gray-dark no-underline text-white" aria-label="Papillon">🦋</a>
            <div className="flex-self-center Details-content--shown">
              <div className="dropdown js-menu-container js-select-menu">
                <h1 className="h4 text-normal pl-3 mt-1">
                  <button className="btn-link text-white link-white no-underline js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
                    Papillon
                    <div className="dropdown-caret"></div>
                  </button>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap flex-lg-nowrap">
        <nav className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pr-6 pb-4">
          <ul className="list-style-none">
            <li className="pr-6 my-4 mx-4">
              <a href="/primer/components/" className="position-relative f4 d-block text-gray-dark">
                Components
              </a>
              <ul className="pt-2 list-style-none">
                <li className="">
                  <a href="/primer/components/alerts/" className="position-relative f5 py-1 d-block">
                    Alerts
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/avatars/" className="position-relative f5 py-1 d-block">
                    Avatars
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/blankslate/" className="position-relative f5 py-1 d-block">
                    Blankslate
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/box/" className="position-relative f5 py-1 d-block">
                    Box
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/box-overlay/" className="position-relative f5 py-1 d-block">
                    Box overlay
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/boxed-groups/" className="position-relative f5 py-1 d-block">
                    Boxed groups
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/branch-name/" className="position-relative f5 py-1 d-block">
                    Branch name
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/breadcrumb/" className="position-relative f5 py-1 d-block">
                    Breadcrumbs
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/buttons/" className="position-relative f5 py-1 d-block">
                    Buttons
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/dropdown/" className="position-relative f5 py-1 d-block">
                    Dropdown
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/flash-banner/" className="position-relative f5 py-1 d-block">
                    Flash banner
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/forms/" className="position-relative f5 py-1 d-block">
                    Forms
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/labels/" className="position-relative f5 py-1 d-block">
                    Labels
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/markdown/" className="position-relative f5 py-1 d-block">
                    Markdown
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/marketing-buttons/" className="position-relative f5 py-1 d-block">
                    Marketing Buttons
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/navigation/" className="position-relative f5 py-1 d-block">
                    Navigation
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/octicons/" className="position-relative f5 py-1 d-block">
                    Octicons
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/page-headers/" className="position-relative f5 py-1 d-block">
                    Page headers
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/page-sections/" className="position-relative f5 py-1 d-block">
                    Page sections
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/pagehead/" className="position-relative f5 py-1 d-block">
                    Pagehead
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/pagination/" className="position-relative f5 py-1 d-block">
                    Pagination
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/popover/" className="position-relative f5 py-1 d-block">
                    Popover
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/progress/" className="position-relative f5 py-1 d-block">
                    Progress Bar
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/select-menu/" className="position-relative f5 py-1 d-block">
                    Select menu
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/subhead/" className="position-relative f5 py-1 d-block">
                    Subhead
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/tables/" className="position-relative f5 py-1 d-block">
                    Tables
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/tooltips/" className="position-relative f5 py-1 d-block">
                    Tooltips
                  </a>
                </li>
                <li className="">
                  <a href="/primer/components/truncate/" className="position-relative f5 py-1 d-block">
                    Truncate
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
          <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3">
          </div>
        </div>

      </div>
    </div>
  )
}

export default StartPage;
