import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from './Main.module.css';
import brokerSvg from './bg.svg';

export const Main = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main ref={ref} className={`${styles.main} ${inView ? 'fadeIn' : ''}`}>
      <div className={styles.textContent}>
        <h1>{t('invest_in_future')}</h1>
        <p>{t('open_broker_account')}</p>
      </div>
      <img src={brokerSvg} alt={t('broker_chart_alt')} />
    </main>
  );
};
