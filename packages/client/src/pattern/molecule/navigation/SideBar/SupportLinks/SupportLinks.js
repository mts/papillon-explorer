import React from 'react'

const SupportLinks = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default SupportLinks
