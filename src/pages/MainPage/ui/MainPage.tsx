import { useTranslation } from "react-i18next"


export default function MainPage({}) {
  
  const {t} = useTranslation();

  return (
    <div>
      <h1>{t('main')}</h1>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nemo earum commodi architecto quas veniam placeat tempora quidem deleniti cumque ducimus, aperiam cum dicta molestiae voluptate, error pariatur ex recusandae? Laborum corporis quos numquam doloremque. Quidem, labore fuga? Eum, minus!
      </div>
    </div>
  )
}