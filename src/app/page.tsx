export default function Home() {
  return (
    <main className="min-h-screen text-[#f2f2f2]">

      {/* SECTION 1: HERO */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-black to-[#1a0000] px-4">
        <h1 className="font-['Cinzel'] text-4xl md:text-5xl lg:text-6xl tracking-widest text-[#f2f2f2] mb-6">
          THE VAULT OF SHADOWS
        </h1>
        <p className="font-['Inter'] text-lg md:text-xl max-w-2xl opacity-80 mb-10">
          History remembers the victors. <br className="hidden sm:block" />
          We uncover the collapse.
        </p>
        <a
          href="#featured"
          className="px-8 py-3 border border-[#8b0000] text-[#8b0000] uppercase tracking-wider transition-all duration-300 hover:bg-[#8b0000] hover:text-white"
        >
          Enter the Archive
        </a>
      </div>

      {/* SECTION 2: FEATURED CHRONICLE */}
      <div id="featured" className="py-24 px-6 md:px-20 text-center max-w-5xl mx-auto">
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl tracking-widest mb-12">
          Featured Chronicle
        </h2>
        <div className="bg-[#141414] p-8 md:p-12 border-l-4 border-[#8b0000] text-left mx-auto max-w-3xl">
          <h3 className="font-['Cinzel'] text-2xl mb-4">The Day Europe Exploded</h3>
          <p className="font-['Inter'] opacity-80 leading-relaxed text-lg">
            A single gunshot in Sarajevo. <br />
            An empire trembling. <br />
            Within weeks, the world would burn.
          </p>
        </div>
      </div>

      {/* SECTION 3: CATEGORIES */}
      <div className="py-20 px-6 md:px-20 text-center max-w-5xl mx-auto">
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl tracking-widest mb-12">
          Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-[#141414] p-8 border-l-4 border-[#8b0000] transition-transform duration-300 hover:-translate-y-2">
            <h3 className="font-['Cinzel'] text-xl mb-4">⚔ Wars That Broke the World</h3>
            <p className="font-['Inter'] opacity-80">
              Moments where diplomacy failed and humanity paid the price.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#141414] p-8 border-l-4 border-[#8b0000] transition-transform duration-300 hover:-translate-y-2">
            <h3 className="font-['Cinzel'] text-xl mb-4">👑 Power & Paranoia</h3>
            <p className="font-['Inter'] opacity-80">
              Ambition. Ego. The psychology of collapse.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#141414] p-8 border-l-4 border-[#8b0000] transition-transform duration-300 hover:-translate-y-2">
            <h3 className="font-['Cinzel'] text-xl mb-4">💀 Collapse & Chaos</h3>
            <p className="font-['Inter'] opacity-80">
              Revolutions, assassinations, and the fall of systems.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-12 text-sm opacity-60 font-['Inter']">
        © 2026 The Vault of Shadows — Independent Dark History Archive
      </footer>

    </main>
  );
}
