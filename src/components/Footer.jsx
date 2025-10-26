export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Studio</h4>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">
              A small team helping founders and creators build beautiful, high-performing web experiences.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Brand & Web Design</li>
              <li>Webflow Development</li>
              <li>React/Next.js Builds</li>
              <li>Ongoing Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#work" className="hover:text-gray-900">Work</a></li>
              <li><a href="#services" className="hover:text-gray-900">Services</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Get in touch</h4>
            <p className="mt-3 text-sm text-gray-600">hello@widmind.studio</p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Widmind Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
