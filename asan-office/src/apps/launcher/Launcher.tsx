import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Table,
  Presentation,
  FileCode,
  Search,
  Settings,
  LayoutGrid,
  Users,
  Bell,
  Star,
  Plus,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const apps = [
  { id: 'word', name: 'Asan Word', icon: FileText, color: 'text-[#0052cc]', bg: 'bg-[#e6f0ff]', path: '/word', desc: 'Process documents with precision' },
  { id: 'sheets', name: 'Asan Sheets', icon: Table, color: 'text-[#217346]', bg: 'bg-[#e7f5ec]', path: '/sheets', desc: 'Analyze data with powerful formulas' },
  { id: 'slides', name: 'Asan Slides', icon: Presentation, color: 'text-[#d24726]', bg: 'bg-[#fff1ed]', path: '/slides', desc: 'Design impactful presentations' },
  { id: 'pdf', name: 'Asan PDF', icon: FileCode, color: 'text-[#b30b00]', bg: 'bg-[#fff0f0]', path: '/pdf', desc: 'Professional PDF editing & security' },
];

const recentDocs = [
  { name: 'Annual Strategy 2026.docx', type: 'word', time: '2 hours ago', starred: true, size: '2.4 MB' },
  { name: 'Q3 Budget Projections.xlsx', type: 'sheets', time: 'Yesterday', starred: false, size: '1.1 MB' },
  { name: 'Service Level Agreement.pdf', type: 'pdf', time: '3 days ago', starred: true, size: '4.8 MB' },
  { name: 'Product Roadmap.pptx', type: 'slides', time: 'Last week', starred: false, size: '12.5 MB' },
];

const Launcher: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#f4f5f7] text-[#041b3c] font-['Inter'] overflow-hidden text-left">
      {/* Sidebar Navigation */}
      <aside className="w-20 flex flex-col items-center py-10 bg-white border-r border-[#e8edff] shadow-[4px_0_20px_rgba(0,0,0,0.02)] relative z-20">
        <div className="w-12 h-12 bg-[#0052cc] rounded-2xl flex items-center justify-center mb-16 shadow-xl shadow-[#0052cc]/20 cursor-pointer hover:scale-105 transition-transform">
          <span className="text-white font-black text-2xl">A</span>
        </div>
        <nav className="flex flex-col gap-12">
          <div className="relative group cursor-pointer">
             <LayoutGrid className="text-[#0052cc]" size={28} />
             <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#041b3c] text-white text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">DASHBOARD</div>
          </div>
          <div className="relative group cursor-pointer text-[#737685] hover:text-[#0052cc] transition-colors">
             <Users size={28} />
             <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#041b3c] text-white text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">CONTACTS</div>
          </div>
          <div className="relative group cursor-pointer text-[#737685] hover:text-[#0052cc] transition-colors">
             <Bell size={28} />
             <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#041b3c] text-white text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">NOTIFICATIONS</div>
          </div>
          <div className="relative group cursor-pointer text-[#737685] hover:text-[#0052cc] transition-colors">
             <ShieldCheck size={28} />
             <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#041b3c] text-white text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">SECURITY</div>
          </div>
        </nav>
        <div className="mt-auto relative group cursor-pointer text-[#737685] hover:text-[#0052cc] transition-colors pb-10">
          <Settings size={28} />
        </div>
      </aside>

      {/* Main Experience */}
      <main className="flex-1 flex flex-col relative">
        {/* Header Enhancement */}
        <header className="h-24 px-12 flex items-center justify-between bg-white/80 backdrop-blur-xl sticky top-0 z-10 border-b border-[#e8edff]/50">
          <div>
            <h1 className="text-3xl font-black text-[#041b3c] tracking-tight text-left">Executive Dashboard</h1>
            <p className="text-sm font-bold text-[#737685] mt-1 flex items-center gap-2">
               <Zap size={14} className="text-amber-500 fill-amber-500" />
               Welcome back, Senior Developer. Your workspace is optimized.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative group text-left">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737685] group-focus-within:text-[#0052cc] transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search across all Asan apps..."
                className="pl-14 pr-8 py-3.5 bg-[#f1f3ff] border-2 border-transparent rounded-2xl w-[400px] focus:bg-white focus:border-[#0052cc] focus:ring-8 focus:ring-[#0052cc]/5 outline-none text-sm font-bold transition-all shadow-inner"
              />
            </div>
            <div className="flex items-center gap-4">
               <div className="text-right">
                  <div className="text-sm font-black text-[#041b3c]">Jane Doe</div>
                  <div className="text-[10px] font-black text-[#0052cc] uppercase tracking-widest text-right">Administrator</div>
               </div>
               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0052cc] to-[#00a3ff] p-0.5 shadow-lg shadow-[#0052cc]/20 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-black text-[#0052cc] text-lg">JD</div>
               </div>
            </div>
          </div>
        </header>

        {/* Content Flow */}
        <div className="flex-1 p-12 overflow-y-auto custom-scrollbar">
          {/* Pro App Grid */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-10 text-left">
               <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#737685]">Launch Application</h2>
               <button className="flex items-center gap-3 px-6 py-2.5 bg-white text-[#041b3c] text-[11px] font-black uppercase tracking-widest rounded-xl hover:shadow-lg transition-all border border-[#e8edff]">
                  <Plus size={16} /> New Template
               </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {apps.map((app) => (
                <motion.div
                  key={app.id}
                  whileHover={{ y: -10, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.1)' }}
                  onClick={() => navigate(app.path)}
                  className="bg-white p-10 rounded-[32px] border border-[#e8edff] cursor-pointer flex flex-col gap-8 transition-all group relative overflow-hidden text-left"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${app.bg} opacity-20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150`}></div>
                  <div className={`w-16 h-16 ${app.bg} ${app.color} rounded-[22px] flex items-center justify-center shadow-inner relative z-10 group-hover:scale-110 transition-transform`}>
                    <app.icon size={36} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-black text-2xl text-[#041b3c] tracking-tight">{app.name}</h3>
                    <p className="text-xs font-bold text-[#737685] mt-3 leading-relaxed text-left">{app.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[#0052cc] font-black text-[10px] uppercase tracking-widest relative z-10 text-left">
                     <span>Launch Now</span>
                     <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Professional Activity Table */}
          <section>
            <div className="flex items-center justify-between mb-10 text-left">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#737685]">Recent Activity</h2>
              <button className="text-[11px] text-[#0052cc] font-black uppercase tracking-widest hover:underline">Manage Repository</button>
            </div>
            <div className="bg-white rounded-[32px] border border-[#e8edff] overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f9f9ff] border-b border-[#e8edff]">
                    <th className="px-10 py-6 text-[10px] font-black text-[#737685] uppercase tracking-[0.2em]">Document Identity</th>
                    <th className="px-10 py-6 text-[10px] font-black text-[#737685] uppercase tracking-[0.2em]">Module</th>
                    <th className="px-10 py-6 text-[10px] font-black text-[#737685] uppercase tracking-[0.2em]">Size</th>
                    <th className="px-10 py-6 text-[10px] font-black text-[#737685] uppercase tracking-[0.2em] text-right">Last Modified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8edff]">
                  {recentDocs.map((doc, i) => (
                    <tr key={i} className="hover:bg-[#f8f9fc] group transition-colors cursor-pointer">
                      <td className="px-10 py-6 font-black text-[#041b3c] text-lg flex items-center gap-6 text-left">
                        <div className={doc.starred ? 'text-amber-400' : 'text-[#c3c6d6] group-hover:text-[#737685]'}>
                           <Star size={20} fill={doc.starred ? "currentColor" : "none"} />
                        </div>
                        {doc.name}
                      </td>
                      <td className="px-10 py-6 text-left">
                         <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-inner ${
                            doc.type === 'word' ? 'bg-[#e6f0ff] text-[#0052cc]' :
                            doc.type === 'sheets' ? 'bg-[#e7f5ec] text-[#217346]' :
                            doc.type === 'slides' ? 'bg-[#fff1ed] text-[#d24726]' :
                            'bg-[#fff0f0] text-[#b30b00]'
                         }`}>
                            {doc.type}
                         </span>
                      </td>
                      <td className="px-10 py-6 text-sm font-bold text-[#737685] opacity-60 italic text-left">{doc.size}</td>
                      <td className="px-10 py-6 text-sm font-black text-[#041b3c] text-right group-hover:text-[#0052cc] transition-colors">{doc.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-8 bg-[#f9f9ff] text-center border-t border-[#e8edff]">
                 <button className="text-[11px] font-black text-[#737685] uppercase tracking-[0.2em] hover:text-[#0052cc] transition-all flex items-center justify-center gap-3 mx-auto">
                    Load Archive <ArrowRight size={14} className="rotate-90" />
                 </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Launcher;
