import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from './Features.module.css';
import icon from './bg.svg';

export const Features = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Получаем массив или пустой массив, если `t()` не возвращает массив
  const featuresList = t('features', { returnObjects: true });
  const featuresArray = Array.isArray(featuresList) ? featuresList : [];

  return (
    <section ref={ref} className={`${styles.features} ${inView ? 'fadeIn' : ''}`}>
      {featuresArray.map((feature, i) => (
        <div key={i} className={styles.feature}>
          <img src={icon} alt="Icon" />
          <p>{feature}</p>
        </div>
      ))}
    </section>
  );
};
