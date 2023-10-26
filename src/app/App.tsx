import { Link } from "react-router-dom"
import { useTheme } from "../app/providers/ThemeProvider"

import { classNames } from "../helpers/classNames/classNames"
import './styles/index.scss'
import { AppRouter } from "./providers/router"

export default function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>на главную</Link>
      <Link to={'/about'}>в описание</Link>
      <button onClick={toggleTheme}>переключить тему</button>
      <AppRouter />
    </div>
  )
}