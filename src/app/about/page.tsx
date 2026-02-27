import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Entrick Technologies - a visionary IT firm driven by a mission to transform how organizations operate through intelligent solutions.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About | Entrick Technologies',
        description: 'Learn about Entrick Technologies mission to transform organizations through intelligent IT solutions.',
        url: 'https://entrick.com/about',
    },
};

const values = [
    {
        title: 'Innovation',
        description: 'We constantly push the boundaries of AI technology to provide cutting-edge automation solutions that evolve with industry needs.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Simplicity',
        description: 'Our platform is designed for everyone—whether you\'re a business owner, an operations manager, or a developer, Entrick makes AI automation intuitive and accessible.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
        ),
    },
    {
        title: 'Customer Success',
        description: 'We are dedicated to helping our users succeed. From onboarding to long-term support, we provide the tools and resources businesses need to maximize the benefits of AI automation.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Trust & Security',
        description: 'We prioritize data security and transparency, ensuring that businesses can rely on Entrick for safe and efficient automation.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

const team = [
    { name: 'Nguuma Tyokaha', role: 'Founder & CEO', image: '' },
    { name: 'Chisom Chima', role: 'Senior Software Engineer', image: '' },
    { name: 'Omoyokan Moses Adenomor', role: 'AI/ML Engineer', image: '' },
    // { name: 'Albert Flores', role: 'UX Designer', image: '' },
    // { name: 'Robert Fox', role: 'DevOps Engineer', image: '' },
    // { name: 'Kathryn Murphy', role: 'Founder & CEO', image: '' },
    // { name: 'Kristin Watson', role: 'Product Manager', image: '' },
    // { name: 'Jenny Wilson', role: 'Data Scientist', image: '' },
];

const successStories = [
    {
        category: 'AI Agent Innovation',
        description: 'A global logistics firm achieved a 65% reduction in operational bottlenecks by deploying Entrick\'s Domain AI Agents for automated supply chain orchestration.',
        metric: '65% Efficiency',
        color: 'bg-red-50',
    },
    {
        category: 'Cybersecurity Mastery',
        description: 'A financial institution successfully mitigated 99.9% of advanced persistent threats following the implementation of our secure infrastructure management.',
        metric: '99.9% Secure',
        color: 'bg-gray-100',
    },
    {
        category: 'Infrastructure Excellence',
        description: 'A rapidly scaling SaaS platform achieved a 3x increase in processing capacity while reducing latency through our intelligent infrastructure optimization.',
        metric: '3x Capacity Jump',
        color: 'bg-red-50',
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero / Values Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="p-10 bg-[#f8f8f8] rounded-3xl transition-all duration-300 hover:shadow-xl group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:scale-110">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#fcfcfc] rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary mb-8">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                </div>
                                <h2 className="text-4xl font-black text-black mb-8 tracking-tight">Our Mission</h2>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                    At Entrick, our mission is to democratize AI-powered automation, enabling businesses of all sizes to streamline operations, boost productivity, and scale efficiently. We believe that AI should be accessible, simple, and transformative—helping companies focus on growth while AI handles repetitive tasks.
                                </p>
                            </div>
                            <div className="relative aspect-video lg:aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/image/LLM.jpg"
                                    alt="Entrick Team Collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-video lg:aspect-square bg-[#f8f8f8] rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1">
                            <img
                                src="/image/dev.jpg"
                                alt="Entrick Visionary Technology"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary mb-8 border border-gray-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h2 className="text-4xl font-black text-black mb-8 tracking-tight">Our Vision</h2>
                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                We envision a world where AI-driven automation becomes an essential part of every business, enhancing efficiency without the need for complex coding or technical expertise. By making AI more intuitive and user-friendly, we aim to empower businesses to innovate, adapt, and thrive in an ever-evolving digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-xl md:text-2xl font-black text-black tracking-tight mb-4">Meet Our Dedicated Team</h2>
                    <p className="text-gray-500 text-base max-w-2xl mx-auto mb-20 font-medium">
                        Our diverse team consists of AI specialists, product designers, and customer success experts, all dedicated to ensuring Entrick remains at the forefront of AI automation.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
                        {team.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-full aspect-[4/5] bg-gray-100 rounded-3xl mb-6 overflow-hidden relative group shadow-lg">
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-md font-bold text-black mb-1">{member.name}</h4>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Entrick Success Stories</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-20 font-medium font-base">
                        Join thousands of businesses leveraging Entrick\'s AI-powered automation to revolutionize their workflows.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-[#fcfcfc] border border-gray-100 p-10 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-8">
                                    <h4 className="text-lg font-bold text-black">{story.category}</h4>
                                    <div className="p-1 px-2 border border-gray-100 rounded-md">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-12 font-medium">
                                    {story.description}
                                </p>
                                <div className={`${story.color} p-8 rounded-2xl text-center`}>
                                    <span className="text-3xl font-black text-black tracking-tighter">{story.metric}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#4e79f6] to-[#af68f3] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">Join us on our journey</h2>
                            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                                As we continue to innovate, we invite businesses of all sizes to experience the power of AI automation. Whether you\'re looking to optimize customer support, enhance data processing, or streamline workflows, Entrick is here to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button href="/contact" variant="primary" size="lg" className="!bg-white !text-[#4e79f6] !border-none px-10 shadow-lg hover:!bg-gray-50">
                                    Try Entrick for Free
                                </Button>
                                <Button href="/demo" variant="secondary" size="lg" className="!bg-white/20 !text-white !border-white/30 backdrop-blur-sm px-10 hover:!bg-white/30">
                                    Request a Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
