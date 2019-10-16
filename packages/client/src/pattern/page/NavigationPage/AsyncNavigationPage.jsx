import React from 'react'

const LazyNavigationPage = React.lazy(() => import('./NavigationPage'))

export const AsyncNavigationPage = () => (
  <React.Suspense fallback={null}>
    <LazyNavigationPage />
  </React.Suspense>
)
