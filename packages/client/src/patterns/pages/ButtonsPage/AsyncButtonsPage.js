import React from 'react'

const LazyButtonsPage = React.lazy(() => import('./ButtonsPage'))

const AsyncButtonsPage = () => (
  <React.Suspense fallback={null}>
    <LazyButtonsPage />
  </React.Suspense>
)

export default AsyncButtonsPage
