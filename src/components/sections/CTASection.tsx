import React from 'react';
import Button from '../ui/Button';

interface CTASectionProps {
    title?: string;
    highlightedText?: string;
    subtitle?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export default function CTASection({
    title = 'Ready to Transform Your',
    highlightedText = 'Organization',
    subtitle = 'Join the future of intelligent IT solutions. Let\'s build something extraordinary together.',
    primaryButtonText = 'Start your journey',
    primaryButtonHref = '/contact',
    secondaryButtonText = 'Explore AI Agents',
    secondaryButtonHref = '/agents',
}: CTASectionProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f0f0f] mb-6">
                    {title} <span className="gradient-text">{highlightedText}</span>?
                </h2>
                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button href={primaryButtonHref} variant="primary" size="lg">
                        {primaryButtonText}
                    </Button>
                    <Button href={secondaryButtonHref} variant="outline" size="lg">
                        {secondaryButtonText}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}
