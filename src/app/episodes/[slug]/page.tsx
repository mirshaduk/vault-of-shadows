import { seasons } from "@/lib/episodes";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default async function EpisodePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let currentSeason = null;
    let currentArc = null;
    let episode = null;
    let nextEpisode = null;

    for (const season of seasons) {
        for (const arc of season.arcs) {
            const index = arc.episodes.findIndex((ep: any) => ep.slug === slug);
            if (index !== -1) {
                currentSeason = season;
                currentArc = arc;
                episode = arc.episodes[index];
                if (index + 1 < arc.episodes.length) {
                    nextEpisode = arc.episodes[index + 1];
                }
                break;
            }
        }
        if (episode) break;
    }

    if (!episode) {
        return notFound();
    }

    return (
        <main>

            {/* Full Screen Hero */}
            <section
                className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
                style={{ backgroundImage: `url('${episode.image}')` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 px-6 font-['Cinzel']">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">
                        {episode.title}
                    </h1>
                    <p className="opacity-70 text-lg max-w-xl mx-auto font-['Inter']">
                        {episode.subtitle}
                    </p>
                </div>
            </section>

            {/* Story Content */}
            <section className="py-24 px-6 max-w-3xl mx-auto leading-8 text-lg font-['Inter'] space-y-8">
                {episode.content.map((block: any, index: number) => {
                    let textClass = "opacity-80";

                    if (block.type === "lead") {
                        textClass = "text-2xl font-['Cinzel'] text-red-100 font-semibold tracking-wide";
                    } else if (block.type === "emphasis") {
                        textClass = "text-xl italic border-l-2 border-red-800 pl-6 text-[#f2f2f2]";
                    } else if (block.type === "closing") {
                        textClass = "text-xl text-center opacity-60 italic mt-12";
                    }

                    return (
                        <FadeIn key={index}>
                            <p className={textClass}>
                                {block.text}
                            </p>
                        </FadeIn>
                    );
                })}
            </section>

            {/* Next Episode Progression */}
            {nextEpisode && (
                <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
                    <FadeIn>
                        <div className="border-t border-red-900/30 pt-16 mt-8">
                            <span className="text-red-500 font-['Inter'] uppercase tracking-widest text-sm mb-4 block">
                                Up Next in {currentArc?.title}
                            </span>
                            <Link href={`/episodes/${nextEpisode.slug}`} className="block group">
                                <h3 className="text-3xl md:text-5xl font-['Cinzel'] font-bold mb-4 group-hover:text-red-50 text-red-100 transition duration-300">
                                    {nextEpisode.title}
                                </h3>
                                <p className="text-lg opacity-60 font-['Inter'] group-hover:opacity-100 transition duration-300">
                                    {nextEpisode.subtitle}
                                </p>
                            </Link>
                        </div>
                    </FadeIn>
                </section>
            )}

            {/* End of Arc */}
            {!nextEpisode && currentSeason && (
                <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
                    <FadeIn>
                        <div className="border-t border-red-900/30 pt-16 mt-8">
                            <span className="text-zinc-500 font-['Inter'] uppercase tracking-widest text-sm mb-6 block">
                                End of Arc: {currentArc?.title}
                            </span>
                            <Link href={`/seasons/${currentSeason.season}`} className="inline-block border border-red-900/50 hover:bg-red-900/20 text-red-100 font-['Inter'] uppercase tracking-widest text-sm px-8 py-4 rounded transition duration-300">
                                Return to Season {currentSeason.season}
                            </Link>
                        </div>
                    </FadeIn>
                </section>
            )}

        </main>
    );
}
