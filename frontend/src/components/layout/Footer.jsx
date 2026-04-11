import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black text-white mb-1 font-mono tracking-tight">
            &lt;JohnDoe /&gt;
          </h2>
          <p className="text-neutral text-sm flex items-center justify-center md:justify-start gap-1">
            Built with <Code className="text-primary mx-1" size={14} /> and a lot of caffeine.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-neutral hover:text-white text-sm font-mono tracking-wide transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-neutral text-sm font-mono flex items-center gap-2">
           <span className="text-secondary opacity-50">~</span> 
           © {year} All rights reserved
        </p>
      </div>
    </footer>
  );
}
