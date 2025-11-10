import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Acrogym Logo"
              className="h-16 w-16"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {location.pathname !== '/contact' && (
              <Link
                to="/contact"
                className="px-6 py-2.5 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-colors rounded-full"
              >
                Book Now
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-900 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-50 border-t border-stone-200">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-sm py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {location.pathname !== '/contact' && (
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-2.5 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-colors rounded-full"
              >
                Book Now
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
