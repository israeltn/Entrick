import type { Metadata } from 'next';
import CTASection from '@/components/sections/CTASection';
import StatsSection from '@/components/sections/StatsSection';

export const metadata: Metadata = {
    title: 'Private AI Agents',
    description: 'Build, fine-tune, and deploy performant SLMs and AI agents in private environments for SMEs and Enterprises.',
    alternates: {
        canonical: '/agents',
    },
    openGraph: {
        title: 'AI Agents | Entrick Information Systems',
        description: 'Build, fine-tune, and deploy performant SLMs and AI agents in private environments.',
        url: 'https://entrick.com/agents',
    },
};

const useCases = [
    {
        title: 'Domain-Driven SLMs',
        features: ['Precision fine-tuning on proprietary data', 'High performance on specific tasks', 'Reduced latency and costs', 'Full model ownership'],
    },
    {
        title: 'Private Agentic Workflows',
        features: ['On-premise execution', 'No data leakage to public models', 'Secure multi-agent orchestration', 'Private environment optimization'],
    },
    {
        title: 'Enterprise Policy Enforcement',
        features: ['Automated regulatory compliance', 'Private data processing', 'Audit-ready AI logs', 'Rule-based agent constraints'],
    },
    {
        title: 'Custom Knowledge Retrieval',
        features: ['Private RAG implementation', 'Proprietary document processing', 'Secure enterprise search', 'Context-aware intelligence'],
    },
];

const stats = [
    { value: '10', suffix: 'x', label: 'Processing Speed' },
    { value: '24/7', label: 'Availability' },
    { value: '99.9', suffix: '%', label: 'Precision' },
];

export default function AgentsPage() {
    return (
        <>
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">Domain-Specific Intelligence</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">
                        Build, Fine-tune, and Deploy <span className="gradient-text">Private AI Agents</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Optimized Small Language Models (SLMs) designed for performant,
                        secure, and cost-effective enterprise scaling in your own infrastructure.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0f0f0f]">Transforming operations across industries</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 card-hover">
                                <h3 className="text-xl font-bold text-[#0f0f0f] mb-6">{useCase.title}</h3>
                                <ul className="space-y-3">
                                    {useCase.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 bg-[#DC2626] rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#0f0f0f] mb-12">Private Deployment Lifecycle</h2>
                    <div className="flex flex-wrap justify-center gap-8 text-sm">
                        {['Build', 'Fine-tune', 'Deploy', 'Optimize'].map((name, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 bg-[#DC2626] rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-primary/20 shadow-lg">
                                    <span className="text-2xl font-bold text-white">0{i + 1}</span>
                                </div>
                                <p className="font-semibold text-[#0f0f0f] uppercase tracking-widest">{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <StatsSection stats={stats} />
            <CTASection />
        </>
    );
}
