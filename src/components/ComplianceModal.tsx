import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { X, ExternalLink, ShieldCheck, Copy, Check, FileCheck, Building } from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 id="modal-title" className="text-base md:text-lg font-serif-title font-bold text-white">
                UPRERA Statutory Disclosure Dossier
              </h2>
              <p className="text-xs text-slate-300">
                Official promoter accreditation under RERA Act 2016
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Top Verification Card */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-900">
                OFFICIAL PROMOTER REGISTRATION NUMBER
              </span>
              <button
                onClick={() => copyText(COMPANY_DATA.upreraId, 'rera')}
                className="text-xs font-medium text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
              >
                {copied === 'rera' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>
            <p className="font-mono text-2xl font-bold text-[#0B192C] tracking-wide">
              {COMPANY_DATA.upreraId}
            </p>
            <p className="text-xs text-amber-800 leading-relaxed">
              Issued by Uttar Pradesh Real Estate Regulatory Authority (UPRERA) to{' '}
              <strong className="text-slate-900">{COMPANY_DATA.legalName}</strong> as an authorized real estate promoter.
            </p>
          </div>

          {/* Quick Regulatory Facts (RoC removed) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="border border-slate-200 rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Corporate ID (CIN)</span>
                <button
                  onClick={() => copyText(COMPANY_DATA.cin, 'cin')}
                  className="hover:text-slate-900 cursor-pointer"
                >
                  {copied === 'cin' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <p className="font-mono font-semibold text-slate-900 text-xs">
                {COMPANY_DATA.cin}
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3 space-y-1">
              <span className="text-xs text-slate-500 block">Company Status</span>
              <p className="font-semibold text-emerald-700 text-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Active & Compliant</span>
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3 space-y-1">
              <span className="text-xs text-slate-500 block">Incorporation Date</span>
              <p className="font-semibold text-slate-900 text-xs">
                {COMPANY_DATA.incorporationDate}
              </p>
            </div>
          </div>

          {/* Step-by-Step Portal Verification Guide */}
          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/70 space-y-3">
            <h3 className="font-semibold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-600" />
              How to Verify on the Official UPRERA Portal
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600 leading-relaxed">
              <li>
                Navigate to the official portal:{' '}
                <a
                  href={COMPANY_DATA.regulatory.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  www.up-rera.in
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                In the top navigation menu, click on <strong className="text-slate-800">"Registrations"</strong> &rarr; <strong className="text-slate-800">"Promoter"</strong>.
              </li>
              <li>
                In the search box, paste Promoter Registration Number:{' '}
                <span className="font-mono font-bold text-slate-900 bg-white px-1.5 py-0.5 border border-slate-200 rounded">
                  {COMPANY_DATA.upreraId}
                </span>{' '}
                or company name <span className="font-semibold text-slate-900">{COMPANY_DATA.legalName}</span>.
              </li>
              <li>
                Access the official government records, approved certifications, and statutory filings.
              </li>
            </ol>
          </div>

          {/* Registered Office & Contact */}
          <div className="border border-slate-200 rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
              <Building className="w-4 h-4 text-slate-600" />
              Statutory Registered Office
            </h3>
            <p className="text-xs text-slate-700 font-medium">
              {COMPANY_DATA.registeredOffice.fullAddress}
            </p>
            <p className="text-xs text-slate-500">
              Official Grievance Nodal Contact: <span className="text-slate-800 font-medium">{COMPANY_DATA.contact.email}</span>
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Compliant with Section 11 & 12 of RERA Act, 2016
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={COMPANY_DATA.regulatory.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Visit up-rera.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
