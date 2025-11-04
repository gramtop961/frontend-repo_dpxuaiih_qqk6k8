import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="contact" className="w-full bg-slate-950 pt-6 pb-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-200/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Let's build the future of travel</h3>
              <p className="mt-3 text-slate-300">
                We partner with airports and cities to craft terminals that are efficient, intuitive, and uplifting.
                Share your brief to begin a design dialogue.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:studio@example.com"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-100"
                >
                  <Mail className="h-5 w-5" /> studio@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-white transition hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" /> +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white/10 p-2"><MapPin className="h-5 w-5 text-white" /></div>
                <div>
                  <p className="text-sm text-slate-300">Studio</p>
                  <p className="text-white">Airside Design Lab</p>
                  <p className="text-slate-300">Runway Boulevard 88, Terminal City</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-400">© {new Date().getFullYear()} Skyport Studio. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
