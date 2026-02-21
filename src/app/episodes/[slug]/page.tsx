import { episodes } from "@/lib/episodes";
import { notFound } from "next/navigation";

export default async function EpisodePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const episode = episodes.find(
        (ep) => ep.slug === slug
    );

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
            <section className="py-24 px-6 max-w-3xl mx-auto leading-8 text-lg font-['Inter']">
                <div className="whitespace-pre-line opacity-80">
                    {episode.content}
                </div>
            </section>

        </main>
    );
}
