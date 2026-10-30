import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { 
  ShieldCheck, 
  Building2, 
  Scale, 
  Landmark, 
  MapPin, 
  ExternalLink,
  Clock,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Layers,
  Award
} from 'lucide-react';
import { NavView } from './Navbar';

interface HomeViewProps {
  onNavigate: (view: NavView) => void;
  onOpenComplianceModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenComplianceModal,
}) => {
  const upcoming = COMPANY_DATA.upcomingProject;

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section - Clean Typographic & Architectural Layout (No Pictures) */}
      <section className="relative overflow-hidden pt-8 md:pt-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
                <span>Registered Promoter</span>
                <span aria-hidden="true">·</span>
                <span>UPRERA Compliance Portal</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#0B192C] leading-tight tracking-tight text-balance">
                Building Infrastructure with Uncompromising Integrity
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <strong className="text-slate-900 font-semibold">{COMPANY_DATA.legalName}</strong> is a Lucknow-based infrastructure and construction developer dedicated to high-standard civil development, rigorous regulatory compliance, and total transparency under the Uttar Pradesh Real Estate Regulatory Authority.
              </p>

              {/* Statutory Credentials Preview */}
              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Statutory Registration Identifiers</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">UPRERA Promoter ID:</span>{' '}
                    <span className="font-mono font-bold text-[#0B192C]">{COMPANY_DATA.upreraId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Corporate CIN:</span>{' '}
                    <span className="font-mono text-slate-800">{COMPANY_DATA.cin}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Incorporation Date:</span>{' '}
                    <span className="font-medium text-slate-800">{COMPANY_DATA.incorporationDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Official Regulatory Portal:</span>{' '}
                    <a
                      href={COMPANY_DATA.regulatory.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-700 hover:underline inline-flex items-center gap-0.5"
                    >
                      up-rera.in
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenComplianceModal}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Verify UPRERA Details</span>
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Company Profile & Board</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Right Architectural Statutory Monogram Card (No pictures) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-2xl border border-slate-800 bg-[#0B192C] text-white p-7 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                      <span className="font-serif-title text-xl font-bold text-amber-400">KS</span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-amber-300">
                      UPRERAPRM464597
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                      Statutory Promoter Accreditation
                    </span>
                    <h2 className="text-xl font-serif-title font-bold text-white">
                      {COMPANY_DATA.legalName}
                    </h2>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Incorporated under the Companies Act 2013 and accredited as a registered promoter under the Real Estate (Regulation and Development) Act, 2016.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Registered Office:</span>
                    <span className="text-slate-200 font-medium text-right">Indira Nagar, Lucknow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Class of Company:</span>
                    <span className="text-slate-200 font-medium">{COMPANY_DATA.classOfCompany}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Official Email:</span>
                    <span className="text-amber-300 font-mono">{COMPANY_DATA.contact.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Compliance Status:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Active & Compliant
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenComplianceModal}
                  className="w-full py-2.5 text-xs font-semibold text-[#0B192C] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Inspect Official UPRERA Dossier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discrete Upcoming Project Disclosure Strip (No pictures) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-100/70 rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Upcoming Project · Launching Soon</span>
              <span className="text-slate-400">·</span>
              <span className="text-amber-700 font-medium">Under Approval in UP RERA</span>
            </div>
            <h3 className="font-serif-title font-bold text-lg text-slate-900">
              {upcoming.title}
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Planned 5-acre gated township in Lucknow with 18m main road and approx 30,000 sqft main park. Approved by Jila Panchyat Lucknow on 27-08-2026.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>View Statutory Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </button>
        </div>
      </section>

      {/* Statutory Pillar Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-t border-slate-200 pt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
              Statutory Governance
            </p>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#0B192C] mt-1">
              Official Corporate & Regulatory Standing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#0B192C]">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-semibold text-base text-slate-900">
                MCA Registered
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Incorporated on January 27, 2025 under the Companies Act, 2013 with complete statutory filings.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                CIN: {COMPANY_DATA.cin}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-semibold text-base text-slate-900">
                UPRERA Accredited
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Licensed promoter adhering strictly to Section 4 & 11 transparency directives and disclosure norms.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-[#0B192C]">
                ID: {COMPANY_DATA.upreraId}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#0B192C]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-semibold text-base text-slate-900">
                Statutory Governance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct consumer grievance mechanism and active board oversight under UPRERA transparency guidelines.
              </p>
              <div className="pt-2 text-xs font-medium text-emerald-700">
                Status: In Good Standing
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#0B192C]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-semibold text-base text-slate-900">
                Lucknow Headquarters
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centrally situated registered office at Indira Nagar, Lucknow, providing accessible consumer assistance.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                PIN: 226016, Uttar Pradesh
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official UPRERA Inspection Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border border-amber-200 bg-amber-50/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Consumer & Regulatory Notice</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif-title font-bold text-[#0B192C]">
              Verify Our Credentials on the Official UPRERA Portal
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
              In accordance with Uttar Pradesh Real Estate Regulatory Authority mandates, our full promoter registration certificate, compliance status, and corporate filings are publicly accessible using Registration ID <strong className="font-mono text-slate-900">{COMPANY_DATA.upreraId}</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenComplianceModal}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#0B192C] bg-white border border-amber-300 rounded-lg shadow-2xs hover:bg-amber-100/50 transition-colors cursor-pointer"
            >
              Step-by-Step Guide
            </button>
            <a
              href={COMPANY_DATA.regulatory.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Go to up-rera.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
