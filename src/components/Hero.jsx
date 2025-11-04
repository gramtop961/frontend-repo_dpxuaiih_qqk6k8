import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9o4vT9h6Yw1bE7Jr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            Concept Study · Airport Terminal
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Skyport Terminal
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
            A visionary airport hub blending light, flow, and structural clarity. Designed for seamless passenger movement and a memorable sense of arrival.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-100"
            >
              Explore the concept <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
