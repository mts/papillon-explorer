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
          <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4" data-pjax="">
             <ul className="list-style-none">
                <li className="px-4 my-4">
                   <a href="/primer/support/" className="position-relative f4 d-block text-gray-dark">
                   Support
                   </a>
                   <ul className="pt-2 list-style-none">
                      <li className="">
                         <a href="/primer/support/breakpoints/" className="position-relative f5 py-1 d-block">
                         Breakpoints
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/support/color-system/" className="position-relative f5 py-1 d-block">
                            Color system
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/support/spacing/" className="position-relative f5 py-1 d-block">
                         Spacing
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/support/typography/" className="position-relative f5 py-1 d-block">
                            Typography
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/support/marketing-variables/" className="position-relative f5 py-1 d-block">
                            Marketing variables
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="new release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                   </ul>
                </li>
                <li className="mt-4 border-bottom"></li>
                <li className="px-4 my-4">
                   <a href="/primer/utilities/" className="position-relative f4 d-block text-gray-dark">
                   Utilities
                   </a>
                   <ul className="pt-2 list-style-none">
                      <li className="">
                         <a href="/primer/utilities/animations/" className="position-relative f5 py-1 d-block">
                         Animations
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/borders/" className="position-relative f5 py-1 d-block">
                            Borders
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/marketing-borders/" className="position-relative f5 py-1 d-block">
                            Marketing borders
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/box-shadow/" className="position-relative f5 py-1 d-block">
                            Box shadow
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/colors/" className="position-relative f5 py-1 d-block">
                            Colors
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/details/" className="position-relative f5 py-1 d-block">
                            Details
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/marketing-filters/" className="position-relative f5 py-1 d-block">
                            Filters
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/flexbox/" className="position-relative f5 py-1 d-block">
                            Flexbox
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/layout/" className="position-relative f5 py-1 d-block">
                         Layout
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/marketing-layout/" className="position-relative f5 py-1 d-block">
                            Marketing layout
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/margin/" className="position-relative f5 py-1 d-block">
                         Margin
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/marketing-margin/" className="position-relative f5 py-1 d-block">
                            Marketing margin
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/padding/" className="position-relative f5 py-1 d-block">
                         Padding
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/marketing-padding/" className="position-relative f5 py-1 d-block">
                            Marketing padding
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/typography/" className="position-relative f5 py-1 d-block">
                         Typography
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/utilities/marketing-type/" className="position-relative f5 py-1 d-block">
                            Marketing typography
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                   </ul>
                </li>
                <li className="mt-4 border-bottom"></li>
                <li className="px-4 my-4">
                   <a href="/primer/objects/" className="position-relative f4 d-block text-gray-dark">
                   Objects
                   </a>
                   <ul className="pt-2 list-style-none">
                      <li className="">
                         <a href="/primer/objects/grid/" className="position-relative f5 py-1 d-block">
                            Grid
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/objects/layout/" className="position-relative f5 py-1 d-block">
                            Layout
                            <span className="position-absolute right-0">
                               <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/objects/table-object/" className="position-relative f5 py-1 d-block">
                         Table object
                         </a>
                      </li>
                   </ul>
                </li>
                <li className="mt-4 border-bottom"></li>
                <li className="px-4 my-4">
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
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/components/box-overlay/" className="position-relative f5 py-1 d-block">
                            Box overlay
                            <span className="position-absolute right-0">
                               <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/components/boxed-groups/" className="position-relative f5 py-1 d-block">
                            Boxed groups
                            <span className="position-absolute right-0">
                               <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
                            <span className="position-absolute right-0">
                               <span className="text-yellow  tooltipped tooltipped-nw" aria-label="In review">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
                            <span className="position-absolute right-0">
                               <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/components/page-sections/" className="position-relative f5 py-1 d-block">
                            Page sections
                            <span className="position-absolute right-0">
                               <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/components/popover/" className="position-relative f5 py-1 d-block">
                            Popover
                            <span className="position-absolute right-0">
                               <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/components/progress/" className="position-relative f5 py-1 d-block">
                            Progress Bar
                            <span className="position-absolute right-0">
                               <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
                            <span className="position-absolute right-0">
                               <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
                         </a>
                      </li>
                      <li className="">
                         <a href="/primer/components/tables/" className="position-relative f5 py-1 d-block">
                            Tables
                            <span className="position-absolute right-0">
                               <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                                  <svg height="18" className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                     <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                  </svg>
                               </span>
                            </span>
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
             <div className="flex-row width-full bg-blue py-3 py-lg-6">
                <div className="main-content mx-auto py-4 px-3 px-md-6 px-lg-3 text-white">
                   <div className="">
                      <h1 className="f000-light mb-4">Primer</h1>
                      <div className="f2-light pb-4">
                         Resources, tooling, and design guidelines for building websites with Primer, GitHub's front-end framework.
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3"></div>
          </div>
       </div>
    </div>
  )
}

export default StartPage;
