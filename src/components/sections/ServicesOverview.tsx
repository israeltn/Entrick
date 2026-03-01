'use client';

import React from 'react';

const services = [
    { title: 'Domain AI Agents', description: 'Building bespoke AI agents tailored to your unique business domain and logic.', dist: 42, curve: 0.4 },
    { title: 'Pre-train Models', description: 'Expert fine-tuning and pre-training of models for industry-specific precision.', dist: 40, curve: -0.3 },
    { title: 'AI Research', description: 'Pioneering next-gen AI architectures to keep your organization ahead of the curve.', dist: 44, curve: 0.5 },
    { title: 'Cybersecurity', description: 'Enterprise-grade digital defense and proactive threat mitigation strategies.', dist: 41, curve: -0.4 },
    { title: 'Custom Software', description: 'Bespoke software development optimized for performance, security, and scale.', dist: 43, curve: 0.3 },
    { title: 'Infrastructures', description: 'Managed high-performance environments built for reliability and global scale.', dist: 39, curve: -0.5 },
    { title: 'IT Training', description: 'Empowering your workforce through expert-led technology and AI mastery programs.', dist: 45, curve: 0.4 }
];

const ConnectionLines = () => {
    return (
        <div className="absolute inset-0 pointer-events-none select-none overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <defs>
                    <radialGradient id="node-gradient">
                        <stop offset="0%" stopColor="#DC2626" stopOpacity="1" />
                        <stop offset="100%" stopColor="#DC2626" stopOpacity="0.2" />
                    </radialGradient>
                </defs>

                {services.map((service, i) => {
                    const angle = (i * 360 / services.length) - 90; // Start from top
                    const radians = (angle * Math.PI) / 180;
                    const r = service.dist;
                    const endX = 50 + r * Math.cos(radians);
                    const endY = 50 + r * Math.sin(radians);

                    // Pronounced control point for deeper curves
                    const cpAngle = radians + service.curve;
                    const cpR = r * 0.6;
                    const cpX = 50 + cpR * Math.cos(cpAngle);
                    const cpY = 50 + cpR * Math.sin(cpAngle);
                    const path = `M 50 50 Q ${cpX} ${cpY}, ${endX} ${endY}`;

                    return (
                        <g key={`branch-${i}`} className="group/branch">
                            <path
                                d={path}
                                fill="none"
                                stroke="#DC2626"
                                strokeWidth="0.5"
                                className="opacity-15 group-hover/section:opacity-50 transition-opacity duration-700"
                                strokeDasharray="1 2"
                            />
                            {/* Animated tiny signal pulse */}
                            <circle r="0.6" fill="#DC2626" className="animate-[pulse-flow_4s_linear_infinite]" style={{ animationDelay: `${i * 0.5}s` }}>
                                <animateMotion dur="4s" repeatCount="indefinite" path={path} />
                            </circle>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

const ServiceNode = ({ service, index, total }: { service: any; index: number; total: number }) => {
    const angle = (index * 360 / total) - 90;

    // Position logic for radial
    const radians = (angle * Math.PI) / 180;
    const r = service.dist;
    const x = 50 + r * Math.cos(radians);
    const y = 50 + r * Math.sin(radians);

    return (
        <div
            className="absolute flex items-center justify-center transition-all duration-500 hover:scale-105 group/node z-30"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%)`,
            }}
        >
            <div className={`py-1.5 px-3 rounded-full bg-slate-50 border border-slate-200 group-hover/node:bg-slate-100 group-hover/node:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md`}>
                <h3 className="text-[8px] xs:text-[9px] lg:text-[10px] font-black text-black tracking-[0.1em] uppercase whitespace-nowrap text-center">
                    {service.title}
                </h3>
            </div>

            {/* Tooltip Description on Hover */}
            <div className={`absolute top-full mt-2 w-40 sm:w-48 opacity-0 pointer-events-none group-hover/node:opacity-100 transition-opacity duration-300 left-1/2 -translate-x-1/2 z-50`}>
                <div className="bg-slate-900 border border-slate-800 p-2.5 sm:p-3 rounded-lg text-center shadow-xl">
                    <p className="text-[11px] sm:text-xs text-white leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
};


const ServicesOverview = () => {
    return (
        <section className="py-16 md:py-32 bg-white relative overflow-hidden group/section min-h-[500px] md:min-h-[750px]">
            <div className="absolute inset-0 bg-slate-50/50 -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04)_0%,transparent_60%)] -z-10" />

            <div className="max-w-7xl mx-auto px-4 h-full relative z-10 overflow-visible">
                <div className="text-center mb-12 md:mb-24">
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm md:text-md mb-4">
                        Core Capabilities
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight ">
                        The Intelligence <span className="text-primary not-italic">Engine</span>
                    </h2>
                </div>

                {/* Radial View */}
                <div className="relative mx-auto aspect-square w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] mt-8 hover:z-50">
                    <ConnectionLines />

                    {services.map((service, idx) => (
                        <ServiceNode key={idx} service={service} index={idx} total={services.length} />
                    ))}

                    {/* Center Node (Core) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 relative group">
                            <div className="relative w-full h-full bg-white border border-primary/20 rounded-xl sm:rounded-2xl lg:rounded-3xl flex flex-col items-center justify-center text-primary group-hover:border-primary/40 transition-all duration-700 overflow-hidden shadow-xl">
                                <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <div className="text-[9px] sm:text-[11px] lg:text-[13px] font-black tracking-[0.2em] uppercase opacity-80">Entrick</div>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full animate-[scan_5s_linear_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes pulse-flow {
                    0% { opacity: 0; transform: scale(0.5); }
                    20% { opacity: 1; transform: scale(1); }
                    80% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.5); }
                }
            `}</style>
        </section>
    );
};


export default ServicesOverview;
