import React from 'react'

const LazyAlertsPage = React.lazy(() => import('./AlertsPage'))

const AsyncAlertsPage = () => (
  <React.Suspense fallback={null}>
    <LazyAlertsPage />
  </React.Suspense>
)

export default AsyncAlertsPage
