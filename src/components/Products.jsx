import { BadgeCheck } from 'lucide-react';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/JBL_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/80/Dolby_Laboratories_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8b/QSC_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/12/Christie_Digital_Systems_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/Crown_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/98/Meyer_Sound_Logo.svg',
];

export default function Products() {
  return (
    <section id="products" className="w-full bg-[#0b1016] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Products</h2>
          <p className="mt-3 text-slate-300">Cine Aryan Originals and global brand integrations for professional cinemas.</p>
        </div>

        {/* Originals */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl transition-opacity group-hover:opacity-70" />
            <h3 className="mb-1 text-xl font-semibold text-white">CA‑65 Speaker</h3>
            <p className="mb-4 text-sm text-slate-300">Rugged cinema surround speaker engineered for clarity and power.</p>
            <ul className="mb-4 grid grid-cols-2 gap-2 text-sm text-slate-200">
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-400" />80 Ω impedance</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-400" />120 W RMS</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-400" />Wide frequency range</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-400" />Compact dimensions</li>
            </ul>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_50%),linear-gradient(to_bottom,#0b1016,#0b0f14)]">
              {/* Placeholder visual block using gradients to mimic product silhouette */}
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_25%,transparent_25%),linear-gradient(225deg,rgba(255,255,255,0.06)_25%,transparent_25%),linear-gradient(45deg,rgba(255,255,255,0.06)_25%,transparent_25%),linear-gradient(315deg,rgba(255,255,255,0.06)_25%,transparent_25%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0]" />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl transition-opacity group-hover:opacity-70" />
            <h3 className="mb-1 text-xl font-semibold text-white">PLC Cinema Automation Interface</h3>
            <p className="mb-4 text-sm text-slate-300">Reliable show control and seamless device orchestration for modern multiplexes.</p>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.2),transparent_50%),linear-gradient(180deg,#0b1016,#0b0f14)]">
              <div className="h-full w-full animate-pulse bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70" />
            </div>
          </div>
        </div>

        {/* Global brand grid */}
        <div className="mt-14">
          <p className="mb-4 text-center text-sm uppercase tracking-widest text-cyan-300/80">Supplying the world’s most trusted cinema sound systems</p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((src, i) => (
              <div key={i} className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-cyan-400/40">
                <img src={src} alt="brand logo" className="max-h-8 opacity-90 invert-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
