'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const features = [
    'Custom fine-tuning',
    'Multimodal ingestion',
    'Sovereign weights',
    'One-click deploy',
];

const useCases = [
    {
        id: 0,
        file: 'Company_policies.pdf',
        model: 'Company_policies Model',
        color: 'bg-blue-500',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 1,
        file: 'Guardrails_definitions.jsonl',
        model: 'Guardrails-definitions Model',
        color: 'bg-green-500',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 2,
        file: 'Customer_support.jsonl',
        model: 'Customer_support Model',
        color: 'bg-purple-500',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L12 22M2 7L22 17M2 17L22 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

const EntrickStudio = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % useCases.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const activeCase = useCases[activeIndex];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
                            Entrick Studio
                        </h2>
                        <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-lg">
                            Turn proprietary data into a competitive advantage. Fine-tune specialized models that understand your business inside out.
                        </p>

                        <div className="mb-12">
                            <Button href="/contact" variant="secondary" size="md" className="!bg-white !border-gray-200 !text-black hover:!bg-gray-50 px-8">
                                Get started
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-primary/5 transition-colors">
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual Section */}
                    <div className="order-1 lg:order-2 relative flex items-center justify-center px-4 sm:px-8 w-full">
                        <div className="relative w-full max-w-2xl min-h-[500px] bg-[#FAFAFA] rounded-3xl border border-gray-100/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] flex items-center justify-center p-8 lg:p-12 overflow-hidden">
                            {/* Background gradient pulses */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />

                            <div className="relative w-full flex flex-col items-center gap-12">
                                {/* Source Files Row */}
                                <div className="flex flex-wrap justify-center gap-4 z-10 transition-all duration-500">
                                    {useCases.map((useCase, idx) => (
                                        <div
                                            key={useCase.id}
                                            className={`bg-white px-4 py-2 rounded-lg border transition-all duration-500 flex items-center gap-2 ${idx === activeIndex
                                                ? 'border-primary shadow-lg scale-110 animate-bounce'
                                                : 'border-gray-200 opacity-40 grayscale scale-95'
                                                }`}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${useCase.color}`} />
                                            <span className="text-xs font-medium text-gray-600">{useCase.file}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Vertical Process Line */}
                                <div className="absolute top-[2.5rem] bottom-[8.5rem] w-px bg-gradient-to-b from-gray-200 via-primary/20 to-gray-200">
                                    <div className="absolute inset-0 w-full h-8 bg-primary/30 blur-sm animate-slide-v" />
                                </div>

                                {/* Central Processor */}
                                <div className="relative z-20">
                                    <div className="w-20 h-20 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                        {/* Brain-like icon with dots */}
                                        <div className="grid grid-cols-3 gap-1 p-1">
                                            {[...Array(9)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i % 3 === activeIndex % 3 ? 'bg-primary' : 'bg-primary/20'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Output Model */}
                                <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-2xl relative z-20 overflow-hidden group transition-all duration-500 transform">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div key={activeIndex} className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 scale-110 animate-in fade-in zoom-in">
                                                {activeCase.icon}
                                            </div>
                                            <div>
                                                <h4 key={activeCase.model} className="text-sm font-bold text-gray-900 transition-all duration-500 animate-in fade-in slide-in-from-left-2">
                                                    {activeCase.model}
                                                </h4>
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Fine-tuned from Mistral 7B</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-500 font-bold">V 1.0</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                                            <span key={activeCase.file} className="text-xs text-gray-500 font-medium animate-in fade-in">Fine-tuning {activeCase.file}...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slide-v {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        .animate-slide-v {
          animation: slide-v 3s infinite linear;
        }
      `}</style>
        </section>
    );
};

export default EntrickStudio;
