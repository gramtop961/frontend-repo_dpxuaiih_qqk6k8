import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Airside facade at dusk',
  },
  {
    src: 'https://images.unsplash.com/photo-1660443851595-1e0c6611d223?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBaXJzaWRlJTIwZmFjYWRlJTIwYXQlMjBkdXNrfGVufDB8MHx8fDE3NjIyNDYyMjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Departure hall interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1669276930393-ff2798d6634c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXBhcnR1cmUlMjBoYWxsJTIwaW50ZXJpb3J8ZW58MHwwfHx8MTc2MjI0NjIyMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Concourse roof structure',
  },
  {
    src: 'https://images.unsplash.com/photo-1663000921327-821802dfdbf1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25jb3Vyc2UlMjByb29mJTIwc3RydWN0dXJlfGVufDB8MHx8fDE3NjIyNDYyMjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Runway with terminal in background',
  },
  {
    src: 'https://images.unsplash.com/photo-1633743869814-e55173c6f881?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSdW53YXklMjB3aXRoJTIwdGVybWluYWwlMjBpbnxlbnwwfDB8fHwxNzYyMjQ2MjIzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Pier connection and retail',
  },
  {
    src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Boarding gate lounge',
  },
];

export default function GalleryGrid() {
  return (
    <section className="w-full bg-slate-950 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Visual Narrative</h3>
            <p className="mt-2 text-slate-300">Materiality, light and structure define the passenger experience.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl border border-slate-200/10 bg-white/5">
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-sm text-white opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
