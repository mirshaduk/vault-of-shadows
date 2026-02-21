"use client";

import { useState } from "react";
import { episodes } from "@/lib/episodes";
import Link from "next/link";

export default function Episodes() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Wars", "Leaders", "Collapse"];

    const filteredEpisodes =
        selectedCategory === "All"
            ? episodes
            : episodes.filter(
                (ep) => ep.category === selectedCategory
            );

    return (
        <main className="py-32 px-6 text-center min-h-screen">
            <h1 className="text-4xl md:text-5xl font-['Cinzel'] mb-12">
                The Archive
            </h1>

            {/* Category Filter */}
            <div className="mb-16 space-x-2 md:space-x-4 flex flex-wrap justify-center gap-y-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 border font-['Inter'] uppercase tracking-widest text-sm ${selectedCategory === cat
                                ? "bg-red-800 text-white border-red-800"
                                : "border-red-900 border-opacity-50 text-red-100 hover:border-red-600 hover:bg-red-900/20"
                            } transition duration-300`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Episode List */}
            <div className="max-w-4xl mx-auto space-y-6 text-left">
                {filteredEpisodes.map((episode) => (
                    <Link
                        key={episode.slug}
                        href={`/episodes/${episode.slug}`}
                        className="block bg-zinc-900/50 p-8 border-l-4 border-red-800 hover:bg-zinc-800/80 transition duration-300 group relative overflow-hidden"
                    >
                        {/* Hover Background Hint Layer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl md:text-3xl font-['Cinzel'] font-semibold">
                                    {episode.title}
                                </h2>
                                <span className="text-xs font-['Inter'] text-red-400 uppercase tracking-widest bg-red-900/20 px-3 py-1 rounded-full border border-red-900/30 shrink-0 ml-4 hidden md:inline-block">
                                    {episode.category}
                                </span>
                            </div>
                            <p className="opacity-70 font-['Inter'] text-lg mt-2">
                                {episode.subtitle}
                            </p>
                        </div>
                    </Link>
                ))}

                {filteredEpisodes.length === 0 && (
                    <div className="py-20 text-center opacity-50 font-['Inter'] italic">
                        No records found for this classification.
                    </div>
                )}
            </div>
        </main>
    );
}
