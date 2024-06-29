import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />
      </div>
    </div>
  );
}
