import { classNames } from "helpers/classNames/classNames";
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export function Navbar({className}: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>на главную</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>в описание</AppLink>
      </div>
    </div>
  )
}

