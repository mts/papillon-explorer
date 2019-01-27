import React from 'react'

const LazyNavigationPage = React.lazy(() => import('./NavigationPage'))

const AsyncNavigationPage = () => (
  <React.Suspense fallback={null}>
    <LazyNavigationPage />
  </React.Suspense>
)

export default AsyncNavigationPage
