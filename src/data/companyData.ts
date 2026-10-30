export interface Director {
  name: string;
  designation: string;
  roleDescription: string;
}

export interface UpcomingProject {
  id: string;
  title: string;
  category: string;
  statusBadge: string;
  location: string;
  extent: string;
  mainRoad: string;
  mainPark: string;
  approvalDate: string;
  approvingAuthority: string;
  reraStatus: string;
  description: string;
  highlights: string[];
  statusNote: string;
}

export interface CompanyData {
  legalName: string;
  shortName: string;
  tagline: string;
  cin: string;
  upreraId: string;
  incorporationDate: string;
  companyCategory: string;
  companySubCategory: string;
  classOfCompany: string;
  authorizedCapital: string;
  paidUpCapital: string;
  status: string;
  registeredOffice: {
    addressLine1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    email: string;
    phone: string;
    workingHours: string;
    workingDays: string;
  };
  regulatory: {
    authority: string;
    authorityFullName: string;
    officialWebsite: string;
    promoterCategory: string;
    actReference: string;
  };
  directors: Director[];
  upcomingProject: UpcomingProject;
}

export const COMPANY_DATA: CompanyData = {
  legalName: "KSGSK INFRA PROJECTS PRIVATE LIMITED",
  shortName: "KSGSK Infra",
  tagline: "Excellence in Infrastructure, Committed to Transparent Development",
  cin: "U41001UP2025PTC215689",
  upreraId: "UPRERAPRM464597",
  incorporationDate: "January 27, 2025",
  companyCategory: "Company limited by Shares",
  companySubCategory: "Indian Non-Government Company",
  classOfCompany: "Private Limited",
  authorizedCapital: "₹15,00,000 (INR Fifteen Lakhs)",
  paidUpCapital: "₹2,00,000 (INR Two Lakhs)",
  status: "Active",
  registeredOffice: {
    addressLine1: "A-52",
    area: "Indira Nagar",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226016",
    country: "India",
    fullAddress: "A-52, Indira Nagar, Lucknow, Uttar Pradesh 226016, India",
  },
  contact: {
    email: "ksgskinfra@gmail.com",
    phone: "+91 94150 00000",
    workingHours: "10:00 AM – 06:00 PM IST",
    workingDays: "Monday to Saturday (Excluding Public Holidays)",
  },
  regulatory: {
    authority: "UP RERA",
    authorityFullName: "Uttar Pradesh Real Estate Regulatory Authority",
    officialWebsite: "https://www.up-rera.in",
    promoterCategory: "Registered Promoter / Developer",
    actReference: "Real Estate (Regulation and Development) Act, 2016",
  },
  directors: [
    {
      name: "Satish Kumar Kewlani",
      designation: "Director",
      roleDescription: "Executive leadership guiding strategic development, regulatory compliance, corporate governance, and statutory promoter operations.",
    },
    {
      name: "Gaurav Kewlani",
      designation: "Director",
      roleDescription: "Oversees project execution, procurement, engineering standards, and infrastructure operations.",
    },
    {
      name: "Kaushal Chandani",
      designation: "Additional Director",
      roleDescription: "Specializes in commercial development, statutory planning, capital allocation, and risk management.",
    },
    {
      name: "Bhavya Chandani",
      designation: "Additional Director",
      roleDescription: "Focuses on corporate relations, customer grievance management, and quality control frameworks.",
    },
  ],
  upcomingProject: {
    id: "triivanta-gold",
    title: "TRIIVANTA GOLD",
    category: "Gated Township",
    statusBadge: "Upcoming · Launching Soon",
    location: "Lucknow, Uttar Pradesh",
    extent: "Approx. 5 Acres",
    mainRoad: "18-Meter Wide Road",
    mainPark: "Approx. 30,000 Sq. Ft. Main Park",
    approvalDate: "27-08-2026",
    approvingAuthority: "Jila Panchyat Lucknow",
    reraStatus: "Under Approval in UP RERA",
    description: "Proposed 5-acre gated residential township in Lucknow planned by KSGSK Infra Projects Private Limited. Approved by Jila Panchyat Lucknow on 27-08-2026 and currently under regulatory approval with UP RERA. Features an 18-meter wide main road and approx 30,000 sqft main park.",
    highlights: [
      "Planned gated residential township of approx. 5 Acres",
      "Sanctioned by Jila Panchyat Lucknow on 27-08-2026",
      "Statutory application under review with UP RERA",
      "18-Meter wide planned main access road",
      "Approx. 30,000 Sq. Ft. planned main park and green area",
      "Secured perimeter with planned community utilities"
    ],
    statusNote: "Upcoming / Launching Soon. Under approval in UP RERA. No bookings, sales, or advances are invited until formal RERA registration is issued.",
  },
};
