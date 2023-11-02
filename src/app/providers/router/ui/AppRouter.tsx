import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig"

const Fallback = () => {
  return (
    <div className="eee">
      ... Loading ...
    </div>
  )
}

export const AppRouter = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return (
            <Route key={path} path={path} element={element} />
          )
        })
        }
      </Routes>
    </Suspense>
  )
}
