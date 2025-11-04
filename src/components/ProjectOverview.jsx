import React from 'react';
import { Building2, Users, Clock } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl border border-slate-200/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-white/10 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-sm text-slate-300">{label}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
    </div>
  </div>
);

export default function ProjectOverview() {
  return (
    <section id="overview" className="relative w-full bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Design Intent</h2>
            <p className="mt-4 text-slate-300">
              The Skyport Terminal is conceived as a luminous concourse that choreographs movement with clarity. 
              A vaulted roof, inspired by the flow of air over wings, spans modular piers connecting arrivals, security, 
              and retail into a single legible sequence. Daylight guides passengers, while structure and services are 
              expressed with elegance and purpose.
            </p>
            <p className="mt-4 text-slate-300">
              Flexible planning enables phased expansion without disrupting operations. Sustainable strategies—passive 
              shading, optimized spans, and high-performance glazing—reduce energy use while enhancing comfort.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat icon={Building2} label="Gross Floor Area" value="120,000 m²" />
            <Stat icon={Users} label="Annual Capacity" value="28M passengers" />
            <Stat icon={Clock} label="Dwell Time" value="< 8 min security" />
            <Stat icon={Building2} label="Modular Piers" value="3 expandable" />
          </div>
        </div>
      </div>
    </section>
  );
}
