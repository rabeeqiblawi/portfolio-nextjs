import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import ResponsiveMediaCard from '@/components/cards/responsive-media-card/ResponsiveMediaCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />
        <div className={styles.responsiveContainer}>
          <ResponsiveMediaCard
            imageUrl="/images/placeholder.png"
            title="Card Title"
            description="Card Description Card Description Card Description Card Description"
          />    
          <ResponsiveMediaCard
            imageUrl="/images/placeholder.png"
            title="Card Title"
            description="Card Description"
          />
        </div>
      </div>
    </div>
  );
}
