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
        <main className="py-32 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="text-sm font-['Inter'] text-red-500 uppercase tracking-widest block mb-4">
                    Season {season.season}
                </span>
                <h1 className="text-4xl md:text-6xl font-['Cinzel'] mb-6">
                    {season.title}
                </h1>
                <p className="opacity-70 font-['Inter'] max-w-2xl mx-auto text-xl italic">
                    {season.theme}
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-16">
                {season.arcs.map((arc, index) => (
                    <section key={arc.title} className="bg-black/40 border border-zinc-800 p-8 md:p-10 rounded-lg">
                        <h2 className="text-3xl font-['Cinzel'] font-bold mb-8 flex items-center gap-4">
                            <span className="text-red-800 text-xl font-['Inter']">Arc {index + 1}</span>
                            {arc.title}
                        </h2>

                        <div className="space-y-4">
                            {arc.episodes.map((episode) => (
                                <Link
                                    key={episode.slug}
                                    href={`/episodes/${episode.slug}`}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 bg-zinc-900/50 hover:bg-red-950/20 border border-transparent hover:border-red-900/50 transition duration-300 rounded group"
                                >
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="text-xl font-['Cinzel'] font-semibold group-hover:text-red-50 transition">
                                            {episode.title}
                                        </h3>
                                        <p className="opacity-60 text-sm font-['Inter'] mt-1">
                                            {episode.subtitle}
                                        </p>
                                    </div>
                                    <span className="text-red-700 font-['Inter'] text-sm uppercase tracking-wider group-hover:translate-x-1 duration-300 transition-transform">
                                        Watch Episode →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-16 text-center">
                <Link href="/seasons" className="text-red-500 hover:text-red-400 font-['Inter'] uppercase tracking-widest text-sm transition">
                    ← Back to All Seasons
                </Link>
            </div>
        </main>
    );
}
