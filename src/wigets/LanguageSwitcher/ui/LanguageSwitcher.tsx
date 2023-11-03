import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

export function LanguageSwitcher () {
  const {t, i18n} = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (<Button theme={ThemeButton.WIDE} onClick={toggleLanguage}>{t('language')}</Button>)
}