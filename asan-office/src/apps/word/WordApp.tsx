import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
  List as ListIcon, Save, File, ChevronDown, Type, Maximize2,
  Table as TableIcon, Image as ImageIcon, Square, BarChart3, Hash,
  MessageSquare, Clock, Settings, MoreHorizontal, Strikethrough, Search,
  Printer, Share2, Copy, Scissors, Clipboard, Undo, Redo, Eraser,
  Columns, Layout as LayoutIcon, FileText, Languages,
  BookOpen, Eye, ZoomIn, Info, CheckCircle2, AlertCircle,
  StickyNote, Quote, Sigma, Smile, HelpCircle, Plus
} from 'lucide-react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND, SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND, REDO_COMMAND
} from 'lexical';
import { mergeRegister } from '@lexical/utils';
import EditorNodes from '../../editor/EditorNodes';
import ModernTheme from '../../editor/themes/ModernTheme';

const initialConfig = {
  namespace: 'AsanWord',
  nodes: EditorNodes,
  theme: ModernTheme,
  onError: (error: Error) => {
    console.error(error);
  },
};

const ToolbarItem: React.FC<{ icon: any, label: string, onClick?: () => void, active?: boolean, small?: boolean }> = ({ icon: Icon, label, onClick, active, small }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg transition-all group min-w-[56px] ${active ? 'bg-[#e6f0ff] text-[#0052cc]' : 'hover:bg-[#f1f3ff] text-[#434654]'}`}
  >
    <Icon size={small ? 16 : 22} className={`${active ? 'text-[#0052cc]' : 'text-[#555f6c] group-hover:text-[#0052cc]'} transition-colors`} />
    <span className="text-[10px] font-bold uppercase tracking-tight opacity-80 group-hover:opacity-100 text-center">{label}</span>
  </button>
);

const ToolbarGroup: React.FC<{ label: string, children: React.ReactNode, noBorder?: boolean }> = ({ label, children, noBorder }) => (
  <div className={`flex flex-col items-center h-full ${!noBorder ? 'border-r border-[#e8edff] pr-6 mr-6' : ''}`}>
    <div className="flex items-center gap-1 flex-1">
      {children}
    </div>
    <span className="mt-1 text-[9px] font-black text-[#737685] uppercase tracking-[0.15em] opacity-60 text-center">{label}</span>
  </div>
);

const Toolbar: React.FC<{activeTab: string, font: string, showMargins: boolean, onToggleMargins: (v: boolean) => void}> = ({ activeTab, font, showMargins, onToggleMargins }) => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        1
      )
    );
  }, [editor, updateToolbar]);

  return (
    <div className="h-28 px-8 flex items-center bg-white overflow-x-auto no-scrollbar border-b border-[#e8edff]/60 shadow-sm relative z-10">
      {activeTab === 'File' && (
        <>
          <ToolbarGroup label="File Ops">
             <ToolbarItem icon={File} label="New" />
             <ToolbarItem icon={Save} label="Save" />
             <ToolbarItem icon={Printer} label="Print" />
             <ToolbarItem icon={Share2} label="Share" />
          </ToolbarGroup>
          <ToolbarGroup label="Recent" noBorder>
             <div className="flex flex-col gap-1 w-48 text-left">
                <div className="text-[10px] font-bold text-[#041b3c] truncate">Annual Report.docx</div>
                <div className="text-[10px] font-bold text-[#041b3c] truncate">Meeting Notes.docx</div>
             </div>
          </ToolbarGroup>
        </>
      )}

      {activeTab === 'Home' && (
        <>
          <ToolbarGroup label="Clipboard">
             <div className="grid grid-cols-2 gap-1">
                <button className="p-1.5 hover:bg-[#f1f3ff] rounded"><Copy size={14}/></button>
                <button className="p-1.5 hover:bg-[#f1f3ff] rounded"><Scissors size={14}/></button>
                <button className="p-1.5 hover:bg-[#f1f3ff] rounded"><Clipboard size={14}/></button>
                <button className="p-1.5 hover:bg-[#f1f3ff] rounded"><Eraser size={14}/></button>
             </div>
          </ToolbarGroup>
          <ToolbarGroup label="Font">
              <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-2 bg-[#f1f3ff] px-2.5 py-1 rounded text-xs cursor-pointer hover:bg-[#e8edff] min-w-[120px] justify-between border border-[#c3c6d6]/50 font-bold">
                      <span>{font}</span>
                      <ChevronDown size={12} />
                    </div>
                    <div className="bg-[#f1f3ff] px-2 py-1 rounded text-xs cursor-pointer hover:bg-[#e8edff] border border-[#c3c6d6]/50 font-bold">
                      11
                    </div>
                  </div>
                  <div className="flex gap-1 justify-center">
                    <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')} className={`p-1.5 rounded transition-colors ${isBold ? 'bg-[#e6f0ff] text-[#0052cc] border border-[#0052cc]' : 'hover:bg-[#f1f3ff] text-[#434654]'}`}><Bold size={14}/></button>
                    <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')} className={`p-1.5 rounded transition-colors ${isItalic ? 'bg-[#e6f0ff] text-[#0052cc] border border-[#0052cc]' : 'hover:bg-[#f1f3ff] text-[#434654]'}`}><Italic size={14}/></button>
                    <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')} className={`p-1.5 rounded transition-colors ${isUnderline ? 'bg-[#e6f0ff] text-[#0052cc] border border-[#0052cc]' : 'hover:bg-[#f1f3ff] text-[#434654]'}`}><Underline size={14}/></button>
                    <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')} className={`p-1.5 rounded transition-colors ${isStrikethrough ? 'bg-[#e6f0ff] text-[#0052cc] border border-[#0052cc]' : 'hover:bg-[#f1f3ff] text-[#434654]'}`}><Strikethrough size={14}/></button>
                  </div>
              </div>
          </ToolbarGroup>
          <ToolbarGroup label="Paragraph">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <button onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')} className="p-1.5 hover:bg-[#f1f3ff] rounded text-[#434654]"><AlignLeft size={16}/></button>
                  <button onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')} className="p-1.5 hover:bg-[#f1f3ff] rounded text-[#434654]"><AlignCenter size={16}/></button>
                  <button onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')} className="p-1.5 hover:bg-[#f1f3ff] rounded text-[#434654]"><AlignRight size={16}/></button>
                </div>
                <div className="flex gap-1 text-center justify-center">
                  <button className="p-1.5 hover:bg-[#f1f3ff] rounded text-[#434654]"><ListIcon size={16}/></button>
                  <button className="p-1.5 hover:bg-[#f1f3ff] rounded text-[#434654]"><Type size={16}/></button>
                </div>
              </div>
          </ToolbarGroup>
          <ToolbarGroup label="Styles" noBorder>
              <div className="flex gap-2">
                <div className="w-24 h-12 border border-[#c3c6d6]/50 rounded-lg bg-white p-2 text-[10px] flex flex-col justify-between cursor-pointer hover:border-[#0052cc] group transition-all shadow-sm">
                    <span className="font-black text-[#041b3c]">AaBbCcDd</span>
                    <span className="opacity-60 font-bold text-left">Normal</span>
                </div>
                <div className="w-24 h-12 border border-[#0052cc] rounded-lg bg-[#e6f0ff] p-2 text-[10px] flex flex-col justify-between cursor-pointer transition-all shadow-sm">
                    <span className="font-black text-[#0052cc]">AaBbCcDd</span>
                    <span className="text-[#0052cc] font-bold text-left">Heading 1</span>
                </div>
              </div>
          </ToolbarGroup>
        </>
      )}

      {activeTab === 'Insert' && (
        <>
          <ToolbarGroup label="Pages">
             <ToolbarItem icon={FileText} label="Blank Page" />
             <ToolbarItem icon={Maximize2} label="Break" />
          </ToolbarGroup>
          <ToolbarGroup label="Tables">
             <ToolbarItem icon={TableIcon} label="Table" />
          </ToolbarGroup>
          <ToolbarGroup label="Illustrations">
             <ToolbarItem icon={ImageIcon} label="Pictures" />
             <ToolbarItem icon={Square} label="Shapes" />
             <ToolbarItem icon={BarChart3} label="Charts" />
             <ToolbarItem icon={Maximize2} label="Screenshot" />
          </ToolbarGroup>
          <ToolbarGroup label="Header & Footer">
             <ToolbarItem icon={Hash} label="Page #" />
             <ToolbarItem icon={Type} label="Header" />
          </ToolbarGroup>
          <ToolbarGroup label="Symbols" noBorder>
             <ToolbarItem icon={Sigma} label="Equation" />
             <ToolbarItem icon={Smile} label="Emoji" />
          </ToolbarGroup>
        </>
      )}

      {activeTab === 'Layout' && (
        <>
          <ToolbarGroup label="Page Setup">
             <ToolbarItem icon={LayoutIcon} label="Margins" />
             <ToolbarItem icon={FileText} label="Orientation" />
             <ToolbarItem icon={Maximize2} label="Size" />
             <ToolbarItem icon={Columns} label="Columns" />
          </ToolbarGroup>
          <ToolbarGroup label="Paragraph">
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#737685]">
                   <span>Indent:</span>
                   <input type="text" defaultValue="0 cm" className="w-12 bg-[#f1f3ff] border-none rounded px-1" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#737685]">
                   <span>Spacing:</span>
                   <input type="text" defaultValue="8 pt" className="w-12 bg-[#f1f3ff] border-none rounded px-1" />
                </div>
             </div>
          </ToolbarGroup>
        </>
      )}

      {activeTab === 'References' && (
        <>
          <ToolbarGroup label="Table of Contents">
             <ToolbarItem icon={ListIcon} label="TOC" />
          </ToolbarGroup>
          <ToolbarGroup label="Footnotes">
             <ToolbarItem icon={StickyNote} label="Footnote" />
          </ToolbarGroup>
          <ToolbarGroup label="Citations">
             <ToolbarItem icon={Quote} label="Citation" />
             <div className="flex flex-col gap-1 justify-center ml-2 text-left">
                <div className="text-[9px] font-black text-[#737685]">Style:</div>
                <div className="bg-[#f1f3ff] px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer border border-[#c3c6d6]/50">APA</div>
             </div>
          </ToolbarGroup>
        </>
      )}

      {activeTab === 'Review' && (
        <>
          <ToolbarGroup label="Proofing">
             <ToolbarItem icon={CheckCircle2} label="Spelling" />
             <ToolbarItem icon={Hash} label="Word Count" />
          </ToolbarGroup>
          <ToolbarGroup label="Insights">
             <ToolbarItem icon={Info} label="Lookup" />
          </ToolbarGroup>
          <ToolbarGroup label="Comments">
             <ToolbarItem icon={MessageSquare} label="New" />
          </ToolbarGroup>
          <ToolbarGroup label="Tracking" noBorder>
             <ToolbarItem icon={Clock} label="Track" active />
             <div className="flex flex-col gap-1 ml-4 text-left items-start">
                <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-[#e6f0ff] rounded text-[10px] font-bold text-[#0052cc]"><CheckCircle2 size={12}/> Accept</button>
                <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-[#f1f3ff] rounded text-[10px] font-bold text-[#737685]"><AlertCircle size={12}/> Reject</button>
             </div>
          </ToolbarGroup>
        </>
      )}

      {activeTab === 'View' && (
        <>
          <ToolbarGroup label="Views">
             <ToolbarItem icon={BookOpen} label="Read" />
             <ToolbarItem icon={Eye} label="Print" active />
             <ToolbarItem icon={LayoutIcon} label="Web" />
          </ToolbarGroup>
          <ToolbarGroup label="Show">
             <div className="flex flex-col gap-1 text-left items-start">
                <label className="flex items-center gap-2 text-[10px] font-bold text-[#434654] cursor-pointer"><input type="checkbox" checked={showMargins} onChange={(e) => onToggleMargins(e.target.checked)} /> Ruler</label>
                <label className="flex items-center gap-2 text-[10px] font-bold text-[#434654] cursor-pointer"><input type="checkbox" /> Gridlines</label>
                <label className="flex items-center gap-2 text-[10px] font-bold text-[#434654] cursor-pointer"><input type="checkbox" defaultChecked /> Nav Pane</label>
             </div>
          </ToolbarGroup>
          <ToolbarGroup label="Zoom" noBorder>
             <ToolbarItem icon={ZoomIn} label="Zoom" />
             <ToolbarItem icon={FileText} label="100%" />
          </ToolbarGroup>
        </>
      )}

      <div className="ml-auto flex items-center gap-6">
          <div className="flex items-center gap-2">
             <button onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)} className="p-2 hover:bg-[#f1f3ff] rounded-full text-[#737685]"><Undo size={18}/></button>
             <button onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)} className="p-2 hover:bg-[#f1f3ff] rounded-full text-[#737685]"><Redo size={18}/></button>
          </div>
          <button className="flex items-center gap-2.5 px-6 py-2.5 bg-[#0052cc] text-white text-sm font-black rounded-xl shadow-lg shadow-[#0052cc]/30 hover:bg-[#0040a2] hover:-translate-y-0.5 transition-all active:scale-95">
            <Save size={18} />
            SAVE OFFLINE
          </button>
      </div>
    </div>
  );
};

const WordApp: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  const [font] = useState('Inter');
  const [showMargins, setShowMargins] = useState(true);

  const tabs = ['File', 'Home', 'Insert', 'Layout', 'References', 'Review', 'View'];

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="h-screen flex flex-col bg-[#f4f5f7] font-['Inter'] selection:bg-[#0052cc]/10 overflow-hidden">
        {/* Main Header / Window Controls */}
        <header className="h-12 px-6 bg-[#0052cc] text-white flex items-center justify-between shadow-lg relative z-30">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/')} className="hover:bg-white/20 p-1.5 rounded-lg transition-all active:scale-90">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shadow-inner">
                 <File size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black tracking-widest uppercase opacity-70">Asan Word</span>
                <span className="text-sm font-bold -mt-0.5">Annual Report 2026.docx</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-left">
             <div className="flex items-center gap-2 bg-black/20 rounded-full px-3 py-1 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-[10px] font-black tracking-widest uppercase">Safe & Offline</span>
             </div>
             <div className="h-6 w-px bg-white/20 mx-2"></div>
             <div className="flex items-center gap-4 text-left">
                <Settings size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all hover:rotate-90" />
                <HelpCircle size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all" />
                <Maximize2 size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-all" />
             </div>
          </div>
        </header>

        {/* Ribbon Interface */}
        <nav className="bg-white border-b border-[#e8edff] shadow-sm flex flex-col relative z-20">
          {/* Tab Selector */}
          <div className="flex px-8 bg-[#f8f9fc] border-b border-[#e8edff]/50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[11px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-[#0052cc]' : 'text-[#737685] hover:text-[#041b3c] hover:bg-white/50'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#0052cc] rounded-full z-20"></div>}
              </button>
            ))}
          </div>

          <Toolbar activeTab={activeTab} font={font} showMargins={showMargins} onToggleMargins={setShowMargins} />
        </nav>

        {/* Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* Navigation Pane Placeholder */}
          {activeTab === 'View' && (
            <aside className="w-80 bg-white border-r border-[#e8edff] p-8 flex flex-col gap-8 shadow-[4px_0_15px_rgba(0,0,0,0.02)] relative z-10 animate-in slide-in-from-left duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black text-[#737685] uppercase tracking-[0.2em]">Navigation</h3>
                <MoreHorizontal size={14} className="text-[#737685]" />
              </div>
              <div className="relative group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737685] group-focus-within:text-[#0052cc] transition-colors" size={14} />
                <input type="text" placeholder="Search document content..." className="w-full pl-10 pr-4 py-2.5 bg-[#f1f3ff] rounded-xl border border-transparent text-xs outline-none focus:bg-white focus:border-[#0052cc]/30 focus:ring-4 focus:ring-[#0052cc]/5 transition-all shadow-inner" />
              </div>
              <div className="flex gap-6 border-b border-[#e8edff]">
                 <button className="pb-3 text-xs font-black text-[#0052cc] border-b-2 border-[#0052cc] tracking-tight text-left">HEADINGS</button>
                 <button className="pb-3 text-xs font-bold text-[#737685] tracking-tight opacity-50 hover:opacity-100 transition-opacity text-left">PAGES</button>
                 <button className="pb-3 text-xs font-bold text-[#737685] tracking-tight opacity-50 hover:opacity-100 transition-opacity text-left">RESULTS</button>
              </div>
              <div className="flex flex-col gap-4 text-left">
                 <div className="text-[11px] text-[#737685] font-medium leading-relaxed bg-[#f9f9ff] p-4 rounded-xl border border-[#e8edff]/50 border-dashed">
                   Add headings to your document to create a professional table of contents and navigate your structure easily.
                 </div>
                 <div className="flex flex-col gap-2 opacity-40">
                    <div className="h-3 bg-[#e8edff] rounded-full w-3/4"></div>
                    <div className="h-3 bg-[#e8edff] rounded-full w-1/2"></div>
                    <div className="h-3 bg-[#e8edff] rounded-full w-5/6"></div>
                 </div>
              </div>
            </aside>
          )}

          {/* Document Canvas */}
          <div className="flex-1 overflow-auto bg-[#f0f2f5] p-16 flex justify-center custom-scrollbar relative text-left">
            {/* Header Simulation */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[816px] h-8 flex items-center justify-between px-24 opacity-40 pointer-events-none text-left">
               <span className="text-[10px] font-bold text-[#737685]">ASAN OFFICE ANNUAL REPORT</span>
               <span className="text-[10px] font-bold text-[#737685]">2026 CONFIDENTIAL</span>
            </div>

            <div className="w-[816px] min-h-[1056px] bg-white shadow-[0_30px_120px_rgba(0,82,204,0.1)] p-[96px] relative ring-1 ring-black/5 rounded-sm transition-all text-left">
              {/* Ruler simulation */}
              {showMargins && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-8 border-b border-[#e8edff] flex items-end px-24 gap-[24px]">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`w-px ${i % 5 === 0 ? 'h-3 bg-[#737685]' : 'h-1.5 bg-[#cbd5e1]'}`}></div>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 bottom-0 w-8 border-r border-[#e8edff] flex flex-col items-end py-24 gap-[24px]">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className={`h-px ${i % 5 === 0 ? 'w-3 bg-[#737685]' : 'w-1.5 bg-[#cbd5e1]'}`}></div>
                    ))}
                  </div>
                </>
              )}

              <RichTextPlugin
                contentEditable={<ContentEditable className="outline-none min-h-[864px] text-[16px] text-[#172b4d] leading-relaxed text-left" />}
                placeholder={<div className="absolute top-[96px] left-[96px] text-[#c3c6d6] pointer-events-none text-[16px] font-medium italic text-left">Start crafting your masterpiece...</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <TablePlugin />
              <ListPlugin />
              <LinkPlugin />
            </div>

            {/* Footer Simulation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[816px] h-8 flex items-center justify-center px-24 opacity-40 pointer-events-none text-left">
               <span className="text-[10px] font-bold text-[#737685]">PAGE 1</span>
            </div>
          </div>

          {/* Comments Pane Placeholder */}
          {activeTab === 'Review' && (
             <aside className="w-80 bg-white border-l border-[#e8edff] p-8 flex flex-col gap-8 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between">
                   <h3 className="text-[10px] font-black text-[#041b3c] uppercase tracking-[0.2em]">Comments</h3>
                   <button className="p-1.5 hover:bg-[#f1f3ff] rounded-lg transition-colors"><MoreHorizontal size={18} className="text-[#737685]" /></button>
                </div>
                <div className="p-5 bg-gradient-to-br from-white to-[#f9f9ff] rounded-2xl border border-[#e8edff] shadow-sm hover:shadow-lg transition-all group border-l-4 border-l-[#0052cc] text-left">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-[#0052cc] text-white text-xs flex items-center justify-center font-black shadow-lg shadow-[#0052cc]/20">JD</div>
                      <div className="text-left">
                        <span className="text-xs font-black block text-[#041b3c]">Jane Doe</span>
                        <span className="text-[9px] text-[#737685] font-black uppercase tracking-tighter opacity-60 text-left">2 minutes ago</span>
                      </div>
                   </div>
                   <p className="text-xs text-[#434654] leading-loose font-medium text-left">Should we update the section title to something more descriptive of the results?</p>
                   <div className="mt-5 flex gap-4 pt-4 border-t border-[#e8edff]">
                      <button className="text-[10px] font-black uppercase tracking-widest text-[#0052cc] hover:underline">Reply</button>
                      <button className="text-[10px] font-black uppercase tracking-widest text-[#737685] hover:underline opacity-60 hover:opacity-100">Resolve</button>
                   </div>
                </div>
                <button className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-[#e8edff] rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#737685] hover:border-[#0052cc]/30 hover:text-[#0052cc] transition-all">
                   <Plus size={14}/> Add New Comment
                </button>
             </aside>
          )}
        </div>

        {/* Status Bar */}
        <footer className="h-10 bg-white border-t border-[#e8edff] px-8 flex items-center justify-between text-[10px] text-[#737685] font-black uppercase tracking-widest shadow-[0_-4px_15px_rgba(0,0,0,0.03)] relative z-30">
          <div className="flex gap-10 items-center">
            <span className="flex items-center gap-2 text-[#041b3c]"><File size={14} className="text-[#0052cc]"/> PAGE 1 OF 1</span>
            <span className="hover:text-[#0052cc] cursor-pointer transition-colors">0 WORDS</span>
            <span className="flex items-center gap-2 text-[#0052cc] cursor-pointer hover:underline normal-case font-black tracking-tight"><CheckCircle2 size={14}/> NO ACCESSIBILITY ISSUES</span>
          </div>
          <div className="flex gap-10 items-center">
            <span className="cursor-pointer hover:text-[#0052cc] transition-colors flex items-center gap-2"><LayoutIcon size={14}/> PRINT LAYOUT</span>
            <span className="cursor-pointer hover:text-[#0052cc] transition-colors flex items-center gap-2"><Languages size={14}/> ENGLISH (US)</span>
            <div className="flex items-center gap-5 pr-8 border-r border-[#e8edff]">
              <div className="w-40 h-2 bg-[#f1f3ff] rounded-full overflow-hidden shadow-inner relative">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0052cc] to-[#00a3ff] w-1/2 rounded-full shadow-[0_0_8px_rgba(0,82,204,0.4)]"></div>
              </div>
              <span className="w-12 text-right text-[#041b3c]">100%</span>
            </div>
            <div className="flex gap-5">
               <div className="w-5 h-5 rounded-lg bg-[#e8edff] border border-[#c3c6d6]/50 cursor-pointer hover:bg-[#cadaff] transition-all hover:scale-110"></div>
               <div className="w-5 h-5 rounded-lg bg-[#0052cc] shadow-lg shadow-[#0052cc]/30 cursor-pointer scale-125 border-2 border-white ring-2 ring-[#0052cc]/20"></div>
               <div className="w-5 h-5 rounded-lg bg-[#e8edff] border border-[#c3c6d6]/50 cursor-pointer hover:bg-[#cadaff] transition-all hover:scale-110"></div>
            </div>
          </div>
        </footer>
      </div>
    </LexicalComposer>
  );
};

export default WordApp;
