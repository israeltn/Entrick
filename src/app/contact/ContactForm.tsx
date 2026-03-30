'use client';

import { useRef, useState, useEffect } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

export default function ContactForm() {
    const [state, setState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const loadedAtRef = useRef<number>(Date.now());

    // Reset on mount so the timestamp is accurate per-render
    useEffect(() => {
        loadedAtRef.current = Date.now();
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (state === 'submitting' || state === 'success') return;

        setState('submitting');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
            company: (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
            // Honeypot — should always be empty for real users
            website: (form.elements.namedItem('website') as HTMLInputElement).value,
            // Timing token
            form_loaded_at: loadedAtRef.current,
        };

        try {
            const res = await fetch(`${API_URL}/contact/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.status === 201) {
                setState('success');
                form.reset();
                return;
            }

            if (res.status === 429) {
                setErrorMsg('You have reached the submission limit. Please try again later.');
                setState('error');
                return;
            }

            const json = await res.json().catch(() => ({}));

            // Flatten DRF validation errors into a readable string
            const messages: string[] = [];
            for (const [field, errors] of Object.entries(json)) {
                if (field === 'non_field_errors' || field === 'detail') {
                    messages.push(...(errors as string[]));
                } else {
                    const fieldErrors = Array.isArray(errors) ? errors : [errors];
                    messages.push(`${field}: ${fieldErrors.join(', ')}`);
                }
            }
            setErrorMsg(messages.join(' ') || 'Something went wrong. Please try again.');
            setState('error');
        } catch {
            setErrorMsg('Unable to reach the server. Please check your connection and try again.');
            setState('error');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        maxLength={150}
                        disabled={state === 'submitting' || state === 'success'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Enter full name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={state === 'submitting' || state === 'success'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Enter email address"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    maxLength={150}
                    disabled={state === 'submitting' || state === 'success'}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Your company name"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={5000}
                    disabled={state === 'submitting' || state === 'success'}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Tell us about your project and how we can help"
                />
            </div>

            {/* Honeypot — hidden from real users via CSS, bots fill it in */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <label htmlFor="website">Website (leave blank)</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {state === 'error' && (
                <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {errorMsg}
                </p>
            )}

            {state === 'success' && (
                <p role="status" className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                    Thank you! Your message has been received. We&apos;ll be in touch within 24 hours.
                </p>
            )}

            <button
                type="submit"
                disabled={state === 'submitting' || state === 'success'}
                className="w-full bg-[#DC2626] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {state === 'submitting' ? 'Sending…' : state === 'success' ? 'Message sent!' : 'Start your journey'}
            </button>
        </form>
    );
}
