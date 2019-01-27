import React from 'react'

const LazyLabelsPage = React.lazy(() => import('./LabelsPage'))

const AsyncLabelsPage = () => (
  <React.Suspense fallback={null}>
    <LazyLabelsPage />
  </React.Suspense>
)

export default AsyncLabelsPage
