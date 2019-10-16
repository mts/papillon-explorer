import React from 'react'

const LazyAvatarsPage = React.lazy(() => import('./AvatarsPage'))

export const AsyncAvatarsPage = () => (
  <React.Suspense fallback={null}>
    <LazyAvatarsPage />
  </React.Suspense>
)
