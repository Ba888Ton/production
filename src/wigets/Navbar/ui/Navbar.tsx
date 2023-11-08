import { classNames } from 'helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement<NavbarProps> => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('to main')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('to about')}</AppLink>
      </div>
    </div>
  )
}
