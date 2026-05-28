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
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';

const apps = [
  { id: 'word', name: 'Asan Word', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', path: '/word' },
  { id: 'sheets', name: 'Asan Sheets', icon: Table, color: 'text-green-600', bg: 'bg-green-50', path: '/sheets' },
  { id: 'slides', name: 'Asan Slides', icon: Presentation, color: 'text-orange-600', bg: 'bg-orange-50', path: '/slides' },
  { id: 'pdf', name: 'Asan PDF', icon: FileCode, color: 'text-red-600', bg: 'bg-red-50', path: '/pdf' },
];

const recentDocs = [
  { name: 'Q4 Budget Report.xlsx', type: 'sheets', time: '2 hours ago', starred: true },
  { name: 'Branding Proposal.docx', type: 'word', time: 'Yesterday', starred: false },
  { name: 'Project Roadmap.pptx', type: 'slides', time: '3 days ago', starred: false },
  { name: 'Service Agreement.pdf', type: 'pdf', time: 'Last week', starred: true },
];

const Launcher: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#f9f9ff] text-[#041b3c] font-['Inter'] overflow-hidden text-left">
      {/* Sidebar */}
      <aside className="w-16 flex flex-col items-center py-8 bg-white border-r border-[#e8edff] shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
        <div className="w-10 h-10 bg-[#0052cc] rounded-xl flex items-center justify-center mb-12 shadow-lg shadow-[#0052cc]/20">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <nav className="flex flex-col gap-10">
          <LayoutGrid className="text-[#0052cc] cursor-pointer" size={24} />
          <Users className="text-[#737685] cursor-pointer hover:text-[#0052cc] transition-colors" size={24} />
          <Bell className="text-[#737685] cursor-pointer hover:text-[#0052cc] transition-colors" size={24} />
          <Settings className="text-[#737685] cursor-pointer hover:text-[#0052cc] transition-colors" size={24} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 px-10 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-[#e8edff] sticky top-0 z-10 text-left">
          <div>
            <h1 className="text-2xl font-bold text-[#041b3c]">Good Morning</h1>
            <p className="text-sm text-[#737685]">Ready to start your work?</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737685] group-focus-within:text-[#0052cc] transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search your documents..."
                className="pl-12 pr-6 py-2.5 bg-[#f1f3ff] border border-transparent rounded-full w-80 focus:bg-white focus:border-[#0052cc] focus:ring-4 focus:ring-[#0052cc]/5 outline-none text-sm transition-all shadow-inner"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#cadaff] border-2 border-[#0052cc] cursor-pointer hover:scale-105 transition-transform flex items-center justify-center font-bold text-[#0052cc]">
              JD
            </div>
          </div>
        </header>

        {/* Dashboard Area */}
        <div className="flex-1 p-10 overflow-y-auto custom-scrollbar">
          {/* Quick Start */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#737685]">Create New</h2>
               <button className="flex items-center gap-2 px-4 py-2 bg-[#e6f0ff] text-[#0052cc] text-xs font-bold rounded-lg hover:bg-[#0052cc] hover:text-white transition-all">
                  <Plus size={14} /> Custom Template
               </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {apps.map((app) => (
                <motion.div
                  key={app.id}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(0, 82, 204, 0.15)' }}
                  onClick={() => navigate(app.path)}
                  className="bg-white p-8 rounded-2xl border border-[#e8edff] cursor-pointer flex flex-col gap-6 transition-all shadow-sm group hover:border-[#0052cc]/30"
                >
                  <div className={`w-14 h-14 ${app.bg} ${app.color} rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                    <app.icon size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#041b3c]">{app.name}</h3>
                    <p className="text-xs text-[#737685] mt-1 text-left">Start a fresh document</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recent Documents */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#737685]">Recent Activity</h2>
              <button className="text-sm text-[#0052cc] font-bold hover:underline">Manage Files</button>
            </div>
            <div className="bg-white rounded-2xl border border-[#e8edff] overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f9f9ff] border-b border-[#e8edff]">
                    <th className="px-8 py-5 text-[10px] font-bold text-[#737685] uppercase tracking-widest">Document Name</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-[#737685] uppercase tracking-widest">Category</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-[#737685] uppercase tracking-widest text-right">Modified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8edff]">
                  {recentDocs.map((doc, i) => (
                    <tr key={i} className="hover:bg-[#f9f9ff] group transition-colors cursor-pointer">
                      <td className="px-8 py-5 font-semibold text-[#041b3c] flex items-center gap-4">
                        <div className={doc.starred ? 'text-amber-400' : 'text-[#c3c6d6] group-hover:text-[#737685]'}>
                           <Star size={16} fill={doc.starred ? "currentColor" : "none"} />
                        </div>
                        {doc.name}
                      </td>
                      <td className="px-8 py-5">
                         <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#f1f3ff] text-[#555f6c] uppercase tracking-wider">{doc.type}</span>
                      </td>
                      <td className="px-8 py-5 text-sm text-[#737685] text-right">{doc.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 bg-[#f9f9ff] text-center">
                 <button className="text-xs font-bold text-[#737685] hover:text-[#0052cc] transition-colors">Show More Documents</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Launcher;
