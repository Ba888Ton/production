import { classNames } from 'helpers/classNames/classNames'
import './PageLoader.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
  className?: string
}

export function PageLoader ({ className }: PageLoaderProps) {
  return (
    <div className={classNames('page__loader', {}, [className])}>
      <Loader />
    </div>
  )
}
