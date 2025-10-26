import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute -top-1/2 right-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Trusted by creators and startups
            </span>
            <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-gray-900">
              Bold websites that turn ideas into traction
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We craft conversion-focused Webflow and React experiences with crisp visuals, modern motion, and meticulous attention to detail.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 transition-colors"
              >
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50"
              >
                See our work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500" />
                <span>Top-rated studio</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500" />
                <span>Fast turnaround</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl border border-black/10 bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-sm">
              <div className="h-full w-full rounded-2xl bg-white grid grid-cols-6 grid-rows-6 overflow-hidden">
                <div className="col-span-3 row-span-3 bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div className="col-span-3 row-span-2 bg-gray-900" />
                <div className="col-span-2 row-span-2 bg-gray-100" />
                <div className="col-span-2 row-span-3 bg-gradient-to-tr from-indigo-500 to-sky-400" />
                <div className="col-span-2 row-span-1 bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
