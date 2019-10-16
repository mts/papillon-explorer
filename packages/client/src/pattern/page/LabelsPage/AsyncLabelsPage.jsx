import React from 'react'

const LazyLabelsPage = React.lazy(() => import('./LabelsPage'))

export const AsyncLabelsPage = () => (
  <React.Suspense fallback={null}>
    <LazyLabelsPage />
  </React.Suspense>
)
