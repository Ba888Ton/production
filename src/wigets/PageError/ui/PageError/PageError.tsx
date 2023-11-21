import { classNames } from 'helpers/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
  className?: string
}

const reloadPage = () => {
  location.reload()
}

export function PageError ({ className }: PageErrorProps) {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{ t('error occured') }</p>
      <button type="button" onClick={reloadPage}>{ t('reload') }</button>
    </div>
  )
}
