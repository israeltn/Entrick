import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Terminal from '@/components/ui/Terminal';
import EntrickStudio from '@/components/sections/EntrickStudio';
import ServicesOverview from '@/components/sections/ServicesOverview';
import HeroBackground from '@/components/ui/HeroBackground';
import HeroSlider from '@/components/sections/HeroSlider';

export const metadata: Metadata = {
  title: "Home | Entrick Technologies",
  description: "Entrick Technologies is a modern software company delivering Secure AI, Research, LLM/SLM fine-tuning for domain-specific privacy environments, data curation for model training, Cybersecurity, and Sovereign AI.",
  openGraph: {
    title: "Entrick Technologies | Secure AI & Modern Software Company",
    description: "Entrick Technologies is a modern software company delivering Secure AI, Research, LLM/SLM fine-tuning for domain-specific privacy environments, data curation for model training, Cybersecurity, and Sovereign AI.",
    url: "https://entricksystems.com",
    images: ["/og-image.jpg"],
  },
};

const stats = [
  { value: '50', suffix: '+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Security Monitoring' },
  { value: '3', suffix: 'x', label: 'Platform Jump' },
  { value: '99', suffix: '%', label: 'Client Satisfaction' },
];

const terminalLines = [
  "import Entrick from '@entrick/core';",
  "",
  "const agent = new Entrick.Agent({",
  "    name: 'SolutionEngineer',",
  "    capabilities: ['AI', 'Automation']",
  "});",
  "",
  "agent.deploy()"
];


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        <HeroBackground />
        <HeroSlider />
      </section>


      {/* Services Overview */}
      <ServicesOverview />

      <EntrickStudio />

      {/* Solution Deep Dive / Why Choose Us */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Redefining Efficiency
              </p>
              <h2 className="text-lg md:text-xl font-bold text-white mb-6 leading-tight">
                We don&apos;t just deliver technology solutions, we transform workflows and business outcomes.
              </h2>
              <p className="text-muted text-base mb-10 leading-relaxed">
                Ensuring sustainable growth and competitive advantage through innovative technology partnerships and expert implementation.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'AI Court Transcriber', desc: 'Secure, high-precision legal transcription powered by domain-specific SLMs.' },
                  { title: 'Security Compliance AI', desc: 'Automated governance and proactive audit-ready compliance for enterprises.' },
                  { title: 'Health Intelligence AI', desc: 'Advanced medical data synthesis and intelligent Lab result analysis and reporting.' },
                  { title: 'Sovereign SLM', desc: 'Private, high-performance Small Language Models providing total data sovereignty.' }
                ].map((item, index) => (
                  <div key={index} className="group flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Terminal lines={terminalLines} />

              {/* Decorative blocks */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl -z-20 rounded-full" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-3xl -z-20 rounded-full" />
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}

      {/* <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-20">
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
              See how organizations worldwide are transforming their operations with our intelligent solutions.
            </h2>
          </div>

          <div className="relative group">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Their custom software development completely revolutionized our workflow. The transition was seamless and results were immediate.",
                  name: "Sarah Chen",
                  role: "CTO, TechFlow Solutions",
                  avatar: "SC"
                },
                {
                  quote: "Agentic AI has allowed us to automate tasks we thought required human oversight. It's been a game changer for our efficiency.",
                  name: "James Rodriguez",
                  role: "Director of Ops, CloudScale Inc",
                  avatar: "JR"
                },
                {
                  quote: "Security wasn't just an afterthought; it was built into the core. We feel more protected than ever.",
                  name: "Emily Watson",
                  role: "Head of Infrastructure, FinGuard",
                  avatar: "EW"
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass-card p-10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 border-white/5 hover:border-primary/30">
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-8 leading-relaxed text-lg shrink-0">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold border border-primary/30">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-muted text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
      {/* <button className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-black/50 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hidden lg:flex">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-black/50 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hidden lg:flex">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section> */}


      {/* Stats Callout Section */}
      <section className="py-12 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-24 max-w-5xl mx-auto leading-tight italic tracking-tight">
            Delivering Innovative, Secure, and Efficient Solutions Through AI, Automation, and Team <span className="text-primary tracking-normal not-italic underline decoration-2 underline-offset-8">Collaboration</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-border pt-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-md md:text-lg font-black text-white mb-4 tracking-tighter hover:text-primary transition-colors duration-300">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-muted text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle red glow in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.03)_0%,transparent_70%)] -z-10" />
      </section>


      {/* Final CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Dotted background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
            Ready to Transform Your <span className="text-primary italic">Organization?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Join the forward-thinking companies already leveraging our intelligent IT solutions to drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="px-12">
              Start your journey
            </Button>
            <Button href="/agents" variant="secondary" size="lg" className="px-12 !bg-gray-100 !text-black !border-transparent hover:!bg-gray-200">
              Explore Automation
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
