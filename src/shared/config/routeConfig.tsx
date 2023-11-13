import { type RouteProps } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'
import { AboutPage } from '../../pages/AboutPage'
import { NotFoundPage } from 'pages/NotFountPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',

  // LAST
  NOT_FOUND_PAGE = 'not_fount',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND_PAGE]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.not_fount,
    element: <NotFoundPage />,
  },
}
