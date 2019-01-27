import React from 'react'

const LazyBreadcrumbPage = React.lazy(() => import('./BreadcrumbPage'))

const AsyncBreadcrumbPage = () => (
  <React.Suspense fallback={null}>
    <LazyBreadcrumbPage />
  </React.Suspense>
)

export default AsyncBreadcrumbPage
