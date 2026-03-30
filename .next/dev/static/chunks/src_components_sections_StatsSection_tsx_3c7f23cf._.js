(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/StatsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AnimatedNumber({ value, suffix = '' }) {
    _s();
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AnimatedNumber.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
                        const duration = 2000;
                        const steps = 60;
                        const increment = numericValue / steps;
                        let current = 0;
                        const timer = setInterval({
                            "AnimatedNumber.useEffect.timer": ()=>{
                                current += increment;
                                if (current >= numericValue) {
                                    setDisplayValue(value);
                                    clearInterval(timer);
                                } else {
                                    if (value.includes('.')) {
                                        setDisplayValue(current.toFixed(1));
                                    } else {
                                        setDisplayValue(Math.floor(current).toString());
                                    }
                                }
                            }
                        }["AnimatedNumber.useEffect.timer"], duration / steps);
                    }
                }
            }["AnimatedNumber.useEffect"], {
                threshold: 0.5
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "AnimatedNumber.useEffect": ()=>observer.disconnect()
            })["AnimatedNumber.useEffect"];
        }
    }["AnimatedNumber.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            displayValue,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/StatsSection.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_s(AnimatedNumber, "p1IDDk5j2Mc5qZJe2/C81ynRnxE=");
_c = AnimatedNumber;
function StatsSection({ stats, background = 'dark' }) {
    const bgClass = background === 'gradient' ? 'bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]' : 'bg-[#0f0f0f]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `py-16 ${bgClass} text-white overflow-hidden`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold text-[#DC2626] mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                    value: stat.value,
                                    suffix: stat.suffix
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/StatsSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/StatsSection.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-sm md:text-base uppercase tracking-wider",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/StatsSection.tsx",
                                lineNumber: 79,
                                columnNumber: 29
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/sections/StatsSection.tsx",
                        lineNumber: 75,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/StatsSection.tsx",
                lineNumber: 73,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/StatsSection.tsx",
            lineNumber: 72,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/StatsSection.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_c1 = StatsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedNumber");
__turbopack_context__.k.register(_c1, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_sections_StatsSection_tsx_3c7f23cf._.js.map