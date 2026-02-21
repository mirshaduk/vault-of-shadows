import { seasons } from "@/lib/episodes";
import Link from "next/link";

export default function SeasonsIndexPage() {
    return (
        <main className="py-32 px-6 text-center min-h-screen">
            <h1 className="text-4xl md:text-5xl font-['Cinzel'] mb-6">
                The Seasons
            </h1>
            <p className="opacity-70 font-['Inter'] max-w-2xl mx-auto mb-16 text-lg">
                Explore the Vault of Shadows universe by era. Dive deep into the defining moments of history.
            </p>

            <div className="max-w-4xl mx-auto space-y-8 text-left">
                {seasons.map((season) => (
                    <Link
                        key={season.season}
                        href={`/seasons/${season.season}`}
                        className="block bg-zinc-900/50 p-8 md:p-12 border-l-4 border-red-800 hover:bg-zinc-800/80 transition duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                <h2 className="text-3xl md:text-4xl font-['Cinzel'] font-semibold">
                                    Season {season.season}: {season.title}
                                </h2>
                                <span className="text-sm font-['Inter'] text-red-400 mt-2 md:mt-0 opacity-80 uppercase tracking-widest">
                                    {season.arcs.length} Arcs
                                </span>
                            </div>
                            <p className="opacity-70 font-['Inter'] text-xl mb-6">
                                {season.theme}
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                {season.arcs.map(arc => (
                                    <span key={arc.title} className="bg-black/50 border border-red-900/30 px-4 py-1.5 rounded-full text-sm text-gray-300 font-['Inter']">
                                        {arc.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
