import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0d12] text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0d12]/40 via-[#0a0d12]/60 to-[#0a0d12]" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_200px_60px_rgba(0,0,0,0.6)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200 backdrop-blur">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          India’s Leader in Cinema Engineering & Sound Systems
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200 bg-clip-text text-transparent drop-shadow">The Next Generation of Cinema Engineering</span>
        </h1>

        <p className="mt-5 max-w-3xl text-base text-slate-200 sm:text-lg">
          Cinema‑grade sound, projection, and automation engineered for perfection. Trusted by PVR INOX, Wave, M2K, US Cinemas, and Movie Time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-[#081018] shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-white/5 px-5 py-3 font-semibold text-cyan-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-100"
          >
            <Play className="h-5 w-5" /> Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
