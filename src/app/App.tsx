import { useTheme } from "app/providers/ThemeProvider"

import { classNames } from "helpers/classNames/classNames"
import './styles/index.scss'
import { AppRouter } from "./providers/router"
import { Navbar } from "../wigets/Navbar"
import { ThemeSwitcher } from "wigets/ThemeSwitcher";
import { Sidebar } from "wigets/Sidebar"
import { useState } from "react"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import Shevron from "shared/assets/icons/ShevronBlack.svg"

export default function App() {
  const { theme } = useTheme();

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(expanded => !expanded);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-container">
        <Sidebar expanded={expanded} toggleExpanded={toggleExpanded}>
          <div className="switcher">
            <ThemeSwitcher className=""/>
          </div>
        </Sidebar>
        <AppRouter />
      </div>
    </div>
  )
}