import { Link } from 'react-router-dom';

export default function Footer() {
  const exploreLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Explore', path: '/services' },
    { name: 'Services', path: '/services' },
  ];

  const followLinks = [
    { name: 'Instagram', path: 'https://www.instagram.com/acrogym_aerial?igsh=aW1yOWRmYmFubDR6' },
    { name: 'WhatsApp', path: 'http://wa.me/96170789456' },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <img
              src="/logo.svg"
              alt="Acrogym Logo"
              className="h-20 w-20 mb-6"
            />
            <div className="space-y-3 text-sm text-stone-600">
              <p>Horsh Tabet, Lebanon</p>
              <p>aerial@email.com</p>
              <p>+961 70 789 456</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-6 uppercase tracking-wide">
              Explore
            </h4>
            <div className="space-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-stone-600 hover:text-stone-900 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-6 uppercase tracking-wide">
              Follow us
            </h4>
            <div className="space-y-3">
              {followLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block text-stone-600 hover:text-stone-900 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-200">
          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} Acrogym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
