import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="absolute w-full z-50 top-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl transition-all duration-300 relative bg-[#161B22]/85 backdrop-blur-lg border border-white/8 rounded-full px-2 shadow-sm">
        <div className="flex justify-between h-16 items-center px-6">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors flex items-center gap-2 font-mono">
              <Terminal size={24} className="text-primary" />
              <span>&lt;JohnDoe /&gt;</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                    isActive ? 'text-primary' : 'text-neutral hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex">
             <Link to="/contact" className="bg-primary/90 text-white border border-primary/30 hover:bg-primary px-6 py-2.5 rounded-md text-xs font-bold transition-all">
                VIEW RESUME
             </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="text-neutral hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
               initial={{ opacity: 0, y: -10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -10, scale: 0.95 }}
               transition={{ duration: 0.2 }}
               className="md:hidden absolute top-20 left-0 w-full bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="px-4 pt-4 pb-4 space-y-1">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                       key={link.name}
                       to={link.path}
                       onClick={() => setIsOpen(false)}
                       className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                         isActive
                           ? 'bg-primary/20 text-primary border border-primary/30'
                           : 'text-neutral hover:bg-[#1F2937] hover:text-white'
                       }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                  <Link
                     to="/contact"
                     onClick={() => setIsOpen(false)}
                     className="block px-4 py-3 mt-4 text-center rounded-lg text-sm font-bold bg-primary text-white transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  >
                    VIEW RESUME
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
