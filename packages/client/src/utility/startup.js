import axe from 'react-axe'

export const addDivWithIdToBody = divId => {
  const appElement = document.createElement('div')
  appElement.id = divId
  document.body.appendChild(appElement)
}

export const checkAccessibilityIssues = (react, reactDOM, delay) => {
  if (process.env.NODE_ENV !== 'production') {
    axe(react, reactDOM, delay)
  }
}
