import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import { Film, Menu } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-[#070b11] text-white">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b11]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-md bg-cyan-500/30 blur-md" />
              <div className="relative rounded-md bg-gradient-to-br from-cyan-500 to-blue-500 p-2">
                <Film className="h-5 w-5 text-[#061018]" />
              </div>
            </div>
            <span className="text-lg font-extrabold tracking-wide">
              <span className="text-cyan-400">Cine</span> Aryan
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-[#061018] shadow shadow-cyan-500/30 hover:bg-cyan-400">Request a Quote</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-slate-200" />
          </button>
        </div>
        {open && (
          <div className="border-t border-white/5 px-6 py-3 md:hidden">
            <div className="flex flex-col gap-3 text-slate-200">
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#products" onClick={() => setOpen(false)}>Products</a>
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-[#061018]">Request a Quote</a>
            </div>
          </div>
        )}
      </header>

      <main className="">
        <Hero />
        <About />
        {/* Services section inline to keep components focused elsewhere */}
        <section id="services" className="w-full bg-[#0a0f15] py-20 text-slate-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
              <p className="mt-3 text-slate-300">Engineering mastery for projection, sound, and control.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Erection & Installation', desc: 'End-to-end setup of cinema projection and sound for single screens and multiplexes.' },
                { title: 'Maintenance & Repairs', desc: 'AMC, amplifier servicing, processor upgrades, and precision speaker tuning.' },
                { title: 'Technical Consultancy', desc: 'System testing, acoustic design, show control, and modernization planning.' },
              ].map((card, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
                  <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-slate-300">{card.desc}</p>
                  <div className="mt-6 inline-block rounded-md border border-cyan-400/40 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur transition group-hover:-translate-y-0.5">Get a Service Quote</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Products />
        {/* Clients */}
        <section className="w-full bg-[#0b1016] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-6 text-center text-sm uppercase tracking-widest text-cyan-300/80">Trusted by India’s Biggest Cinemas</p>
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
              {["PVR INOX","Wave","M2K","Movie Time","US Cinemas"].map((c) => (
                <div key={c} className="flex h-16 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-slate-200 backdrop-blur">
                  <span className="text-base font-semibold">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-[#070b11] py-8 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Cine Aryan. All rights reserved.</p>
          <div className="text-sm">Engineering immersive worlds with passion and precision.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
