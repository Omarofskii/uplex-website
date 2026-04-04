function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120f25] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,15,37,0.68),rgba(18,15,37,0.68)),radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_32%),url('/UpLex_logo_WhiteBackground.png')] bg-cover bg-center opacity-35 blur-sm scale-110" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(67,37,105,0.55),_rgba(16,28,58,0.7))]" />

      <section className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl text-center">
          

          <h1 className="text-5xl font-light uppercase tracking-[0.14em] text-white md:text-7xl md:tracking-[0.18em]">
            Under
            <br />
            Construction
          </h1>

          <div className="mx-auto mt-12 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              Website Status
            </p>
            <div className="h-3 overflow-hidden rounded-full bg-black/25 shadow-[0_0_24px_rgba(0,0,0,0.2)]">
              <div className="h-full w-4/5 rounded-full bg-white" />
            </div>
          </div>

          <p className="mt-10 text-base tracking-[0.22em] text-white/72 uppercase md:text-lg">
            The website is currently under construction
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
