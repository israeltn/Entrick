import type { Metadata } from 'next';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Entrick Technologies - a visionary IT firm driven by a mission to transform how organizations operate through intelligent solutions.',
};

const values = [
    {
        title: 'Innovation',
        description: 'We constantly push the boundaries of what\'s possible, embracing new technologies and methodologies.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Integrity',
        description: 'We build trust through transparency, honesty, and a commitment to delivering on our promises.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: 'Collaboration',
        description: 'We excel at partnering, integrating seamlessly with your team to achieve shared goals.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        title: 'Security',
        description: 'Security is embedded in everything we do, at every layer, protecting your digital assets.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        title: 'Impact',
        description: 'We measure success by the real, measurable impact we create for our clients and their customers.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
                            Who We Are
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">
                            A visionary IT firm driven by a mission to{' '}
                            <span className="gradient-text">transform</span> how organizations operate
                        </h1>
                    </div>
                </div>
            </section>

            {/* Company Description */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
                                Our Mission
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Entrick Technologies is a visionary IT firm driven by a mission to transform the way organizations operate. We specialize in modern software development, cybersecurity, process automation, cutting-edge Agentic AI, and advanced research.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our team believes in building not just tools, but ecosystems that enable intelligent collaboration and secure growth. We don&apos;t just solve today&apos;s problems – we anticipate tomorrow&apos;s challenges and prepare you for them.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center text-[#DC2626] font-semibold hover:gap-3 transition-all duration-300"
                            >
                                Apply for Entrick
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#DC2626] rounded-xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Highlights */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-4">
                            Meet the brilliant minds behind Entrick&apos;s innovative solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-16 h-16 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0f0f0f] mb-4">Expert Team</h3>
                            <p className="text-gray-600">
                                Our diverse team of engineers, designers, and strategists brings decades of combined experience in building transformative solutions.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-16 h-16 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0f0f0f] mb-4">Collaborative Culture</h3>
                            <p className="text-gray-600">
                                We believe in building partnerships, not just deliverables. Our collaborative approach ensures we truly understand your challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-4">
                            These principles guide every decision we make and every solution we deliver
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                                    }`}
                            >
                                <div className="w-14 h-14 bg-[#DC2626]/10 rounded-xl flex items-center justify-center text-[#DC2626] mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0f0f0f] mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
