import type { Metadata } from 'next';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Entrick Information Systems. Ready to transform your organization with intelligent solutions? We are here to help.',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact | Entrick Information Systems',
        description: 'Get in touch with Entrick Information Systems for intelligent IT solutions.',
        url: 'https://entrick.com/contact',
    },
};

export default function ContactPage() {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gray-500 uppercase tracking-wider text-sm mb-4">LET&apos;S BUILD THE FUTURE TOGETHER</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">
                            Ready to transform your organization with intelligent solutions? We&apos;re here to help.
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-8">Get in Touch</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input type="text" id="name" name="name" required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                                            placeholder="Enter full name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input type="email" id="email" name="email" required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                                            placeholder="Enter email address" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                    <input type="text" id="company" name="company"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                                        placeholder="Your company name" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea id="message" name="message" rows={5} required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell us about your project and how we can help" />
                                </div>
                                <button type="submit"
                                    className="w-full bg-[#DC2626] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors duration-300">
                                    Start your journey
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-semibold text-[#0f0f0f] mb-2">Quick Response</h3>
                                    <p className="text-gray-600 text-sm">We typically respond to all inquiries within 24 hours.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#DC2626]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600">info@entricksystems.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#DC2626]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600">+44 07442939072</span>
                                </div>

                                {/* <div className="pt-6 border-t border-gray-200">
                                    <h3 className="font-semibold text-[#0f0f0f] mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        {['LinkedIn', 'X', 'Instagram'].map((social) => (
                                            <a key={social} href="#" className="w-10 h-10 bg-[#DC2626]/10 rounded-lg flex items-center justify-center text-[#DC2626] hover:bg-[#DC2626] hover:text-white transition-colors">
                                                <span className="text-xs font-bold">{social[0]}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div> */}

                                <div className="pt-6 border-t border-gray-200">
                                    <h3 className="font-semibold text-[#0f0f0f] mb-4">Newsletter</h3>
                                    <p className="text-gray-600 text-sm mb-4">Stay updated with the latest in AI and technology trends.</p>
                                    <div className="flex gap-2">
                                        <input type="email" placeholder="Enter your email"
                                            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none" />
                                        <button className="px-6 py-3 bg-[#DC2626] text-white rounded-lg hover:bg-[#B91C1C] transition-colors font-medium">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
