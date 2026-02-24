'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
    lines: string[];
}

export default function Terminal({ lines }: TerminalProps) {
    const [displayLines, setDisplayLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [phase, setPhase] = useState<'typing' | 'pausing' | 'success' | 'resetting'>('typing');

    const linesRef = useRef(lines);
    useEffect(() => {
        linesRef.current = lines;
    }, [lines]);

    useEffect(() => {
        let isMounted = true;
        let lineIdx = 0;
        let charIdx = 0;
        let currentFullLines: string[] = [];
        let timer: NodeJS.Timeout;

        const startAnimation = () => {
            const allLines = linesRef.current;
            if (!allLines || allLines.length === 0) return;

            const typeChar = () => {
                if (!isMounted) return;

                const currentLine = allLines[lineIdx];
                if (currentLine === undefined) return;

                if (charIdx < currentLine.length) {
                    charIdx++;
                    setCurrentText(currentLine.slice(0, charIdx));
                    timer = setTimeout(typeChar, 35);
                } else {
                    setPhase('pausing');
                    timer = setTimeout(() => {
                        if (!isMounted) return;

                        currentFullLines.push(currentLine);
                        setDisplayLines([...currentFullLines]);

                        if (lineIdx < allLines.length - 1) {
                            lineIdx++;
                            charIdx = 0;
                            setCurrentLineIndex(lineIdx);
                            setCurrentText('');
                            setPhase('typing');
                            timer = setTimeout(typeChar, 400);
                        } else {
                            setPhase('success');
                            timer = setTimeout(() => {
                                if (!isMounted) return;
                                reset();
                            }, 8000);
                        }
                    }, 600);
                }
            };

            const reset = () => {
                if (!isMounted) return;
                lineIdx = 0;
                charIdx = 0;
                currentFullLines = [];
                setDisplayLines([]);
                setCurrentLineIndex(0);
                setCurrentText('');
                setPhase('typing');
                typeChar();
            };

            typeChar();
        };

        const initialDelay = setTimeout(startAnimation, 1000);

        return () => {
            isMounted = false;
            clearTimeout(initialDelay);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative glass-card border-border bg-black/85 overflow-hidden shadow-2xl animate-fade-in ring-1 ring-white/10">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5 backdrop-blur-md">
                <div className="flex gap-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.3)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.3)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.3)]" />
                </div>
                <div className="text-[10px] text-muted font-mono tracking-[0.2em] uppercase opacity-40">deployment.log</div>
                <div className="w-10" />
            </div>

            {/* Code Content */}
            <div className="p-8 font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto min-h-[380px] scrollbar-hide">
                {displayLines.map((line, idx) => (
                    <div key={idx} className="flex gap-4 mb-1.5 min-h-[1.5rem] items-center">
                        <span className="text-primary/30 text-right w-6 select-none text-xs">{idx + 1}</span>
                        <div className="text-white/90">
                            <HighlightedLine text={line} />
                        </div>
                    </div>
                ))}

                {(phase === 'typing' || phase === 'pausing') && (
                    <div className="flex gap-4 mb-1.5 min-h-[1.5rem] items-center">
                        <span className="text-primary/30 text-right w-6 select-none text-xs font-bold">{currentLineIndex + 1}</span>
                        <div className="relative flex items-center">
                            <div className="text-white/90">{currentText}</div>
                            <span className="w-1.5 h-4 bg-primary ml-1 animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                        </div>
                    </div>
                )}

                {phase === 'success' && (
                    <div className="mt-8 pt-6 border-t border-white/5 space-y-3 animate-fade-in">
                        <div className="flex gap-3 items-center">
                            <span className="text-green-500 font-bold text-xs select-none">&gt;</span>
                            <span className="text-green-400/90 text-[13px] font-medium">Domain-Specific SLM Fine-Tuning Complete...</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="text-green-500 font-bold text-xs select-none">&gt;</span>
                            <span className="text-green-400/90 text-[13px] font-medium">Secure Private Cloud Infrastructure Initialized.</span>
                        </div>
                        <div className="flex gap-3 items-center pt-2">
                            <span className="text-primary font-bold text-xs select-none">&gt;</span>
                            <span className="text-white font-black animate-pulse uppercase tracking-[0.2em] text-[11px] bg-primary/10 px-3 py-1.5 rounded border border-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                                Quantum-Ready Enterprise Scaling
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Subtle light effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
        </div>
    );
}

// Safer, component-based syntax highlighting
function HighlightedLine({ text }: { text: string }) {
    if (!text || text.trim() === '') return <span>&nbsp;</span>;

    // Tokenizer regex
    // 1. Strings: '...' or "..."
    // 2. Keywords: import, from, const, new, etc.
    // 3. Classes/Methods: Entrick, deploy, etc.
    // 4. Special chars: {}, (), [], etc.
    const tokens = text.split(/('.*?'|".*?"|\b(?:import|from|const|new|export|default|function|return|await|async)\b|\b(?:Entrick|Agent|deploy|fineTune|build|optimize)\b|[{}()\[\],;])/g);

    return (
        <>
            {tokens.map((token, i) => {
                if (token === undefined) return null;

                // String check
                if ((token.startsWith("'") && token.endsWith("'")) || (token.startsWith('"') && token.endsWith('"'))) {
                    return <span key={i} className="text-green-400">{token}</span>;
                }

                // Keyword check
                if (/^(import|from|const|new|export|default|function|return|await|async)$/.test(token)) {
                    return <span key={i} className="text-primary font-bold">{token}</span>;
                }

                // Class/Method check
                if (/^(Entrick|Agent|deploy|fineTune|build|optimize)$/.test(token)) {
                    const isEntrick = token === 'Entrick';
                    return (
                        <span
                            key={i}
                            className={isEntrick ? "text-white font-bold border-b border-primary/30" : "text-blue-400"}
                        >
                            {token}
                        </span>
                    );
                }

                // Special character check
                if (/^[{}()\[\],;]$/.test(token)) {
                    return <span key={i} className="text-white/30">{token}</span>;
                }

                // Default text
                return <span key={i}>{token}</span>;
            })}
        </>
    );
}
