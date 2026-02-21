import { episodes } from "@/lib/episodes";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";

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

        </main>
    );
}
