import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

const OFFICIAL_GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0OlYDuCkPvZouOCfYnm4_sAT4gjS4DXzDPI20jJa4-buDFA/viewform?embedded=true";
const DIRECT_GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0OlYDuCkPvZouOCfYnm4_sAT4gjS4DXzDPI20jJa4-buDFA/viewform";

export const ContactView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14 space-y-12">
      {/* Title */}
      <div className="space-y-3 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>Direct Contact & Redressal Desk</span>
          <span aria-hidden="true">·</span>
          <span>UPRERA Compliance</span>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#0B192C]">
            Contact & Grievance Cell
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mt-2">
            For statutory inquiries, consumer grievances, buyer communications, or regulatory correspondence with <strong className="text-slate-900">{COMPANY_DATA.legalName}</strong>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Registered Office & Grievance Officer details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Statutory Office Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="font-serif-title font-bold text-lg text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
              Registered Office
            </h2>
            <div className="text-sm text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">{COMPANY_DATA.legalName}</p>
              <p>{COMPANY_DATA.registeredOffice.addressLine1}, {COMPANY_DATA.registeredOffice.area}</p>
              <p>{COMPANY_DATA.registeredOffice.city}, {COMPANY_DATA.registeredOffice.state} – {COMPANY_DATA.registeredOffice.pincode}</p>
              <p className="text-slate-500">{COMPANY_DATA.registeredOffice.country}</p>
            </div>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center gap-2">
              <span className="font-mono">UPRERA Promoter ID: {COMPANY_DATA.upreraId}</span>
            </div>
          </div>

          {/* Grievance & Nodal Contact Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="font-serif-title font-bold text-lg text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              Statutory Nodal Officer
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designated officer responsible for customer grievances, RERA documentation requests, and statutory notices under UPRERA guidelines.
            </p>
            <div className="space-y-3 pt-1 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block text-xs">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_DATA.contact.email}`}
                    className="font-medium text-blue-700 hover:underline"
                  >
                    {COMPANY_DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block text-xs">Operating Hours</span>
                  <p className="text-slate-800 font-medium">{COMPANY_DATA.contact.workingHours}</p>
                  <p className="text-xs text-slate-500">{COMPANY_DATA.contact.workingDays}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Forms Connection Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct Google Form Integration</span>
            </div>
            <p className="leading-relaxed">
              The form on the right is connected directly to <strong className="text-slate-900">{COMPANY_DATA.contact.email}</strong> via Google Forms. All inquiries and grievances are recorded in real time and notified directly to the designated compliance desk.
            </p>
          </div>
        </div>

        {/* Right: Seamlessly Embedded Official Google Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Header bar above embedded Google Form */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-serif-title font-bold text-base text-slate-900">
                  Official Inquiry & Grievance Form
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Managed via Google Forms · <strong className="text-slate-700">{COMPANY_DATA.contact.email}</strong>
                </p>
              </div>

              <a
                href={DIRECT_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-[#0B192C] bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>Open in Full Screen</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Embedded Google Form Iframe */}
            <div className="w-full bg-white relative">
              <iframe
                src={OFFICIAL_GOOGLE_FORM_URL}
                width="100%"
                height="1050"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="KSGSK Infra Projects Private Limited Official Google Form"
                className="w-full border-none min-h-[950px] block"
              >
                Loading Official Google Form…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
