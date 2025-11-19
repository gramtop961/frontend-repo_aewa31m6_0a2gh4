import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with 3D bot */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient accents (non-blocking) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -inset-24 bg-gradient-to-br from-white/5 via-transparent to-orange-500/10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-[90%] rounded-[50%] blur-3xl bg-orange-500/10" />
        </div>

        {/* Top nav / brand */}
        <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 pt-6">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Flames" className="h-8 w-8" />
            <span className="text-sm tracking-wider text-white/70">Flames.Blue</span>
          </div>
          <a
            href="/test"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur hover:bg-white/10 transition"
          >
            Check backend
          </a>
        </div>

        {/* Hero copy */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 sm:px-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></span>
              Live • Interactive 3D bot
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">
              Is this the bot you were looking for?
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              A friendly, minimalist robot greets you with subtle orange highlights. Tell it what to build and watch your app come to life.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#how-it-works"
                className="rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
              >
                Get started
              </a>
              <a
                href="/test"
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 hover:bg-white/10 transition"
              >
                Run system check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative py-16 sm:py-24 bg-gradient-to-b from-black to-zinc-900">
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:36px_36px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-8 w-8 rounded-lg bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold">1</div>
              <h3 className="mt-4 text-lg font-semibold">Describe your idea</h3>
              <p className="mt-2 text-sm text-white/70">Use the chat to say what you want. The bot understands and plans it out.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-8 w-8 rounded-lg bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold">2</div>
              <h3 className="mt-4 text-lg font-semibold">Watch it build</h3>
              <p className="mt-2 text-sm text-white/70">See your app take shape here in real time with live previews.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-8 w-8 rounded-lg bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold">3</div>
              <h3 className="mt-4 text-lg font-semibold">Refine and iterate</h3>
              <p className="mt-2 text-sm text-white/70">Keep chatting to add features, polish the design, and ship.</p>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-white/50">No coding required • Just describe what you want</p>
        </div>
      </section>
    </div>
  )
}

export default App
