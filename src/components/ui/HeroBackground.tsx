'use client';

import React from 'react';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 object-cover w-full h-full opacity-60"
            >
                <source src="/image/herobackground.mp4" type="video/mp4" />
            </video>

            {/* Content Overlays for Readability */}
            <div className="absolute inset-0">
                {/* Base Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Radial Vignette to focus center and darken edges */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />

                {/* Edge softening wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>
        </div>
    );
};

export default HeroBackground;
