import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton, type ButtonProps } from 'shared/ui/Button/Button'

export const LanguageSwitcher: FC<ButtonProps> = () => {
  const { t, i18n } = useTranslation()
  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
  <Button
    theme={ThemeButton.WIDE}
    onClick={toggleLanguage}
  >
    {t('language')}
  </Button>)
}
