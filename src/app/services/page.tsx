import type { Metadata } from 'next';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore our comprehensive IT solutions including custom software development, cybersecurity, agentic AI, and user-centered UI/UX design.',
};

const services = [
    {
        id: 'software',
        title: 'Custom Software Development',
        description: 'We build powerful, modern applications that solve your unique business challenges. From web platforms to enterprise solutions, our software is designed for scale, security, and seamless user experience.',
        features: [
            'Web & Mobile Applications',
            'Enterprise Software Solutions',
            'API Development & Integration',
            'Cloud-Native Architecture',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        imagePosition: 'right',
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Solutions',
        description: 'Protect your digital assets with our comprehensive security services. We implement industry-leading solutions to safeguard your data, systems, and reputation from evolving cyber threats.',
        features: [
            'Security Audits & Assessments',
            'Penetration Testing',
            'Threat Detection & Response',
            'Compliance Management',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        imagePosition: 'left',
    },
    {
        id: 'ai',
        title: 'Domain-Specific SLM Solutions',
        description: 'Leverage Small Language Models (SLMs) optimized for your specific industry. We specialize in precision fine-tuning and deployment within secure, private environments to ensure maximum performance and data sovereignty.',
        features: [
            'Precision SLM Fine-Tuning',
            'Private Environment Deployment',
            'Domain-Specific AI Optimization',
            'Secure Agentic Workflows',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        imagePosition: 'right',
    },
    {
        id: 'design',
        title: 'User-Centered UI/UX Design',
        description: 'Create exceptional digital experiences that delight users and drive business results. Our design process puts users first, combining aesthetics with intuitive functionality.',
        features: [
            'User Research & Testing',
            'Interface Design',
            'Design Systems',
            'Prototyping & Iteration',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        imagePosition: 'left',
    },
];

const methodology = [
    {
        step: '01',
        title: 'Discovery',
        description: 'We dive deep into understanding your business, challenges, and goals.',
    },
    {
        step: '02',
        title: 'Strategy',
        description: 'We craft a tailored roadmap aligned with your objectives.',
    },
    {
        step: '03',
        title: 'Implementation',
        description: 'Our expert team brings the solution to life with precision.',
    },
    {
        step: '04',
        title: 'Support',
        description: 'Continuous support and optimization for lasting success.',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
                            What We Do
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">
                            Domain-Specific <span className="gradient-text">Private AI</span> for SME and Enterprise Scaling
                        </h1>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${service.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                            }`}>
                            <div className={service.imagePosition === 'left' ? 'lg:order-2' : ''}>
                                <div className="w-16 h-16 bg-[#DC2626]/10 rounded-xl flex items-center justify-center text-[#DC2626] mb-6">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={service.imagePosition === 'left' ? 'lg:order-1' : ''}>
                                <div className="relative">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className={`absolute -bottom-4 ${service.imagePosition === 'left' ? '-right-4' : '-left-4'} w-24 h-24 bg-[#DC2626] rounded-xl -z-10`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Methodology Section */}
            <section className="py-20 bg-[#0f0f0f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            We follow a proven methodology to ensure successful project delivery
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methodology.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-white">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </>
    );
}
