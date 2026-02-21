import { episodes } from "@/lib/episodes";
import Link from "next/link";

export default function Episodes() {
    return (
        <main className="py-20 px-6 text-center min-h-screen">
            <h1 className="text-4xl font-serif mb-12 font-['Cinzel']">
                The Archive
            </h1>

            <div className="max-w-3xl mx-auto space-y-8 text-left">
                {episodes.map((episode) => (
                    <Link
                        key={episode.slug}
                        href={`/episodes/${episode.slug}`}
                        className="block bg-zinc-900 p-8 border-l-4 border-red-800 hover:bg-zinc-800 transition"
                    >
                        <h2 className="text-2xl mb-3 font-['Cinzel']">
                            {episode.title}
                        </h2>
                        <p className="opacity-70 font-['Inter']">
                            {episode.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
