import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { ShieldCheck, ExternalLink, MapPin, Mail } from 'lucide-react';
import { NavView } from './Navbar';

interface FooterProps {
  onNavigate: (view: NavView) => void;
  onOpenComplianceModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenComplianceModal,
}) => {
  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-serif-title font-bold text-lg text-white block">
              {COMPANY_DATA.legalName}
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A private limited infrastructure development company incorporated in Lucknow, Uttar Pradesh. Authorized promoter registered under Uttar Pradesh Real Estate Regulatory Authority.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
              <span className="font-mono text-slate-300">CIN: {COMPANY_DATA.cin}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="font-mono text-amber-400">UPRERA: {COMPANY_DATA.upreraId}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Website Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home (Corporate Overview)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us & Board of Directors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Upcoming Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Grievance Redressal
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenComplianceModal}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>UPRERA Compliance Dossier</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="space-y-2 text-slate-400 text-xs leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.registeredOffice.fullAddress}</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_DATA.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DATA.contact.email}
                </a>
              </p>
              <p className="text-slate-400">
                UPRERA Promoter Registration: <strong className="font-mono text-amber-300">{COMPANY_DATA.upreraId}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* UPRERA Statutory Disclaimer */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
            <p className="font-semibold text-slate-300 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Statutory Disclosure & RERA Disclaimer
            </p>
            <p>
              This website is maintained by <strong className="text-slate-200">{COMPANY_DATA.legalName}</strong> in compliance with the public digital disclosure requirements mandated by the Uttar Pradesh Real Estate Regulatory Authority (UPRERA) under the Real Estate (Regulation and Development) Act, 2016. Promoter Registration ID: <strong className="font-mono text-amber-300">{COMPANY_DATA.upreraId}</strong>.
            </p>
            <p>
              Citizens, prospective buyers, and regulatory officers can cross-verify all promoter and corporate records directly on the official regulatory portal at{' '}
              <a
                href={COMPANY_DATA.regulatory.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                www.up-rera.in
                <ExternalLink className="w-2.5 h-2.5" />
              </a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_DATA.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>Incorporated: January 2025</span>
              <span>·</span>
              <span>CIN: {COMPANY_DATA.cin}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
