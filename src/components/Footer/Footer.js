import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from './Footer.module.css';
import logo from './logo.svg';

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className={`${styles.footer} ${inView ? 'fadeIn' : ''}`}>
      <img src={logo} alt="Logo" />

      <div className={styles.footerSection}>
        <h3>{t('contacts')}</h3>
        <p>{t('company_name')}</p> {/* Добавлено название компании */}
        <a 
          href="https://go.2gis.com/7wqple" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('address')}
        </a>
        <a href="tel:+996772006096">{t('phone')}</a>
        <a href="mailto:fvafinans@gmail.com">{t('email')}</a>
      </div>

      <div className={`${styles.footerSection} ${styles.documents}`}>
        <h3>{t('documents')}</h3>
{/*         <a href="/terms.pdf" target="_blank" rel="noopener noreferrer">
          {t('offer')}
        </a> */}
        <a href="/policy.pdf" target="_blank" rel="noopener noreferrer">
          {t('policy')}
        </a>
        <a href="/license.pdf" target="_blank" rel="noopener noreferrer">
          {t('license')}
        </a>
      </div>

      <div className={styles.copyright}>
        <p>{t('footer_copyright')}</p>
      </div>
    </footer>
  );
};
