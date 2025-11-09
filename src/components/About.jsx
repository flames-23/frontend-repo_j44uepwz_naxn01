export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0d12] py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">About Cine Aryan</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-300">
            Founded in 2015 in New Delhi, Cine Aryan designs, installs, and services cinema-grade sound, projection, and automation systems. Our engineering-first approach powers immersive auditoriums across India.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent" />
          <ul className="space-y-10">
            <li className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-widest text-cyan-300/70">2015</p>
                <h3 className="text-lg font-semibold text-white">Founded in New Delhi</h3>
                <p className="text-slate-300">Cine Aryan begins with a mission: deliver world‑class cinema technology and engineering across India.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-slate-200">Early acoustic designs and projection setups set the foundation for our trusted service framework.</p>
              </div>
            </li>
            <li className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
              <div className="order-2 sm:order-none rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-slate-200">Nationwide rollouts with leading chains like PVR INOX, Wave, M2K, US Cinemas, and Movie Time.</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-widest text-cyan-300/70">2018–2021</p>
                <h3 className="text-lg font-semibold text-white">Trusted Partner for Top Cinemas</h3>
                <p className="text-slate-300">Scaling design, integration, and maintenance services for multi‑screen complexes.</p>
              </div>
            </li>
            <li className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-widest text-cyan-300/70">2022 → Today</p>
                <h3 className="text-lg font-semibold text-white">Innovation & Originals</h3>
                <p className="text-slate-300">Advancing in‑house products like CA‑65 speakers and PLC automation interfaces.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-slate-200 italic">“We turn auditoriums into immersive worlds.”</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
