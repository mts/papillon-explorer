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
        <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container">
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
              <a href="/" className="position-relative f4 d-block text-gray-dark">
                Components
              </a>
              <ul className="pt-2 list-style-none">
                <li className="position-relative f5 py-1 d-block">
                  <Link to="/alerts">Alerts</Link>
                </li>
                <li className="position-relative f5 py-1 d-block">
                  <Link to="/avatars">Avatars</Link>
                </li>
                <li className="">
                  <a href="/blankslate/" className="position-relative f5 py-1 d-block">
                    Blankslate
                  </a>
                </li>
                <li className="">
                  <a href="/box/" className="position-relative f5 py-1 d-block">
                    Box
                  </a>
                </li>
                <li className="">
                  <a href="/box-overlay/" className="position-relative f5 py-1 d-block">
                    Box overlay
                  </a>
                </li>
                <li className="">
                  <a href="/boxed-groups/" className="position-relative f5 py-1 d-block">
                    Boxed groups
                  </a>
                </li>
                <li className="">
                  <a href="/branch-name/" className="position-relative f5 py-1 d-block">
                    Branch name
                  </a>
                </li>
                <li className="">
                  <a href="/breadcrumb/" className="position-relative f5 py-1 d-block">
                    Breadcrumbs
                  </a>
                </li>
                <li className="">
                  <a href="/buttons/" className="position-relative f5 py-1 d-block">
                    Buttons
                  </a>
                </li>
                <li className="">
                  <a href="/dropdown/" className="position-relative f5 py-1 d-block">
                    Dropdown
                  </a>
                </li>
                <li className="">
                  <a href="/flash-banner/" className="position-relative f5 py-1 d-block">
                    Flash banner
                  </a>
                </li>
                <li className="">
                  <a href="/forms/" className="position-relative f5 py-1 d-block">
                    Forms
                  </a>
                </li>
                <li className="">
                  <a href="/labels/" className="position-relative f5 py-1 d-block">
                    Labels
                  </a>
                </li>
                <li className="">
                  <a href="/markdown/" className="position-relative f5 py-1 d-block">
                    Markdown
                  </a>
                </li>
                <li className="">
                  <a href="/marketing-buttons/" className="position-relative f5 py-1 d-block">
                    Marketing Buttons
                  </a>
                </li>
                <li className="">
                  <a href="/navigation/" className="position-relative f5 py-1 d-block">
                    Navigation
                  </a>
                </li>
                <li className="">
                  <a href="/octicons/" className="position-relative f5 py-1 d-block">
                    Octicons
                  </a>
                </li>
                <li className="">
                  <a href="/page-headers/" className="position-relative f5 py-1 d-block">
                    Page headers
                  </a>
                </li>
                <li className="">
                  <a href="/page-sections/" className="position-relative f5 py-1 d-block">
                    Page sections
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
                  </a>
                </li>
                <li className="">
                  <a href="/popover/" className="position-relative f5 py-1 d-block">
                    Popover
                  </a>
                </li>
                <li className="">
                  <a href="/progress/" className="position-relative f5 py-1 d-block">
                    Progress Bar
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
                  </a>
                </li>
                <li className="">
                  <a href="/tables/" className="position-relative f5 py-1 d-block">
                    Tables
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
          <div class="flex-row width-full bg-blue py-3 py-lg-6">
            <div class="main-content mx-auto py-4 px-3 px-md-6 px-lg-3 text-white">
              <div class="">
                <h1 class="f000-light mb-4">Primer</h1>

                  <div class="f2-light pb-4">
                    Resources, tooling, and design guidelines for building websites with Primer, GitHub's front-end framework.
                  </div>



              </div>
            </div>
          </div>

          <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3">
          </div>
        </div>

      </div>
    </div>
  )
}

export default StartPage;
