import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from './InfoBlock.module.css';
import icon from './bg.svg';

export const InfoBlock = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className={`${styles.info} ${inView ? 'fadeIn' : ''}`}>
      <div>
        <h2>{t('become_co_owner')}</h2>
        <p>{t('invest_in_giants')}</p>
      </div>
      <img src={icon} alt="Icon" />
    </section>
  );
};
