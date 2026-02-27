import type { Metadata } from 'next';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore our comprehensive IT solutions including custom software development, cybersecurity, agentic AI, and user-centered UI/UX design.',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Services | Entrick Technologies',
        description: 'Explore our comprehensive IT solutions including custom software, AI, and cybersecurity.',
        url: 'https://entrick.com/services',
    },
};

const services = [
    {
        id: 'ai-agents',
        title: 'Domain AI Agents',
        description: 'We build bespoke AI agents tailored to your unique business domain and logic. Our agents are designed to automate complex workflows and provide intelligent decision support.',
        features: [
            'Autonomous Workflow Automation',
            'Context-Aware Decision Support',
            'Seamless System Integration',
            'Custom Domain Logic Training',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        imagePosition: 'right',
    },
    {
        id: 'pre-train',
        title: 'Pre-train Models',
        description: 'Expert fine-tuning and pre-training of models for industry-specific precision. We optimize large language models for your specific datasets and performance requirements.',
        features: [
            'Industry-Specific Fine-Tuning',
            'Performance Optimization',
            'Dataset Curation & Cleaning',
            'Quantized Model Deployment',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg',
        imagePosition: 'left',
    },
    {
        id: 'ai-research',
        title: 'AI Research',
        description: 'Pioneering next-gen AI architectures to keep your organization ahead of the curve. Our research-driven approach ensures you leverage the latest breakthroughs in machine intelligence.',
        features: [
            'Custom Architecture Design',
            'Algorithm R&D',
            'Proof of Concept Development',
            'Technology Roadmap Strategic Planning',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg',
        imagePosition: 'right',
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Enterprise-grade digital defense and proactive threat mitigation strategies. We safeguard your critical assets with cutting-edge security technology and expert monitoring.',
        features: [
            'Proactive Threat Hunting',
            'Zero Trust Architecture',
            'Compliance & Risk Management',
            'Incident Response Planning',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
        imagePosition: 'left',
    },
    {
        id: 'software',
        title: 'Custom Software',
        description: 'Bespoke software development optimized for performance, security, and scale. We build modern applications that drive tangible business value.',
        features: [
            'Full-Stack Web Applications',
            'Cloud-Native Microservices',
            'Enterprise API Solutions',
            'Legacy System Modernization',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
        imagePosition: 'right',
    },
    {
        id: 'infrastructures',
        title: 'Infrastructures',
        description: 'Managed high-performance environments built for reliability and global scale. We design and manage robust networks and cloud infrastructures that power modern enterprises.',
        features: [
            'Multi-Cloud Strategy Management',
            'High-Availability Architecture',
            'DevOps & CI/CD Automation',
            'Network Performance Optimization',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0a3 3 0 00-3 3v.75m13.5-3a3 3 0 013 3v.75m-16.5 0h16.5" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
        imagePosition: 'left',
    },
    {
        id: 'training',
        title: 'IT Training',
        description: 'Empowering your workforce through expert-led technology and AI mastery programs. We bridge the skill gap and prepare your team for the future of intelligent IT.',
        features: [
            'Corporate AI Workshops',
            'Advanced Software Engineering Training',
            'Cybersecurity Best Practices',
            'Cloud Infrastructure Mastery',
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75c0-1.333-.756-2.5-1.875-3.126m9.375 3.126c0 1.333.756 2.5 1.875 3.126m-1.875-3.126a.75.75 0 110-1.5.75.75 0 010 1.5zm0 0V11.325a55.347 55.347 0 00-5.25 2.883" />
            </svg>
        ),
        image: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg',
        imagePosition: 'right',
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
                                <div className="relative group">
                                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
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
