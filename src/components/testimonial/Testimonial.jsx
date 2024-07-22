import { useState, useEffect, useRef } from 'react';
import styles from './Testimonial.module.scss';
import { config as websiteInformation } from '@/config'


const Testimonial = ({isHidden, data}) => {
    const [currentReview, setCurrentReview] = useState(0);
    const sliderRef = useRef(null);
    const touchStartX = useRef(null);
    const containerRef = useRef(null);
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
    const cardwidth= 380;

    let sliderStyle = {};

    if (containerWidth > 1024) {

        if(currentReview < data.length - 2){
            sliderStyle = {
                transform: `translateX(-${currentReview * cardwidth}px)`,
            };
        }
        else{
            sliderStyle = {
                transform: `translateX(-${(data.length - 3) * cardwidth}px)`,
            };
        }
    }
    else if(containerWidth > 700){
        if(currentReview < data.length - 1){
            sliderStyle = {
                transform: `translateX(-${currentReview * cardwidth}px)`,
            };
        }
        else{
            sliderStyle = {
                transform: `translateX(-${(data.length - 2) * cardwidth}px)`,
            };
        }
    }
    else if(containerWidth > 500){
        if(currentReview < data.length - 1){
            sliderStyle = {
                transform: `translateX(-${currentReview * cardwidth}px)`,
            };
        }
        else{
            sliderStyle = {
                transform: `translateX(-${(data.length - 1.49) * cardwidth}px)`,
            };
        }
    }
    else{
        const cardwidth= 330;
        sliderStyle = {
            transform: `translateX(-${currentReview * cardwidth}px)`,
        }; 
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((currentReview + 1) % data.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentReview]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                setCurrentReview((currentReview + 1) % data.length);
            } else {
                setCurrentReview((currentReview - 1 + data.length) % data.length);
            }
        }
        touchStartX.current = null;
    };

    return (
        isHidden? null:
        <div className={styles.reviewsSection}>
            <div className={styles.header}>
                <span className={styles.tag}>Reviews</span>
                <h2 className={styles.title}>Dive into <span>Rave Reviews!</span></h2>
                <p className={styles.subtitle}>
                    Explore glowing testimonials from our satisfied clients. Discover how our work has made a positive impact and why clients love working with us.
                </p>
            </div>
            <div 
                className={styles.reviewsContainer}
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}    
            >
                <div 
                    className={styles.reviewsSlider} 
                    ref={containerRef}
                    style={sliderStyle}
                >
                    {data.map((review, index) => (
                        <div key={index} className={styles.review}>
                            <div className={styles.reviewText}>
                                <div className={styles.leftQuoteDiv}>
                                    <img src={websiteInformation.content.testimonial.leftQuoteIconURL} alt="" />
                                </div>
                                <p>{review.text}
                                    {/* <div className={styles.rightQuoteDiv}>
                                        <img src={websiteInformation.content.testimonial.rightQuoteIconURL} alt="" />
                                    </div> */}
                                </p>
                            </div>
                            <div className={styles.author}>
                                <img src={review.authorImageURL} alt={review.author} />
                                <div>
                                    <h4>{review.author}</h4>
                                    <p>{review.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.dots}>
                {data.map((_,index) => (
                    <span 
                        key={index} 
                        className={`${styles.dot} ${index === currentReview ? styles.active : ''}`}
                        onClick={() => setCurrentReview(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Testimonial;