import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Pricing teaser section */}
        <section id="pricing" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple pricing</h2>
              <p className="mt-3 text-gray-600">Pick the plan that fits your stage. No surprises, clear outcomes.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Launch</h3>
                <p className="mt-2 text-sm text-gray-600">Perfect for idea-stage and early MVPs.</p>
                <p className="mt-6 text-4xl font-semibold tracking-tight">$1,900</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>1 landing page</li>
                  <li>Brand refresh</li>
                  <li>Basic animations</li>
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">Get started</a>
              </div>
              <div className="rounded-2xl border border-black/10 bg-gray-900 p-6 text-white shadow-sm">
                <h3 className="text-lg font-semibold">Scale</h3>
                <p className="mt-2 text-sm text-gray-300">For growing teams that need more.</p>
                <p className="mt-6 text-4xl font-semibold tracking-tight">$4,900</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-200">
                  <li>Multi-page website</li>
                  <li>Advanced animations</li>
                  <li>2-week sprint</li>
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-full bg-white px-5 py-3 text-gray-900 hover:bg-gray-100">Book a call</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
