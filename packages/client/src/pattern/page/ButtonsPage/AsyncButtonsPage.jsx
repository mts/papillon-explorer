import React from 'react'

const LazyButtonsPage = React.lazy(() => import('./ButtonsPage'))

export const AsyncButtonsPage = () => (
  <React.Suspense fallback={null}>
    <LazyButtonsPage />
  </React.Suspense>
)
