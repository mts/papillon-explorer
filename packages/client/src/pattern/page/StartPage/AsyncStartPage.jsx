import React from 'react'

const LazyStartPage = React.lazy(() => import('./StartPage'))

const AsyncStartPage = () => (
  <React.Suspense fallback={null}>
    <LazyStartPage />
  </React.Suspense>
)

export default AsyncStartPage
