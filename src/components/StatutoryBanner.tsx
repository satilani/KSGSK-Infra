import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export const StatutoryBanner: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="bg-[#0B192C] text-slate-300 border-b border-slate-800 text-xs py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-medium">
          <div className="flex items-center gap-1.5 text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-semibold text-slate-100">UPRERA Statutory Disclosure</span>
          </div>
          
          <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
          
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">CIN:</span>
            <span className="font-mono text-slate-200">{COMPANY_DATA.cin}</span>
            <button
              onClick={() => handleCopy(COMPANY_DATA.cin, 'cin')}
              className="text-slate-400 hover:text-amber-400 transition-colors p-0.5 rounded cursor-pointer"
              title="Copy CIN"
              aria-label="Copy CIN"
            >
              {copiedKey === 'cin' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">UPRERA Reg ID:</span>
            <span className="font-mono font-semibold text-amber-300">{COMPANY_DATA.upreraId}</span>
            <button
              onClick={() => handleCopy(COMPANY_DATA.upreraId, 'rera')}
              className="text-slate-400 hover:text-amber-400 transition-colors p-0.5 rounded cursor-pointer"
              title="Copy UPRERA Registration Number"
              aria-label="Copy UPRERA Registration Number"
            >
              {copiedKey === 'rera' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2 flex items-center gap-1 cursor-pointer"
          >
            <span>Inspection Guide</span>
          </button>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <a
            href={COMPANY_DATA.regulatory.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>up-rera.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
