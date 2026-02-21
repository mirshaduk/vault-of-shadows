export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-red-950">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          THE VAULT OF SHADOWS
        </h1>
        <p className="max-w-xl opacity-70 text-lg">
          History remembers the victors.
          <br />
          We uncover the collapse.
        </p>
        <a
          href="#featured"
          className="mt-8 px-6 py-3 border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition"
        >
          Enter the Archive
        </a>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-20 px-6 text-center">
        <h2 className="text-3xl mb-10 font-serif">
          Featured Chronicle
        </h2>

        <div className="max-w-2xl mx-auto bg-zinc-900 p-8 border-l-4 border-red-800">
          <h3 className="text-2xl mb-4">
            The Day Europe Exploded
          </h3>
          <p className="opacity-70">
            A single gunshot in Sarajevo.
            <br />
            An empire trembling.
            <br />
            Within weeks, the world would burn.
          </p>
        </div>
      </section>

    </main>
  );
}
