import { useTheme } from "app/providers/ThemeProvider"

import { classNames } from "helpers/classNames/classNames"
import './styles/index.scss'
import { AppRouter } from "./providers/router"
import { Navbar } from "../wigets/Navbar"

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}