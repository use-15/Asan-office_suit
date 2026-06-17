import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Save, Settings, Maximize2, HelpCircle,
  ChevronDown, Search, Table as TableIcon,
  Filter, SortAsc, Hash, Percent, DollarSign,
  Undo, Redo, Copy, Scissors, Clipboard, Eraser, Plus, Minus
} from 'lucide-react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.min.css';
import HyperFormula from 'hyperformula';
import Handsontable from 'handsontable';

// register Handsontable's modules
registerAllModules();

const SheetsApp: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  const hotRef = useRef<any>(null);

  const tabs = ['File', 'Home', 'Insert', 'Page Layout', 'Formulas', 'Data', 'Review', 'View'];

  const hfInstance = HyperFormula.buildEmpty({
    licenseKey: 'internal-use-in-free-and-open-source-software',
  });

  const [data] = useState([
    ['Product', 'Q1 Sales', 'Q2 Sales', 'Total'],
    ['Asan Word', 4500, 5200, '=SUM(B2:C2)'],
    ['Asan Sheets', 3200, 4100, '=SUM(B3:C3)'],
    ['Asan Slides', 2100, 2800, '=SUM(B4:C4)'],
    ['Asan PDF', 1800, 2400, '=SUM(B5:C5)'],
  ]);

  return (
    <div className="h-screen flex flex-col bg-[#f4f5f7] font-['Inter'] overflow-hidden text-left">
      {/* Main Header */}
      <header className="h-12 px-6 bg-[#217346] text-white flex items-center justify-between shadow-lg relative z-30">
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/')} className="hover:bg-white/20 p-1.5 rounded-lg transition-all active:scale-90">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shadow-inner">
               <TableIcon size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest uppercase opacity-70">Asan Sheets</span>
              <span className="text-sm font-bold -mt-0.5">Sales Report 2026.xlsx</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 bg-black/20 rounded-full px-3 py-1 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-[10px] font-black tracking-widest uppercase">Formula Engine Active</span>
           </div>
           <div className="h-6 w-px bg-white/20 mx-2"></div>
           <div className="flex items-center gap-4">
              <Settings size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all hover:rotate-90" />
              <HelpCircle size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all" />
              <Maximize2 size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all" />
           </div>
        </div>
      </header>

      {/* Ribbon Interface */}
      <nav className="bg-white border-b border-[#e8edff] shadow-sm flex flex-col relative z-20">
        <div className="flex px-8 bg-[#f8f9fc] border-b border-[#e8edff]/50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-[11px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-[#217346]' : 'text-[#737685] hover:text-[#041b3c] hover:bg-white/50'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#217346] rounded-full z-20"></div>}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="h-28 px-8 flex items-center bg-white overflow-x-auto no-scrollbar border-b border-[#e8edff]/60 shadow-sm relative z-10">
           <div className="flex items-center h-full border-r border-[#e8edff] pr-6 mr-6 relative">
              <div className="grid grid-cols-2 gap-1 mb-2">
                 <button className="p-2 hover:bg-[#f1f3ff] rounded"><Copy size={16}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded"><Scissors size={16}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded"><Clipboard size={16}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded"><Eraser size={16}/></button>
              </div>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Clipboard</span>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-1.5 flex-1 mt-2">
                 <div className="flex items-center gap-2 bg-[#f1f3ff] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#c3c6d6]/50 min-w-[120px] justify-between">
                    <span>Inter</span>
                    <ChevronDown size={14} />
                 </div>
                 <div className="bg-[#f1f3ff] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#c3c6d6]/50">10</div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Font</span>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-2 flex-1 mt-2">
                 <button className="p-2 hover:bg-[#f1f3ff] rounded text-[#434654]"><DollarSign size={18}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded text-[#434654]"><Percent size={18}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded text-[#434654]"><Hash size={18}/></button>
                 <div className="w-px h-6 bg-[#e8edff]"></div>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded text-[#434654] flex flex-col items-center gap-0.5"><Minus size={12}/> .00</button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded text-[#434654] flex flex-col items-center gap-0.5"><Plus size={12}/> .00</button>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Number</span>
           </div>

           <div className="flex flex-col items-center h-full border-r border-[#e8edff] pr-6 mr-6 justify-center">
              <div className="flex items-center gap-3 flex-1 mt-2">
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer">
                    <Filter size={20} className="text-[#217346]" />
                    <span className="text-[10px] font-bold">Filter</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 p-2 hover:bg-[#f1f3ff] rounded-lg cursor-pointer">
                    <SortAsc size={20} className="text-[#217346]" />
                    <span className="text-[10px] font-bold">Sort</span>
                 </div>
              </div>
              <span className="mb-1 text-[9px] font-black text-[#737685] uppercase tracking-widest opacity-60">Data</span>
           </div>

           <div className="ml-auto flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <button className="p-2 hover:bg-[#f1f3ff] rounded-full text-[#737685]"><Undo size={18}/></button>
                 <button className="p-2 hover:bg-[#f1f3ff] rounded-full text-[#737685]"><Redo size={18}/></button>
              </div>
              <button className="flex items-center gap-2.5 px-6 py-2.5 bg-[#217346] text-white text-sm font-black rounded-xl shadow-lg shadow-[#217346]/30 hover:bg-[#1a5c37] hover:-translate-y-0.5 transition-all active:scale-95">
                <Save size={18} />
                SAVE BOOK
              </button>
           </div>
        </div>

        {/* Formula Bar */}
        <div className="h-10 bg-white border-b border-[#e8edff] flex items-center px-4 gap-2">
           <div className="w-16 h-7 bg-[#f1f3ff] rounded border border-[#e8edff] flex items-center justify-center text-xs font-bold text-[#041b3c]">
              A1
           </div>
           <div className="w-px h-5 bg-[#e8edff] mx-1"></div>
           <div className="text-sm font-bold text-[#737685] italic px-2 font-serif">fx</div>
           <input
              type="text"
              className="flex-1 h-7 px-3 text-sm outline-none font-medium text-[#172b4d]"
              placeholder="Enter formula or data..."
              defaultValue="=SUM(B2:C2)"
           />
        </div>
      </nav>

      {/* Spreadsheet Workspace */}
      <div className="flex-1 overflow-hidden bg-[#f0f2f5] p-1 flex flex-col">
         <div className="flex-1 bg-white shadow-inner overflow-hidden border border-[#e8edff]">
            <HotTable
              ref={hotRef}
              data={data}
              colHeaders={true}
              rowHeaders={true}
              width="100%"
              height="100%"
              licenseKey="non-commercial-and-evaluation"
              stretchH="all"
              contextMenu={true}
              filters={true}
              dropdownMenu={true}
              formulas={{
                engine: hfInstance,
              }}
              cells={(row) => {
                const cellProperties: any = {};
                if (row === 0) {
                  cellProperties.renderer = (instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any) => {
                    Handsontable.renderers.TextRenderer.apply(this, [instance, td, row, col, prop, value, cellProperties]);
                    td.style.fontWeight = 'bold';
                    td.style.backgroundColor = '#f8f9fc';
                    td.style.color = '#041b3c';
                    td.style.textAlign = 'center';
                  };
                }
                return cellProperties;
              }}
            />
         </div>

         {/* Sheet Tabs */}
         <div className="h-8 bg-white border-t border-[#e8edff] flex items-center px-4 gap-1">
            <div className="flex h-full items-center px-4 bg-[#e6f0ff] border-t-2 border-[#217346] text-xs font-bold text-[#217346] cursor-pointer">
               Sheet1
            </div>
            <div className="flex h-full items-center px-4 hover:bg-[#f1f3ff] text-xs font-bold text-[#737685] cursor-pointer">
               Sheet2
            </div>
            <button className="p-1 hover:bg-[#f1f3ff] rounded-full text-[#217346] ml-2">
               <Plus size={14} />
            </button>
         </div>
      </div>

      {/* Status Bar */}
      <footer className="h-8 bg-[#217346] text-white px-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest relative z-30">
        <div className="flex gap-8 items-center">
           <span>Ready</span>
           <div className="flex items-center gap-2">
              <Search size={12} />
              <span className="normal-case font-bold">Accessibility: Investigate</span>
           </div>
        </div>
        <div className="flex gap-8 items-center">
           <div className="flex gap-4 border-r border-white/20 pr-6">
              <span>AVERAGE: 3,525</span>
              <span>COUNT: 4</span>
              <span>SUM: 14,100</span>
           </div>
           <div className="flex items-center gap-4">
              <span className="cursor-pointer opacity-80 hover:opacity-100">100%</span>
              <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                 <div className="absolute inset-y-0 left-0 bg-white w-1/2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default SheetsApp;
