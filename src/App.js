import { useRef } from "react";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { FormBlock } from "./components/FormBlock/FormBlock";
import { Header } from "./components/Header/Header";
import { InfoBlock } from "./components/InfoBlock/InfoBlock";
import { Main } from "./components/Main/Main";
import styles from "./App.module.css";

function App() {
  const formRef = useRef(null); // Создаем реф

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <Header scrollToForm={scrollToForm} /> {/* Прокидываем функцию скролла */}
      <Main />
      <Features />
      <InfoBlock />
      <FormBlock formRef={formRef} /> {/* Прокидываем реф */}
      <Footer />
    </div>
  );
}

export default App;
