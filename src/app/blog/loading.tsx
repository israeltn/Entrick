export default function BlogLoading() {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero skeleton */}
            <div className="pt-36 pb-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                    <div className="h-3 bg-white/5 rounded w-40 mx-auto animate-pulse" />
                    <div className="h-12 bg-white/5 rounded w-72 mx-auto animate-pulse" />
                    <div className="h-5 bg-white/5 rounded w-96 mx-auto animate-pulse" />
                </div>
            </div>

            {/* Grid skeleton */}
            <div className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="glass-card overflow-hidden animate-pulse"
                            >
                                <div className="aspect-[16/9] bg-white/5" />
                                <div className="p-6 space-y-3">
                                    <div className="h-3 bg-white/5 rounded w-1/4" />
                                    <div className="h-5 bg-white/5 rounded w-3/4" />
                                    <div className="h-5 bg-white/5 rounded w-full" />
                                    <div className="h-4 bg-white/5 rounded w-full" />
                                    <div className="h-4 bg-white/5 rounded w-5/6" />
                                    <div className="pt-4 border-t border-border flex justify-between">
                                        <div className="h-3 bg-white/5 rounded w-24" />
                                        <div className="h-3 bg-white/5 rounded w-20" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
