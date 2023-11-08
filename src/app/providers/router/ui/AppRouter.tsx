import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'

const Fallback = (): React.ReactElement<'div'> => {
  return (
    <div className="eee">
      ... Loading ...
    </div>
  )
}

export const AppRouter = (): React.ReactElement<'div'> => {
  return (
    <Suspense fallback={<Fallback />}>
      <div className="page-container">
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => {
            return (
              <Route key={path} path={path} element={element} />
            )
          })
          }
        </Routes>
      </div>
    </Suspense>
  )
}
