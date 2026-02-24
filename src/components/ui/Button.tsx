'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer active:scale-95';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] rounded-md',
    secondary: 'bg-surface text-white border border-border hover:bg-surface-hover hover:border-primary/50 rounded-md',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white rounded-md',
    ghost: 'text-muted hover:text-white hover:bg-white/5 rounded-md',
    white: 'bg-white text-black hover:bg-white/90 shadow-lg rounded-md',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-10 py-3.5 text-lg font-semibold',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

