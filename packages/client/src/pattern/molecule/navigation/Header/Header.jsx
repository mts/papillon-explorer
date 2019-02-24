import React from 'react'
import { node } from 'prop-types'

const style = {
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 101,
}

const Header = ({ children }) => (
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
                {children}
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Header.defaultProps = {
  children: null,
}

Header.propTypes = {
  children: node,
}

export default Header
