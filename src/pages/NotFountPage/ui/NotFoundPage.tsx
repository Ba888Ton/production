import { classNames } from 'helpers/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { type ReactElement, type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

export function NotFoundPage ({ className }: NotFoundPageProps): ReactElement<'div'> {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('page not found')}
    </div>
  )
}
