import { episodes } from "@/lib/episodes";
import { notFound } from "next/navigation";

// Next.js App Router syntax for dynamic params requires awaiting the params object in newer Next.js versions.
// We will set this up safely for current standard Next.js 15+ routing.
export default async function EpisodePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const episode = episodes.find((ep) => ep.slug === slug);

    if (!episode) {
        return notFound();
    }

    return (
        <main className="py-20 px-6 max-w-3xl mx-auto leading-8 min-h-screen font-['Inter']">
            <h1 className="text-4xl font-serif mb-10 text-center font-['Cinzel']">
                {episode.title}
            </h1>

            <div className="whitespace-pre-line opacity-80">
                {episode.content}
            </div>
        </main>
    );
}
