export const addDivWithIdToBody = divId => {
  const appElement = document.createElement('div')
  appElement.id = divId
  document.body.appendChild(appElement)
}
