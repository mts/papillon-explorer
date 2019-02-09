import React from 'react'

const ObjectsLinks = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default ObjectsLinks
