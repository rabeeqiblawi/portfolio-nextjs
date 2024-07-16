import { useState, useEffect, useRef } from 'react';
import styles from './Testimonial.module.scss';
import { config as websiteInformation } from '@/config'

const reviews = websiteInformation.content.testimonial.testimonialData;

export default function ReviewsSection() {
    const [currentReview, setCurrentReview] = useState(0);
    const sliderRef = useRef(null);
    const touchStartX = useRef(null);
    const containerRef = useRef(null);
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;

    let sliderStyle = {};

    if (containerWidth > 1024) {

        if(currentReview < reviews.length - 2){
            sliderStyle = {
                transform: `translateX(-${currentReview * 380}px)`,
            };
        }
        else{
            sliderStyle = {
                transform: `translateX(-${(reviews.length - 3) * 380}px)`,
            };
        }
    }
    else if(containerWidth > 700){
        if(currentReview < reviews.length - 1){
            sliderStyle = {
                transform: `translateX(-${currentReview * 380}px)`,
            };
        }
        else{
            sliderStyle = {
                transform: `translateX(-${(reviews.length - 2) * 380}px)`,
            };
        }
    }
    else if(containerWidth > 500){
        if(currentReview < reviews.length - 1){
            sliderStyle = {
                transform: `translateX(-${currentReview * 380}px)`,
            };
        }
        else{
            sliderStyle = {
                transform: `translateX(-${(reviews.length - 1.49) * 380}px)`,
            };
        }
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((currentReview + 1) % reviews.length);
        }, 2000);

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
                setCurrentReview((currentReview + 1) % reviews.length);
            } else {
                setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);
            }
        }
        touchStartX.current = null;
    };

return (
    websiteInformation.content.testimonial.isHidden? null:
    <section className={styles.reviewsSection}>
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
                {reviews.map((review, index) => (
                    <div key={index} className={styles.review}>
                        <div className={styles.reviewText}>
                            <div className={styles.leftQuoteDiv}>
                                <img src="/icons/left-quote.svg" alt="" />
                            </div>
                            <p>{review.text}
                                {/* <div className={styles.rightQuoteDiv}>
                                    <img src="/icons/right-quote.svg" alt="" />
                                </div> */}
                            </p>
                            </div>
                        <div className={styles.author}>
                            <img src="placeholder-avatar.jpg" alt={review.author} />
                            <div>
                                <h4>{review.author}</h4>
                                <p>{review.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        {/* <div className={styles.reviewsContainer}>
            <div className={styles.review}>
                <div>
                    <hr />
                    <p>{reviews[currentReview].text}</p>
                    <hr />
                </div>
            <div className={styles.author}>
                <img src="/placeholder-avatar.jpg" alt={reviews[currentReview].author} />
                <div>
                <h4>{reviews[currentReview].author}</h4>
                <p>{reviews[currentReview].title}</p>
                </div>
            </div>
            </div>
        </div> */}

        <div className={styles.dots}>
            {reviews.map((_,index) => (
                <span 
                    key={index} 
                    className={`${styles.dot} ${index === currentReview ? styles.active : ''}`}
                    onClick={() => setCurrentReview(index)}
                />
            ))}
        </div>
    </section>
);
}