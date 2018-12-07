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
    <React.Fragment>
      <div className="bg-gray-dark" style={style}>
        <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container" data-pjax="#js-pjax-container">
          <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
            <a href="/" className="border-gray-dark no-underline text-white" aria-label="Github Style guide">
              <svg height="28" aria-label="github-logo" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="28" role="img"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>

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
        <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4">
          <ul className="list-style-none">
            <li class="px-4 my-4">
              <a href="/primer/components/" class="position-relative f4 d-block text-gray-dark">
                Components
              </a>
              <ul class="pt-2 list-style-none">
                <li class="">
                  <a href="/primer/components/alerts/" class="position-relative f5 py-1 d-block">
                    Alerts
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/avatars/" class="position-relative f5 py-1 d-block">
                    Avatars
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/blankslate/" class="position-relative f5 py-1 d-block">
                    Blankslate
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/box/" class="position-relative f5 py-1 d-block">
                    Box
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/box-overlay/" class="position-relative f5 py-1 d-block">
                    Box overlay
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/boxed-groups/" class="position-relative f5 py-1 d-block">
                    Boxed groups
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/branch-name/" class="position-relative f5 py-1 d-block">
                    Branch name
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/breadcrumb/" class="position-relative f5 py-1 d-block">
                    Breadcrumbs
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/buttons/" class="position-relative f5 py-1 d-block">
                    Buttons
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/dropdown/" class="position-relative f5 py-1 d-block">
                    Dropdown
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/flash-banner/" class="position-relative f5 py-1 d-block">
                    Flash banner
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/forms/" class="position-relative f5 py-1 d-block">
                    Forms
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/labels/" class="position-relative f5 py-1 d-block">
                    Labels
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/markdown/" class="position-relative f5 py-1 d-block">
                    Markdown
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/marketing-buttons/" class="position-relative f5 py-1 d-block">
                    Marketing Buttons
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/navigation/" class="position-relative f5 py-1 d-block">
                    Navigation
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/octicons/" class="position-relative f5 py-1 d-block">
                    Octicons
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/page-headers/" class="position-relative f5 py-1 d-block">
                    Page headers
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/page-sections/" class="position-relative f5 py-1 d-block">
                    Page sections
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/pagehead/" class="position-relative f5 py-1 d-block">
                    Pagehead
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/pagination/" class="position-relative f5 py-1 d-block">
                    Pagination
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/popover/" class="position-relative f5 py-1 d-block">
                    Popover
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/progress/" class="position-relative f5 py-1 d-block">
                    Progress Bar
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/select-menu/" class="position-relative f5 py-1 d-block">
                    Select menu
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/subhead/" class="position-relative f5 py-1 d-block">
                    Subhead
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/tables/" class="position-relative f5 py-1 d-block">
                    Tables
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/tooltips/" class="position-relative f5 py-1 d-block">
                    Tooltips
                  </a>
                </li>
                <li class="">
                  <a href="/primer/components/truncate/" class="position-relative f5 py-1 d-block">
                    Truncate
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
          <div className="flex-row width-full bg-blue py-3 py-lg-6">
          </div>
          <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3">
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default StartPage;
