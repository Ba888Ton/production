import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'helpers/classNames/classNames'
import './styles/index.scss'
import { AppRouter } from './providers/router'
import { Navbar } from '../wigets/Navbar'
import { ThemeSwitcher } from 'wigets/ThemeSwitcher'
import { Sidebar } from 'wigets/Sidebar'
import { Suspense } from 'react'
import { LanguageSwitcher } from 'wigets/LanguageSwitcher'

export default function App (): React.ReactElement {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-container">
          <Sidebar>
            <div className="switchers">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </Sidebar>
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
