import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Pitch Deck | Entrick Information Systems',
    description: 'Explore the vision, product, and enterprise solutions of Entrick Information Systems through our interactive pitch deck.',
};

const slideClass = "min-h-screen w-full flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden";
const contentClass = "max-w-6xl mx-auto w-full relative z-10";

export default function PitchDeckPage() {
    return (
        <div className="bg-black text-white selection:bg-primary/30 scroll-smooth">

            {/* Title / Hook Slide */}
            <section className={`${slideClass} bg-black`} id="slide-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.1)_0%,transparent_50%)] -z-10" />
                <div className={contentClass}>

                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 animate-fade-in">PITCH DECK</p>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight max-w-4xl text-white">
                        Redefining Efficiency Through <span className="text-primary italic">Secure AI.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted font-medium max-w-2xl leading-relaxed mb-16">
                        We build domain-specific, private, and secure artificial intelligence infrastructure for enterprise.
                    </p>
                    <div className="flex items-center gap-6">
                        <Button href="#slide-2" variant="primary" size="lg">Begin Presentation</Button>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className={`${slideClass} bg-white`} id="slide-2">
                <div className={contentClass}>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6">01. The Problem</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">Generic AI Is Failing The Enterprise.</h2>
                            <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
                                Enterprises in highly regulated sectors—like legal, healthcare, and government—are eager to adopt AI for efficiency but face significant roadblocks:
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Data Sovereignty & Privacy", desc: "Sending proprietary data to third-party public models exposes organizations to massive compliance and security risks (GDPR, HIPAA)." },
                                    { title: "Low Domain Accuracy", desc: "Foundational models hallucinate and fail at highly specific, technical, or legal jargon." },
                                    { title: "Infrastructure Costs", desc: "Running massive LLMs internally is computationally expensive and resource-prohibitive for most teams." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">✕</div>
                                        <div>
                                            <h4 className="text-primary font-bold mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-full min-h-[400px] border border-red-200 rounded-3xl bg-gradient-to-r from-primary/10 to-gray-300 p-8 flex flex-col justify-center gap-6 overflow-hidden">
                            <div className="absolute w-64 h-64 bg-primary/5 blur-3xl rounded-full top-0 right-0 -translate-y-1/2 translate-x-1/2" />
                            <div className="bg-white/60 backdrop-blur-md p-4 border border-red-200 rounded-xl shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Security Alert</span>
                                </div>
                                <p className="text-sm text-gray-800 font-mono">Attempting to transmit protected patient health records to generic cloud LLM...</p>
                                <p className="text-xs text-red-600 font-mono mt-2 font-bold">[ERROR: COMPLIANCE VIOLATION PREVENTED]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className={`${slideClass} bg-black`} id="slide-3">
                <div className={contentClass}>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6">02. The Solution</p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 max-w-3xl">Private, High-Performance Small Language Models (SLMs).</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                title: "Sovereign AI Infrastructure",
                                text: "We deploy isolated, self-hosted AI environments. Your data never leaves your secure perimeter, guaranteeing full regulatory compliance."
                            },
                            {
                                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                                title: "Domain Specific Fine-Tuning",
                                text: "We curate custom datasets and fine-tune highly efficient SLMs that outperform massive generic models on your specific company tasks."
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "Resource Constrained Deploy",
                                text: "Our optimized models run lightning-fast on minimal localized hardware, drastically reducing cloud compute and API dependency costs."
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-10 hover:border-primary/50 transition-colors group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product / Entrick Studio */}
            <section className={`${slideClass} bg-white`} id="slide-4">
                <div className={contentClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative w-full aspect-square max-w-md mx-auto bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                                {/* Rings */}
                                <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-12 rounded-full border border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />

                                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                                    <div className="w-32 h-32 bg-primary flex items-center justify-center rounded-3xl rotate-12 hover:rotate-0 transition-transform shadow-[0_0_50px_rgba(242,32,32,0.3)]">
                                        <span className="text-white font-black text-6xl">E</span>
                                    </div>
                                    <div className="mt-8 font-mono text-sm tracking-widest text-primary uppercase">Entrick Studio</div>
                                </div>

                                {/* Data Nodes */}
                                <div className="absolute top-0 right-1/4 w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-xs font-mono text-gray-800">.pdf</div>
                                <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-xs font-mono text-gray-800">.csv</div>
                                <div className="absolute bottom-0 right-1/3 w-12 h-12 bg-primary/10 border border-primary text-primary rounded-lg flex items-center justify-center text-xs font-bold">SLM</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6">03. The Product Pipeline</p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Entrick Studio</h2>
                            <p className="text-gray-800 font-medium text-lg leading-relaxed mb-10">
                                This proprietary pipeline is how we turn your raw organizational data into an intelligent edge. We handle the complex lifecycle from unstructured data to audit-ready sovereign AI.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { step: "1", title: "Agentic Data Curation", desc: "Automated extraction and structuring of highly technical domain data." },
                                    { step: "2", title: "Instruction Fine-Tuning", desc: "Aligning models to your explicit corporate guardrails and tone." },
                                    { step: "3", title: "Secure Deployment", desc: "Implementation within your VPC or on-premise hardware." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full border border-primary/50 flex flex-shrink-0 items-center justify-center text-primary font-bold font-mono text-sm leading-none bg-primary/10">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600 font-medium text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traction & Market */}
            <section className={`${slideClass} bg-black`} id="slide-5">
                <div className={contentClass}>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 text-center">04. Traction & Validation</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Proven Execution in Regulated Markets.</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 divide-x divide-border">
                        {[
                            { value: '50+', label: 'Enterprise Projects Delivered' },
                            { value: '24/7', label: 'Security Core Monitoring' },
                            { value: '3x', label: 'Platform Efficiency Jump' },
                            { value: '99%', label: 'Long-Term Client Retention' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center px-4">
                                <div className="text-4xl md:text-6xl font-black text-white mb-4 hover:text-primary transition-colors">{stat.value}</div>
                                <div className="text-muted text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left bg-surface border border-border rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">The Enterprise AI Market</h3>
                            <p className="text-muted leading-relaxed">The immediate demand for compliance-driven, sector-specific Artificial Intelligence is exploding. Healthcare, Government, and Legal sectors cannot utilize generic API models, representing a massive untapped pipeline for sovereign AI deployment.</p>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Our Business Model</h3>
                            <p className="text-muted leading-relaxed">We operate on a premium B2B engagement model. Revenue is driven through upfront custom SLM engineering fees, followed by recurring SaaS contracts for model maintenance, continuous fine-tuning, and infrastructure monitoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className={`${slideClass} bg-white`} id="slide-6">
                <div className={contentClass}>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 text-center">05. The Core Team</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary">Built by Specialists.</h2>
                    <p className="text-center text-gray-800 font-medium max-w-2xl mx-auto mb-16 text-lg">Our leadership blends deep expertise in software engineering, machine learning pipelines, and strict cybersecurity protocols.</p>

                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: 'Nguuma I. Tyokaha', role: 'Founder' },
                            { name: 'Omoyokan Adenomor', role: 'Chief Technology Officer' },
                            { name: 'Chisom Chima', role: 'Principal Software Engineer' }
                        ].map((member, i) => (
                            <div key={i} className="text-center">
                                <div className="w-32 h-32 rounded-3xl mx-auto mb-6 bg-gray-50 border border-gray-200 shadow-sm flex items-center justify-center text-4xl font-black text-primary/50 group hover:border-primary/50 transition-colors">
                                    {member.name.charAt(0)}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                                <p className="text-primary text-sm uppercase tracking-wider font-bold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Ask */}
            <section className={`${slideClass} bg-black`} id="slide-7">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
                <div className={`${contentClass} text-center`}>
                    <div className="w-20 h-20 bg-primary flex items-center justify-center rounded-2xl mx-auto mb-12 shadow-[0_0_40px_rgba(242,32,32,0.4)]">
                        <span className="text-white font-black text-4xl">E</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8">Join The Future of <br /><span className="italic text-primary">Sovereign Edge AI.</span></h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto mb-16">
                        We are actively seeking strategic partnerships and early-adopter enterprise clients to scale our infrastructure deployments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button href="mailto:contact@entricksystems.com" variant="primary" size="lg" className="px-12 py-4">
                            Contact Founding Team
                        </Button>
                        <Button href="/" variant="secondary" size="lg" className="px-12 py-4">
                            Return to Website
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
