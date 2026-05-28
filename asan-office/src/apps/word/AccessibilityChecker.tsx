import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AccessibilityChecker: React.FC = () => {
  return (
    <div className="p-4 bg-white border border-[#e8edff] rounded-xl shadow-lg">
      <h4 className="text-xs font-black uppercase mb-3 text-[#737685]">Accessibility Checker</h4>
      <div className="flex items-center gap-2 text-green-600 mb-2">
        <CheckCircle2 size={16} />
        <span className="text-xs font-bold">No issues found</span>
      </div>
      <p className="text-[10px] text-[#737685]">Your document is accessible to people with disabilities.</p>
    </div>
  );
};
