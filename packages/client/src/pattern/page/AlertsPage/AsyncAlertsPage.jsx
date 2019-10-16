import React from 'react'

const LazyAlertsPage = React.lazy(() => import('./AlertsPage'))

export const AsyncAlertsPage = () => (
  <React.Suspense fallback={null}>
    <LazyAlertsPage />
  </React.Suspense>
)
