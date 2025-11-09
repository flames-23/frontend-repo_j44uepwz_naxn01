import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0f15] py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-3 text-slate-300">Let’s build the future of cinema together.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Name</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0b121a] px-3 py-2 text-white outline-none ring-cyan-500/40 placeholder:text-slate-500 focus:ring-2" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Email</label>
                  <input type="email" className="w-full rounded-md border border-white/10 bg-[#0b121a] px-3 py-2 text-white outline-none ring-cyan-500/40 placeholder:text-slate-500 focus:ring-2" placeholder="you@company.com" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Phone</label>
                  <input type="tel" className="w-full rounded-md border border-white/10 bg-[#0b121a] px-3 py-2 text-white outline-none ring-cyan-500/40 placeholder:text-slate-500 focus:ring-2" placeholder="+91 98XX-XXXXXX" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Inquiry Type</label>
                  <select className="w-full rounded-md border border-white/10 bg-[#0b121a] px-3 py-2 text-white outline-none ring-cyan-500/40 focus:ring-2">
                    <option>Installation</option>
                    <option>Maintenance / AMC</option>
                    <option>Consultancy</option>
                    <option>Product Purchase</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea rows={5} className="w-full rounded-md border border-white/10 bg-[#0b121a] px-3 py-2 text-white outline-none ring-cyan-500/40 placeholder:text-slate-500 focus:ring-2" placeholder="Tell us about your project" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-[#081018] shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400">
                <Send className="h-4 w-4" /> Send Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-3 text-slate-200"><MapPin className="h-5 w-5 text-cyan-400" /> New Delhi, India</div>
              <div className="mb-2 flex items-center gap-3 text-slate-200"><Mail className="h-5 w-5 text-cyan-400" /> info@cinearyan.com</div>
              <div className="flex items-center gap-3 text-slate-200"><Phone className="h-5 w-5 text-cyan-400" /> +91 98XX-XXXXXX</div>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Delhi HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.237683137316!2d77.2090217!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35a4c77b05%3A0x3f42fca6b179c!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699977777777!5m2!1sen!2sin"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
