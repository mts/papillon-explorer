import React from 'react'

const LazyBreadcrumbPage = React.lazy(() => import('./BreadcrumbPage'))

export const AsyncBreadcrumbPage = () => (
  <React.Suspense fallback={null}>
    <LazyBreadcrumbPage />
  </React.Suspense>
)
