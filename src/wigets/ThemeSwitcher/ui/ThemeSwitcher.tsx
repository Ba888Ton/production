import { classNames } from 'helpers/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LigthIcon from 'shared/assets/icons/ThemeLigth.svg'
import DarkIcon from 'shared/assets/icons/ThemeDark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, type ButtonHTMLAttributes } from 'react'

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LigthIcon /> : <DarkIcon />}
    </Button>
  )
}
