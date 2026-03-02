'use client';

import { ReactLenis } from 'lenis/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Find all section elements on the page
        const sections: HTMLElement[] = gsap.utils.toArray('section');

        sections.forEach((section) => {
            // Apply a smooth fade up animation when scrolling into view
            gsap.fromTo(section,
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%", // trigger when the top of the section comes into view by 15%
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

        // Ensure ScrollTrigger calculates correctly with the Lenis smooth scroller
        ScrollTrigger.refresh();
    }, { scope: containerRef });

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <div ref={containerRef} className="w-full">
                {children}
            </div>
        </ReactLenis>
    );
}
