export default function Episodes() {
    return (
        <main className="py-20 px-6 text-center min-h-screen">
            <h1 className="text-4xl font-serif mb-12 font-['Cinzel']">
                The Archive
            </h1>

            <div className="max-w-3xl mx-auto space-y-8 text-left">

                <a
                    href="/episodes/ww1"
                    className="block bg-zinc-900 p-8 border-l-4 border-red-800 hover:bg-zinc-800 transition"
                >
                    <h2 className="text-2xl mb-3 font-['Cinzel']">
                        The Day Europe Exploded
                    </h2>
                    <p className="opacity-70 font-['Inter']">
                        A single assassination triggered the first global catastrophe.
                    </p>
                </a>

            </div>
        </main>
    );
}
