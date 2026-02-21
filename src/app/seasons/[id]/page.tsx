import { seasons } from "@/lib/episodes";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function SeasonPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const seasonId = parseInt(id, 10);
    const season = seasons.find((s) => s.season === seasonId);

    if (!season) {
        return notFound();
    }

    return (
        <main className="min-h-screen">

            {/* Cinematic Header */}
            <section className="py-32 px-6 text-center bg-gradient-to-b from-black to-zinc-900 border-b border-red-900/30">
                <span className="text-sm font-['Inter'] text-red-500 uppercase tracking-widest block mb-4">
                    Season {season.season}
                </span>
                <h1 className="text-4xl md:text-6xl font-['Cinzel'] mb-6">
                    {season.title}
                </h1>
                <p className="opacity-70 font-['Inter'] max-w-xl mx-auto text-xl italic">
                    {season.theme}
                </p>
            </section>

            {/* Arc Grid */}
            <section className="py-20 px-8">
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {season.arcs.map((arc, index) => (
                        <div
                            key={arc.title}
                            className="bg-zinc-900/50 p-8 hover:bg-zinc-800/80 transition duration-300 border border-red-900/40 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                            <span className="text-red-800 text-sm font-['Inter'] uppercase tracking-widest block mb-2">
                                Arc {index + 1}
                            </span>
                            <h3 className="text-2xl mb-8 font-['Cinzel'] font-semibold">
                                {arc.title}
                            </h3>

                            <div className="space-y-4">
                                {arc.episodes.map((episode) => (
                                    <Link
                                        key={episode.slug}
                                        href={`/episodes/${episode.slug}`}
                                        className="block group/link"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-red-700 opacity-50">•</span>
                                            <span className="text-red-100 font-['Cinzel'] group-hover/link:text-red-500 transition duration-300">
                                                {episode.title}
                                            </span>
                                        </div>
                                        <span className="block text-xs font-['Inter'] opacity-50 ml-5 mt-1">
                                            {episode.subtitle}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <div className="max-w-4xl mx-auto mt-16 text-center">
                <Link href="/seasons" className="text-red-500 hover:text-red-400 font-['Inter'] uppercase tracking-widest text-sm transition">
                    ← Back to All Seasons
                </Link>
            </div>
        </main>
    );
}
