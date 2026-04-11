import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboard, LogOut, Terminal, Briefcase, Mail, Settings } from 'lucide-react';

export default function AdminLayout() {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const links = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: '/admin/projects', icon: <Terminal size={20} /> },
    { name: 'Experience', path: '/admin/experience', icon: <Briefcase size={20} /> },
    { name: 'Messages', path: '/admin/messages', icon: <Mail size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0D1117] font-sans text-white selection:bg-primary/30">
      {/* Sidebar */}
      <div className="w-68 bg-[#161B22] border-r border-white/5 flex-col hidden md:flex shadow-2xl z-10 relative">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <Link to="/" className="text-2xl font-black text-white font-mono tracking-tight">
            &lt;Admin /&gt;
          </Link>
          <span className="ml-2 text-[10px] font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-2 py-1 rounded">Root</span>
        </div>
        <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-mono text-sm tracking-wide ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary font-bold shadow-[0_0_15px_rgba(59,130,246,0.15)] border border-primary/20'
                  : 'text-neutral hover:bg-[#21262D] hover:text-white font-medium border border-transparent'
              }`}
            >
              <div className={`${location.pathname === link.path ? 'text-primary' : 'text-neutral'}`}>
                 {link.icon}
              </div>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="p-6 border-t border-white/5 bg-[#0D1117]/50">
          <button 
            onClick={logout}
            className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-[#21262D] border border-white/10 text-red-500 hover:bg-red-500/10 hover:border-red-500/30 rounded-xl transition-colors font-mono font-bold shadow-sm"
          >
            <LogOut size={18} />
            SIGTERM
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Mobile Header */}
        <header className="h-16 bg-[#161B22] border-b border-white/5 flex items-center px-6 md:hidden justify-between shadow-sm z-20 relative">
          <span className="text-2xl font-black font-mono tracking-tight text-white">&lt;Admin /&gt;</span>
          <button onClick={logout} className="p-2 bg-[#21262D] border border-white/10 rounded-lg text-red-500 hover:bg-red-500/10 hover:border-red-500/30 transition-colors">
            <LogOut size={20} />
          </button>
        </header>

        <main className="flex-1 overflow-auto p-6 md:p-10 custom-scrollbar relative z-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
