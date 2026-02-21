import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { episodes } from "@/lib/episodes";
import Background3D from "@/components/Background3D";

export default function Home() {
  const featuredEpisode = episodes.find(ep => ep.slug === "rise-of-napoleon") || episodes[0];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Cinematic Hero Section with 3D Background */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <Background3D />

        <FadeIn className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-red-600 tracking-[0.3em] text-sm uppercase font-semibold">
            The Archive is Open
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter title-glow">
            Vault of <span className="text-red-800">Shadows</span>
          </h1>
          <p className="max-w-2xl mx-auto opacity-70 text-lg md:text-2xl font-light leading-relaxed">
            History remembers the victors.
            <br />
            We uncover the collapse.
          </p>
          <div className="pt-8">
            <Link
              href="/seasons"
              className="inline-block px-8 py-4 bg-red-800 text-white font-semibold uppercase tracking-widest hover:bg-black hover:text-red-500 border border-transparent hover:border-red-800 transition duration-300"
            >
              Enter the Archive
            </Link>
          </div>
        </FadeIn>

        {/* Cinematic gradient fade to the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Featured Details Section */}
      <section id="featured" className="w-full bg-zinc-950 py-32 px-6 flex flex-col items-center text-center relative">
        <FadeIn>
          <span className="text-sm font-['Inter'] text-red-500 uppercase tracking-widest block mb-4">
            Curated Record
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cinzel'] mb-12">
            Featured Chronicle
          </h2>

          <div className="max-w-3xl mx-auto bg-black p-10 md:p-16 border border-zinc-800 relative group overflow-hidden">
            <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute top-0 left-0 w-2 h-full bg-red-800"></div>

            <h3 className="text-3xl font-['Cinzel'] mb-4 font-bold">
              {featuredEpisode.title}
            </h3>
            <p className="text-red-500 font-['Inter'] text-sm tracking-widest uppercase mb-6">
              {featuredEpisode.subtitle}
            </p>
            <p className="opacity-70 font-['Inter'] leading-relaxed text-lg italic mb-10">
              "{featuredEpisode.excerpt}"
            </p>

            <Link
              href={`/episodes/${featuredEpisode.slug}`}
              className="inline-block text-sm font-['Inter'] uppercase tracking-widest text-red-500 hover:text-red-400 border-b border-red-500 hover:border-red-400 pb-1 transition"
            >
              Read Transcript →
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
