import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logo from './logo.svg';

export const Header = ({ scrollToForm }) => {
  const { t, i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" onClick={scrollToTop} />
      <div className={styles.languageSwitcher}>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('kg')}>KG</button>
      </div>
      <button onClick={scrollToForm} className={styles.openAccountButton}>
        {t('open_account')}
      </button>
    </header>
  );
};
