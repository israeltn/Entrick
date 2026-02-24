import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'light' | 'dark';
    id?: string;
}

export default function SectionWrapper({
    children,
    className = '',
    background = 'white',
    id,
}: SectionWrapperProps) {
    const backgrounds = {
        white: 'bg-white',
        light: 'bg-gray-50',
        dark: 'bg-[#0f0f0f] text-white',
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
