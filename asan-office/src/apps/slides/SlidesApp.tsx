import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Save, Settings, Maximize2,
  Presentation, Play, Plus, Image as ImageIcon,
  Type, Square, LayoutGrid, Undo,
  Layout as LayoutIcon, Wand2, Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SlidesApp: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = ['File', 'Home', 'Insert', 'Design', 'Transitions', 'Animations', 'Slide Show', 'Review', 'View'];

  const slides = [
    { title: 'Asan Office Suite', subtitle: 'The Future of Offline Productivity', layout: 'title' },
    { title: 'Market Analysis', subtitle: 'Q3 Growth Projections', layout: 'content' },
    { title: 'Technical Roadmap', subtitle: 'Key Milestones for 2026', layout: 'content' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#f4f5f7] font-['Inter'] overflow-hidden text-left">
      {/* Main Header */}
      <header className="h-12 px-6 bg-[#d24726] text-white flex items-center justify-between shadow-lg relative z-30">
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/')} className="hover:bg-white/20 p-1.5 rounded-lg transition-all active:scale-90">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shadow-inner">
               <Presentation size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest uppercase opacity-70">Asan Slides</span>
              <span className="text-sm font-bold -mt-0.5">Product Launch.pptx</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <button className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 border border-white/10 hover:bg-white/20 transition-all">
              <Play size={14} fill="white" />
              <span className="text-[10px] font-black tracking-widest uppercase">Start Presentation</span>
           </button>
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
              className={`px-8 py-3 text-[11px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-[#d24726]' : 'text-[#737685] hover:text-[#041b3c]'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#d24726] rounded-full z-20"></div>}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="h-28 px-8 flex items-center bg-white overflow-x-auto no-scrollbar border-b border-[#e8edff]/60 shadow-sm relative z-10">
           <div className="flex items-center h-full border-r border-[#e8edff] pr-6 mr-6">
              <div className="flex flex-col items-center gap-1 p-2 bg-[#fff1ed] text-[#d24726] rounded-xl cursor-pointer border border-[#ffded9]">
                 <Plus size={24} />
                 <span className="text-[10px] font-black uppercase tracking-tight">New Slide</span>
              </div>
              <div className="flex flex-col gap-1 ml-4">
                 <button className="flex items-center gap-2 px-3 py-1 hover:bg-[#f1f3ff] rounded-lg text-xs font-bold text-[#434654] text-left"><LayoutIcon size={14}/> Layout</button>
                 <button className="flex items-center gap-2 px-3 py-1 hover:bg-[#f1f3ff] rounded-lg text-xs font-bold text-[#434654] text-left"><Undo size={14}/> Reset</button>
              </div>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-3 flex-1 mt-2">
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px]">
                    <ImageIcon size={22} className="text-[#d24726]" />
                    <span className="text-[10px] font-bold">Images</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px]">
                    <Square size={22} className="text-[#d24726]" />
                    <span className="text-[10px] font-bold">Shapes</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[56px]">
                    <Type size={22} className="text-[#d24726]" />
                    <span className="text-[10px] font-bold">Text Box</span>
                 </div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Insert</span>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-3 flex-1 mt-2">
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[70px]">
                    <Wand2 size={22} className="text-[#d24726]" />
                    <span className="text-[10px] font-bold">Morph</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer min-w-[70px]">
                    <Monitor size={22} className="text-[#d24726]" />
                    <span className="text-[10px] font-bold">Present</span>
                 </div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Transitions</span>
           </div>

           <div className="ml-auto flex items-center gap-6">
              <button className="flex items-center gap-2.5 px-6 py-2.5 bg-[#d24726] text-white text-sm font-black rounded-xl shadow-lg shadow-[#d24726]/30 hover:bg-[#b2391b] hover:-translate-y-0.5 transition-all active:scale-95">
                <Save size={18} />
                SAVE DECK
              </button>
           </div>
        </div>
      </nav>

      {/* Slide Workspace */}
      <div className="flex-1 flex overflow-hidden">
         {/* Slide Sorter */}
         <aside className="w-64 bg-white border-r border-[#e8edff] flex flex-col shadow-[4px_0_15px_rgba(0,0,0,0.02)] relative z-10 overflow-y-auto custom-scrollbar p-6 space-y-6">
            <h3 className="text-[10px] font-black text-[#737685] uppercase tracking-[0.2em]">Slides</h3>
            {slides.map((slide, i) => (
              <div
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`group cursor-pointer transition-all relative ${currentSlide === i ? 'scale-105' : 'hover:scale-102 opacity-60 hover:opacity-100'}`}
              >
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-[#737685]">{i + 1}</span>
                <div className={`aspect-[16/9] bg-white border-2 rounded-lg shadow-sm flex flex-col items-center justify-center p-2 text-center overflow-hidden ${currentSlide === i ? 'border-[#d24726] ring-4 ring-[#d24726]/10' : 'border-[#e8edff]'}`}>
                   <span className="text-[6px] font-black uppercase text-[#041b3c] truncate w-full">{slide.title}</span>
                   <div className="w-8 h-0.5 bg-[#e8edff] my-1 rounded-full"></div>
                   <div className="w-12 h-0.5 bg-[#f1f3ff] rounded-full"></div>
                </div>
              </div>
            ))}
            <button className="aspect-[16/9] border-2 border-dashed border-[#e8edff] rounded-lg flex items-center justify-center text-[#737685] hover:border-[#d24726]/30 hover:text-[#d24726] transition-all">
               <Plus size={20} />
            </button>
         </aside>

         {/* Canvas Area */}
         <div className="flex-1 bg-[#f0f2f5] p-12 flex flex-col items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[16/9] w-full max-w-[1000px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.1)] rounded-sm flex flex-col items-center justify-center p-24 relative overflow-hidden group"
              >
                {/* Background Pattern Simulation */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d24726]/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d24726]/5 rounded-full -ml-16 -mb-16"></div>

                <motion.h1
                  layoutId={`title-${currentSlide}`}
                  className="text-6xl font-black text-[#041b3c] mb-8 text-center tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                   layoutId={`subtitle-${currentSlide}`}
                   className="text-2xl font-medium text-[#737685] text-center max-w-2xl leading-relaxed"
                >
                   {slides[currentSlide].subtitle}
                </motion.p>

                {/* Selection Handles Simulation */}
                <div className="absolute inset-0 border-2 border-[#d24726]/0 group-hover:border-[#d24726]/20 transition-all pointer-events-none"></div>
              </motion.div>
            </AnimatePresence>

            {/* View Controls Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl border border-white/20">
               <button className="p-2 hover:bg-white rounded-xl transition-all" onClick={() => setCurrentSlide(s => Math.max(0, s-1))}><ArrowLeft size={16}/></button>
               <span className="text-xs font-black text-[#041b3c] min-w-[60px] text-center">Slide {currentSlide + 1} of {slides.length}</span>
               <button className="p-2 hover:bg-white rounded-xl transition-all rotate-180" onClick={() => setCurrentSlide(s => Math.min(slides.length-1, s+1))}><ArrowLeft size={16}/></button>
            </div>
         </div>
      </div>

      {/* Status Bar */}
      <footer className="h-10 bg-white border-t border-[#e8edff] px-8 flex items-center justify-between text-[10px] text-[#737685] font-black uppercase tracking-widest shadow-[0_-4px_15px_rgba(0,0,0,0.03)] relative z-30">
        <div className="flex gap-10 items-center">
          <span className="flex items-center gap-2 text-[#041b3c]"><Presentation size={14} className="text-[#d24726]"/> SLIDE {currentSlide + 1} OF {slides.length}</span>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex gap-6 items-center pr-8 border-r border-[#e8edff]">
             <LayoutGrid size={14} className="cursor-pointer hover:text-[#d24726]" />
             <Monitor size={14} className="cursor-pointer hover:text-[#d24726]" />
          </div>
          <div className="flex items-center gap-5">
            <div className="w-40 h-2 bg-[#f1f3ff] rounded-full overflow-hidden shadow-inner relative">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#d24726] to-[#ff784e] w-3/4 rounded-full shadow-[0_0_8px_rgba(210,71,38,0.4)]"></div>
            </div>
            <span className="w-12 text-right text-[#041b3c]">75%</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SlidesApp;
