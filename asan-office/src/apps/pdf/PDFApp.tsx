import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, FileText, Save, Settings, Maximize2,
  Type, Highlighter, Lock, PenTool,
  Undo, Redo, ZoomIn, ZoomOut,
  RotateCw, Eye, BookOpen, Layers
} from 'lucide-react';

const PDFApp: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = ['File', 'Home', 'Insert', 'Edit', 'Annotate', 'Forms', 'Security', 'View'];

  return (
    <div className="h-screen flex flex-col bg-[#f4f5f7] font-['Inter'] overflow-hidden text-left">
      {/* Main Header */}
      <header className="h-12 px-6 bg-[#b30b00] text-white flex items-center justify-between shadow-lg relative z-30">
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/')} className="hover:bg-white/20 p-1.5 rounded-lg transition-all active:scale-90">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shadow-inner">
               <FileText size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest uppercase opacity-70">Asan PDF Pro</span>
              <span className="text-sm font-bold -mt-0.5">Contract_Review_V2.pdf</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-left">
           <div className="flex items-center gap-2 bg-black/20 rounded-full px-3 py-1 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <span className="text-[10px] font-black tracking-widest uppercase">Certified Document</span>
           </div>
           <div className="h-6 w-px bg-white/20 mx-2"></div>
           <Settings size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all" />
           <Maximize2 size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all" />
        </div>
      </header>

      {/* Ribbon Interface */}
      <nav className="bg-white border-b border-[#e8edff] shadow-sm flex flex-col relative z-20">
        <div className="flex px-8 bg-[#f8f9fc] border-b border-[#e8edff]/50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-[11px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-[#b30b00]' : 'text-[#737685] hover:text-[#041b3c]'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#b30b00] rounded-full z-20"></div>}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="h-28 px-8 flex items-center bg-white overflow-x-auto no-scrollbar border-b border-[#e8edff]/60 shadow-sm relative z-10">
           <div className="flex items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-3 flex-1 mt-2">
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#fff0f0] rounded-lg cursor-pointer min-w-[56px] group transition-all text-center">
                    <Highlighter size={22} className="text-[#b30b00] group-hover:scale-110" />
                    <span className="text-[10px] font-bold">Highlight</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#fff0f0] rounded-lg cursor-pointer min-w-[56px] group transition-all text-center">
                    <Type size={22} className="text-[#b30b00] group-hover:scale-110" />
                    <span className="text-[10px] font-bold">Edit Text</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#fff0f0] rounded-lg cursor-pointer min-w-[56px] group transition-all text-center">
                    <PenTool size={22} className="text-[#b30b00] group-hover:scale-110" />
                    <span className="text-[10px] font-bold">Sign</span>
                 </div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Annotation</span>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-3 flex-1 mt-2">
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px] text-center">
                    <Layers size={22} className="text-[#b30b00]" />
                    <span className="text-[10px] font-bold">OCR</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px] text-center">
                    <Lock size={22} className="text-[#b30b00]" />
                    <span className="text-[10px] font-bold">Protect</span>
                 </div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Advance</span>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-3 flex-1 mt-2">
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px] text-center">
                    <ZoomIn size={22} className="text-[#434654]" />
                    <span className="text-[10px] font-bold">Zoom</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px] text-center">
                    <RotateCw size={22} className="text-[#434654]" />
                    <span className="text-[10px] font-bold">Rotate</span>
                 </div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">View</span>
           </div>

           <div className="ml-auto flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <button className="p-2 hover:bg-[#f1f3ff] rounded-full text-[#737685]"><Undo size={18}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded-full text-[#737685]"><Redo size={18}/></button>
              </div>
              <button className="flex items-center gap-2.5 px-6 py-2.5 bg-[#b30b00] text-white text-sm font-black rounded-xl shadow-lg shadow-[#b30b00]/30 hover:bg-[#8e0900] hover:-translate-y-0.5 transition-all active:scale-95">
                <Save size={18} />
                SAVE PDF
              </button>
           </div>
        </div>
      </nav>

      {/* PDF Workspace */}
      <div className="flex-1 flex overflow-hidden">
         {/* Navigation Pane */}
         <aside className="w-64 bg-white border-r border-[#e8edff] flex flex-col shadow-[4px_0_15px_rgba(0,0,0,0.02)] relative z-10 overflow-y-auto custom-scrollbar p-6 space-y-6">
            <h3 className="text-[10px] font-black text-[#737685] uppercase tracking-[0.2em]">Pages</h3>
            {[1, 2, 3, 4].map((p) => (
              <div key={p} className="group cursor-pointer transition-all relative">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-[#737685]">{p}</span>
                <div className={`aspect-[1/1.41] bg-white border-2 rounded shadow-sm flex items-center justify-center p-4 ${p === 1 ? 'border-[#b30b00] ring-4 ring-[#b30b00]/10' : 'border-[#e8edff]'}`}>
                   <div className="w-full h-full flex flex-col gap-2 opacity-10">
                      <div className="h-2 bg-[#041b3c] rounded-full w-3/4"></div>
                      <div className="h-2 bg-[#041b3c] rounded-full w-1/2"></div>
                      <div className="h-2 bg-[#041b3c] rounded-full w-5/6"></div>
                      <div className="h-20 bg-[#041b3c] rounded-sm mt-2"></div>
                   </div>
                </div>
              </div>
            ))}
         </aside>

         {/* Document View */}
         <div className="flex-1 bg-[#525659] p-12 flex justify-center overflow-auto custom-scrollbar">
            <div className="w-[816px] h-[1056px] bg-white shadow-2xl relative flex flex-col p-24 text-left">
               <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[8px] font-black text-[#737685] opacity-40 uppercase tracking-[0.3em] text-center">Confidential - Asan PDF Pro</div>

               <h1 className="text-3xl font-black text-[#041b3c] mb-8 border-b-4 border-[#b30b00] pb-4 inline-block w-fit">SERVICE AGREEMENT</h1>

               <div className="space-y-6 text-[#172b4d] font-medium leading-relaxed">
                  <p>This Service Agreement ("Agreement") is made and entered into as of this day by and between Asan Office Suite and the Licensee.</p>
                  <div className="bg-yellow-100 relative group p-1">
                     The parties agree to the following terms and conditions regarding the use of offline productivity tools.
                     <span className="absolute -right-12 top-0 bg-[#b30b00] text-white text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Comment: Review Term</span>
                  </div>
                  <p>1. SCOPE OF SERVICES: The Provider shall deliver a fully offline environment for document processing, spreadsheet management, and presentation creation.</p>
                  <div className="h-40 bg-[#f9f9ff] border-2 border-dashed border-[#e8edff] rounded-xl flex items-center justify-center text-[#737685] text-xs font-bold italic uppercase tracking-widest text-center">
                     Placeholder for Secure Signature
                  </div>
               </div>

               {/* Zoom controls floating */}
               <div className="fixed bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1c1c1c]/90 text-white px-4 py-2 rounded-full shadow-2xl border border-white/10 backdrop-blur-md">
                  <button className="p-1 hover:bg-white/10 rounded-lg"><ZoomOut size={16}/></button>
                  <span className="text-xs font-black min-w-[40px] text-center">100%</span>
                  <button className="p-1 hover:bg-white/10 rounded-lg"><ZoomIn size={16}/></button>
                  <div className="w-px h-4 bg-white/20 mx-2"></div>
                  <button className="p-1 hover:bg-white/10 rounded-lg"><RotateCw size={16}/></button>
               </div>
            </div>
         </div>
      </div>

      {/* Status Bar */}
      <footer className="h-10 bg-white border-t border-[#e8edff] px-8 flex items-center justify-between text-[10px] text-[#737685] font-black uppercase tracking-widest relative z-30">
        <div className="flex gap-10 items-center">
          <span className="flex items-center gap-2 text-[#041b3c] font-black text-left"><FileText size={14} className="text-[#b30b00]"/> PAGE 1 OF 4</span>
        </div>
        <div className="flex gap-10 items-center text-left">
          <span className="cursor-pointer hover:text-[#b30b00] transition-colors flex items-center gap-2"><BookOpen size={14}/> READ MODE</span>
          <span className="cursor-pointer hover:text-[#b30b00] transition-colors flex items-center gap-2"><Eye size={14}/> FULL SCREEN</span>
          <div className="flex items-center gap-5">
            <div className="w-40 h-2 bg-[#f1f3ff] rounded-full overflow-hidden shadow-inner relative">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#b30b00] to-[#ff4b3d] w-1/4 rounded-full shadow-[0_0_8px_rgba(179,11,0,0.4)]"></div>
            </div>
            <span className="w-12 text-right text-[#041b3c]">25%</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PDFApp;
