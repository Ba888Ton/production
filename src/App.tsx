import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "./theme/useTheme"

import Counter from "./components/Counter"
import AboutPageAsync from "./pages/AboutPage/AboutPage.async"
import MainPageAsync from "./pages/MainPage/MainPage.async"
import { classNames } from "./helpers/classNames/classNames"
import './styles/index.scss'

const Fallback = () => {
  return (
    <div className="eee">
      ... Loading ...
    </div>
  )
}

export default function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>на главную</Link>
      <Link to={'/about'}>в описание</Link>
      <Counter />
      <button onClick={toggleTheme}>переключить тему</button>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={'/'}  element={<MainPageAsync />} />
            <Route path={'/about'} element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
    </div>
  )
}