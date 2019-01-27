import React from 'react'

const LazyAvatarsPage = React.lazy(() => import('./AvatarsPage'))

const AsyncAvatarsPage = () => (
  <React.Suspense fallback={null}>
    <LazyAvatarsPage />
  </React.Suspense>
)

export default AsyncAvatarsPage
