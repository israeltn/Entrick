'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

interface StatsSectionProps {
    stats: Stat[];
    background?: 'dark' | 'gradient';
}

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
    const [displayValue, setDisplayValue] = useState('0');
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
                    const duration = 2000;
                    const steps = 60;
                    const increment = numericValue / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            setDisplayValue(value);
                            clearInterval(timer);
                        } else {
                            if (value.includes('.')) {
                                setDisplayValue(current.toFixed(1));
                            } else {
                                setDisplayValue(Math.floor(current).toString());
                            }
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
}

export default function StatsSection({ stats, background = 'dark' }: StatsSectionProps) {
    const bgClass = background === 'gradient'
        ? 'bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]'
        : 'bg-[#0f0f0f]';

    return (
        <section className={`py-16 ${bgClass} text-white overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DC2626] mb-2">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
