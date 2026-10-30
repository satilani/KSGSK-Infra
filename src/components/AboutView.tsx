import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Check, 
  MapPin,
  Calendar,
  Layers,
  FileCheck2,
  Mail,
  Clock
} from 'lucide-react';

export const AboutView: React.FC<{ onOpenComplianceModal: () => void }> = ({ onOpenComplianceModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14 space-y-16">
      {/* Page Title & Breadcrumb Header */}
      <div className="space-y-3 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>Corporate Overview</span>
          <span aria-hidden="true">·</span>
          <span>Statutory Disclosures</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#0B192C]">
          About KSGSK Infra Projects Private Limited
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Established in Lucknow, Uttar Pradesh, KSGSK Infra Projects Private Limited is built upon institutional governance, technical engineering excellence, and full compliance under the Real Estate (Regulation and Development) Act, 2016.
        </p>
      </div>

      {/* Corporate Narrative & Registered Office (No Pictures) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#0B192C]">
              Committed to Quality Infrastructure & Regulatory Discipline
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Incorporated on <strong className="text-slate-900">January 27, 2025</strong> under the Companies Act, 2013, KSGSK Infra Projects Private Limited was formed with a focused vision: to deliver enduring, ethically governed residential and civil infrastructure across Uttar Pradesh.
              </p>
              <p>
                Headquartered at <strong className="text-slate-900">A-52, Indira Nagar, Lucknow</strong>, our operations are strictly aligned with state municipal guidelines and the statutory requirements of the Uttar Pradesh Real Estate Regulatory Authority (UPRERA). We prioritize client trust, structural durability, clear land titles, and complete financial transparency.
              </p>
              <p>
                As an accredited promoter under UPRERA Registration Number <strong className="font-mono text-slate-900">{COMPANY_DATA.upreraId}</strong>, our governance framework ensures that every endeavor follows statutory escrow provisions, carpet area metrics, and rigorous quarterly reporting.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenComplianceModal}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Inspect Official UPRERA Registration</span>
            </button>
          </div>
        </div>

        {/* Right Structured Office & Governance Card (No Pictures) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 shadow-md flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Corporate Domicile
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {COMPANY_DATA.cin}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-title font-bold text-lg text-white">
                  Registered Headquarters
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_DATA.registeredOffice.fullAddress}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Email</span>
                    <span className="text-white font-medium">{COMPANY_DATA.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Working Hours</span>
                    <span className="text-white">{COMPANY_DATA.contact.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Regulatory Agency</span>
                    <span className="text-white">UP Real Estate Regulatory Authority</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              Maintained strictly for statutory public disclosures under the RERA Act, 2016.
            </div>
          </div>
        </div>
      </section>

      {/* Statutory MCA & Regulatory Registry Table */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
            Legal Disclosures
          </span>
          <h2 className="text-2xl font-serif-title font-bold text-[#0B192C] mt-1">
            Corporate Registry Information
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Official statutory records registered with the Ministry of Corporate Affairs (MCA).
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70 w-1/3">
                    Company Name
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-900">
                    {COMPANY_DATA.legalName}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70">
                    Corporate Identification Number (CIN)
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold text-[#0B192C]">
                    {COMPANY_DATA.cin}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70">
                    UPRERA Promoter Registration Number
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-amber-700">
                    {COMPANY_DATA.upreraId}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70">
                    Date of Incorporation
                  </td>
                  <td className="py-3 px-4 text-slate-800">
                    {COMPANY_DATA.incorporationDate}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70">
                    Company Classification & Category
                  </td>
                  <td className="py-3 px-4 text-slate-800">
                    {COMPANY_DATA.companyCategory} · {COMPANY_DATA.companySubCategory} ({COMPANY_DATA.classOfCompany})
                  </td>
                </tr>


                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70">
                    Registered Office Address
                  </td>
                  <td className="py-3 px-4 text-slate-800">
                    {COMPANY_DATA.registeredOffice.fullAddress}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700 bg-slate-50/70">
                    Operating Status
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      Active (In Good Standing)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
            Governance Leadership
          </span>
          <h2 className="text-2xl font-serif-title font-bold text-[#0B192C] mt-1">
            Board of Directors & Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Directly accountable for corporate governance, operational execution, and statutory RERA compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPANY_DATA.directors.map((director, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0B192C]">
                  <Users className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  {director.designation}
                </span>
              </div>

              <div>
                <h3 className="font-serif-title font-bold text-lg text-slate-900">
                  {director.name}
                </h3>
                <p className="text-xs font-medium text-[#C5A059] mt-0.5">
                  Signatory & Board Member · KSGSK Infra Projects
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {director.roleDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statutory RERA Compliance Charter */}
      <section className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B192C]">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>Statutory Compliance Charter</span>
        </div>
        <h3 className="text-xl font-serif-title font-bold text-slate-900">
          Principles Under RERA Act 2016 & UPRERA Regulations
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          KSGSK Infra Projects Private Limited adheres to statutory transparency principles formulated by the Uttar Pradesh Real Estate Regulatory Authority:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h4 className="font-semibold text-slate-900">Carpet Area Truthfulness</h4>
            <p className="text-slate-600">
              Strict disclosure based exclusively on RERA-defined Carpet Area, ensuring zero ambiguity for allottees.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h4 className="font-semibold text-slate-900">Escrow Account Governance</h4>
            <p className="text-slate-600">
              Maintaining 70% project fund deposits in designated scheduled bank accounts for dedicated development use.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h4 className="font-semibold text-slate-900">Quarterly Progress (KUPR)</h4>
            <p className="text-slate-600">
              Timely filing of Quarterly Progress Reports certified by authorized architects, engineers, and statutory auditors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
