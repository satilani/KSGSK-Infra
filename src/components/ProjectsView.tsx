import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { 
  Building2, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Info,
  Calendar,
  Landmark,
  Compass,
  Trees,
  Maximize2,
  FileCheck2
} from 'lucide-react';
import { NavView } from './Navbar';

interface ProjectsViewProps {
  onNavigate: (view: NavView) => void;
  onOpenComplianceModal: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onNavigate,
  onOpenComplianceModal,
}) => {
  const project = COMPANY_DATA.upcomingProject;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14 space-y-12">
      {/* Page Title & Breadcrumb */}
      <div className="space-y-3 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span>Pipeline & Development Disclosures</span>
          <span aria-hidden="true">·</span>
          <span>UPRERA Compliance</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#0B192C]">
              Upcoming Projects
            </h1>
            <p className="text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Statutory disclosure of projects planned by <strong className="text-slate-900">{COMPANY_DATA.legalName}</strong> currently undergoing regulatory review and approvals.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Launching Soon · Under Approval</span>
            </span>
          </div>
        </div>
      </div>

      {/* Mandatory Statutory Compliance Alert (Sections 3 & 12 RERA) */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
        <div className="flex items-center gap-2 text-slate-800 font-semibold uppercase tracking-wider text-[11px]">
          <Info className="w-4 h-4 text-blue-600" />
          <span>Statutory Disclosure Notice (Section 3 of RERA Act, 2016)</span>
        </div>
        <p className="leading-relaxed">
          The project listed below is an <strong>upcoming development currently under approval with the Uttar Pradesh Real Estate Regulatory Authority (UP RERA)</strong>. This disclosure is provided solely for regulatory compliance and transparency as required for registered promoters (Promoter ID: <span className="font-mono text-slate-800 font-semibold">{COMPANY_DATA.upreraId}</span>). <strong>No sales, commercial marketing, bookings, or financial advances are being solicited or accepted</strong> until the final registration certificate is granted by UP RERA.
        </p>
      </div>

      {/* Understated Upcoming Project Card (No Pictures - Typographic & Blueprint Layout) */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Blueprint / Schematic Matrix (No Pictures) */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  {project.statusBadge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  Proposed Gated Township
                </span>
                <h2 className="font-serif-title font-bold text-2xl sm:text-3xl text-white">
                  {project.title}
                </h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{project.location}</span>
                </p>
              </div>

              {/* Blueprint Metric Highlights */}
              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-[11px]">Proposed Township Area</span>
                  <p className="text-base font-bold text-white font-mono">{project.extent}</p>
                  <p className="text-[10px] text-slate-400">Master-planned gated perimeter</p>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-[11px]">Main Road Access</span>
                  <p className="text-base font-bold text-amber-300 font-mono">{project.mainRoad}</p>
                  <p className="text-[10px] text-slate-400">Approx. 60-foot wide arterial boulevard</p>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-[11px]">Main Park & Recreation</span>
                  <p className="text-base font-bold text-emerald-400 font-mono">{project.mainPark}</p>
                  <p className="text-[10px] text-slate-400">Dedicated green open space</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Approved by Jila Panchyat Lucknow (27-08-2026)
            </div>
          </div>

          {/* Right Details Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Project Description
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>

              {/* Sanction Details */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                  Statutory Approvals & Review
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
                    <span className="text-slate-500 block text-[11px]">Local Sanction</span>
                    <p className="font-semibold text-slate-900">Jila Panchyat Lucknow</p>
                    <p className="text-[11px] text-emerald-700 font-medium">Approved on 27-08-2026</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
                    <span className="text-slate-500 block text-[11px]">RERA Regulatory Authority</span>
                    <p className="font-semibold text-slate-900">UP RERA</p>
                    <p className="text-[11px] text-amber-700 font-medium">Under Approval in UP RERA</p>
                  </div>
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                  Planning & Engineering Outline
                </span>
                <ul className="space-y-1.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenComplianceModal}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Verify Promoter Credentials</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Contact Compliance Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
