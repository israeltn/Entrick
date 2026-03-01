'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const slides = [
    {
        title: 'Pioneering AI Research',
        subtitle: 'Innovation at the Forefront',
        description: 'Dedicated to advanced AI research, we continuously explore new frontiers to bring cutting-edge intelligent solutions into practical, real-world applications.',
        buttonText: 'Discover Our Research',
        buttonHref: '/contact'
    },
    {
        title: 'Sovereign AI & Cybersecurity',
        subtitle: 'Resource-Constrained Environments',
        description: 'Robust cybersecurity and Sovereign AI solutions optimized for efficient local deployment, keeping your critical infrastructure impenetrable.',
        buttonText: 'Secure Your Infrastructure',
        buttonHref: '/contact'
    },
    {
        title: 'Secure AI & Modern Software',
        subtitle: 'Empowering Your Organization',
        description: 'We are a modern software company pioneering Secure AI solutions, delivering state-of-the-art applications tailored to your unique operational needs.',
        buttonText: 'Discover Secure AI',
        buttonHref: '/contact'
    },
    {
        title: 'Privacy-First AI Fine-Tuning',
        subtitle: 'LLM & SLM Optimization',
        description: 'Expert LLM and SLM fine-tuning designed for domain-specific privacy environments, ensuring your proprietary data remains completely secure.',
        buttonText: 'Explore Fine-Tuning',
        buttonHref: '/contact'
    },
    {
        title: 'Curated Training Data',
        subtitle: 'for Domain AI',
        description: 'High-quality data curation tailored for domain-specific AI training, ensuring fully compliant and powerful model performance.',
        buttonText: 'Explore Data Solutions',
        buttonHref: '/contact'
    },

];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 7000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleNext = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsExiting(false);
        }, 700);
    };

    const goToSlide = (index: number) => {
        if (index === currentSlide) return;
        setIsExiting(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsExiting(false);
        }, 600);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col items-center text-center min-h-[400px] justify-center">
                <div className={`transition-all duration-500 transform ${isExiting ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <h1 className="text-4xl w-full max-w-[300px] md:max-w-none md:w-[600px] lg:w-[700px] xl:w-[1000px] md:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-tight mb-8 mx-auto">
                        {slides[currentSlide].title}<br />
                        <span className="text-primary-gradient text-5xl">{slides[currentSlide].subtitle}</span>
                    </h1>

                    <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-12 opacity-80 leading-relaxed">
                        {slides[currentSlide].description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-[250px] max-w-md mx-auto">
                        <Button href={slides[currentSlide].buttonHref} variant="primary" size="md" className="w-full sm:w-auto md:min-w-[180px] text-base sm:text-xs">
                            {slides[currentSlide].buttonText}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
