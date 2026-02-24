'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const slides = [
    {
        title: 'Domain AI Agent Applications',
        subtitle: 'Pre-train Models for Precision',
        description: 'We build custom AI agents that understand your industry and maintain precision through expert pre-training.',
        buttonText: 'Meet Your AI',
        buttonHref: '/contact'
    },
    {
        title: 'Cybersecurity Mastery',
        subtitle: 'Secure Infrastructure Management',
        description: 'Elite digital defense paired with managed high-performance environments for total reliability.',
        buttonText: 'Secure Your Future',
        buttonHref: '/contact'
    },
    {
        title: 'Pioneering AI Research',
        subtitle: 'Elite IT Training & Consultation',
        description: 'Turning next-gen research into competitive advantage while empowering your team with IT mastery.',
        buttonText: 'Consult With Us',
        buttonHref: '/contact'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleNext = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsExiting(false);
        }, 500);
    };

    const goToSlide = (index: number) => {
        if (index === currentSlide) return;
        setIsExiting(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsExiting(false);
        }, 500);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col items-center text-center min-h-[400px] justify-center">
                <div className={`transition-all duration-500 transform ${isExiting ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <h1 className="text-4xl w-[300px] md:w-[600px] lg:w-[700px] xl:w-[1000px] md:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-tight mb-8">
                        {slides[currentSlide].title}<br />
                        <span className="text-primary-gradient text-5xl">{slides[currentSlide].subtitle}</span>
                    </h1>

                    <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-12 opacity-80 leading-relaxed">
                        {slides[currentSlide].description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button href={slides[currentSlide].buttonHref} variant="primary" size="lg" className="min-w-[180px]">
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
