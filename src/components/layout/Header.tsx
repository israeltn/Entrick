'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const navigation = [
    { name: '', href: '/' },
    // { name: 'About', href: '/about' },
    // { name: 'Services', href: '/services' },
    // { name: 'Agents', href: '/agents' },
    // { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group transition-transform hover:scale-105">
                        <Image
                            src="/image/entrick logo.png"
                            alt="Entrick Information Systems Logo"
                            width={160}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name || item.href}
                                href={item.href}
                                aria-label={item.name || 'Home'}
                                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${pathname === item.href
                                    ? 'text-white'
                                    : 'text-muted'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button href="/contact" size="sm" variant="primary">
                            Get started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-500 overflow-hidden bg-black/95 backdrop-blur-2xl px-4 ${isOpen ? 'max-h-screen pb-10 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-6 pt-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name || item.href}
                                href={item.href}
                                aria-label={item.name || 'Home'}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl font-medium transition-colors ${pathname === item.href
                                    ? 'text-primary'
                                    : 'text-muted hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button href="/contact" className="mt-4 w-full" size="lg">
                            Get started
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

