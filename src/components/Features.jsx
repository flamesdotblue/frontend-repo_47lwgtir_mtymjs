import { Shield, Sparkles, Timer, Check } from 'lucide-react';

const features = [
  {
    title: 'Strategy-first design',
    description:
      'Every project starts with clear goals and a simple plan to move the needle for your business.',
    icon: Shield,
  },
  {
    title: 'Clean, modern visuals',
    description:
      'Interface patterns that feel premium, minimal, and on-brand — shipped with pixel-perfect polish.',
    icon: Sparkles,
  },
  {
    title: 'Fast delivery',
    description:
      'Tight sprints and transparent communication to help you launch quickly without the chaos.',
    icon: Timer,
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">
            A flexible design and development partner for startups, creators, and small teams.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> No bloated deliverables</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Clear milestones</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Launch support</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
