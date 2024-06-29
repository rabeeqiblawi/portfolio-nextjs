import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import ResponsiveMediaCard from '@/components/cards/responsive-media-card/ResponsiveMediaCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />
        <div className="responsiveContainer">
          <ResponsiveMediaCard
            imageUrl="/websiteProjectPlaceholder1.png"
            title="Bluehost Design Website"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />    
          <ResponsiveMediaCard
            imageUrl="/websiteProjectPlaceholder2.png"
            title="Sweetkick"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
          />
        </div>
      </div>
    </div>
  );
}
