import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './FormBlock.module.css';

export const FormBlock = ({ formRef }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.agreement) newErrors.agreement = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (newValue) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm("service_id", "template_id", e.target, "user_id")
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"))
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <div ref={(el) => { ref(el); formRef.current = el; }} className={`${styles.formWrapper} ${inView ? 'fadeIn' : ''}`}>
      <form className={styles.form} onSubmit={sendEmail}>
        <h2>{t('ready_to_invest')}</h2>
        <p className={styles.subtitle}>{t('open_broker_account')}</p>
        <input
          type="text"
          name="name"
          placeholder={t('name_placeholder')}
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.errorInput : ""}
        />
        <input
          type="email"
          name="email"
          placeholder={t('email_placeholder')}
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.errorInput : ""}
        />
        <input
          type="tel"
          name="phone"
          placeholder={t('phone_placeholder')}
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? styles.errorInput : ""}
        />
        <div className={styles.agreement}>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          <label
            style={{
              color: errors.agreement ? "red" : "#6c757d",
              transition: "color 0.3s ease",
            }}
          >
            <a
              href="/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t('agree_to_terms')}
            </a>
          </label>
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? <div className={styles.spinner}></div> : t('send')}
        </button>
        {status && (
          <div
            className={`${styles.status} ${
              status === "success" ? styles.success : styles.error
            }`}
          >
            {status === "success" ? t('success_message') : t('error_message')}
          </div>
        )}
      </form>
    </div>
  );
};
