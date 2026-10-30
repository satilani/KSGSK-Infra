# KSGSK Infra Projects - UPRERA Corporate Compliance Website

A high-prestige, responsive corporate website for KSGSK Infra Projects Private Limited designed to fulfill Uttar Pradesh Real Estate Regulatory Authority (UPRERA) promoter compliance mandates while establishing an elegant, trustworthy digital presence across Home, About Us, and Contact Us sections.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following project parameters have been confirmed from your answers and verified government corporate records:

- **Confirmed Scope**: Dedicated corporate promoter compliance portal consisting of three primary pages: **Home**, **About Us**, and **Contact Us**.
- **Confirmed Aesthetic**: Prestigious corporate navy (`#0B192C` / `#1E3E62`) with refined warm gold accents (`#D4AF37` / `#C5A059`), crisp architectural geometry, clean hairline dividers, and zero visual clutter.
- **Corporate Grounding**: Full integration of official Ministry of Corporate Affairs (MCA) & UPRERA promoter credentials:
  - Corporate Identification Number (CIN): `U41001UP2025PTC215689`
  - UPRERA Promoter Registration ID: `UPRERAPRM464597`
  - Registered Office: A-52, Indira Nagar, Lucknow, Uttar Pradesh 226016
  - Board of Directors: Satish Kumar Kewlani, Gaurav Kewlani, Kaushal Chandani, Bhavya Chandani
  - Official Regulatory Portal: Direct verified link and QR inspection guide to `https://www.up-rera.in`

---

### 1. Overview & Core Concept

- **What It Does**: Provides an authoritative, official corporate website for KSGSK Infra Projects Private Limited that satisfies statutory promoter disclosure guidelines under the Real Estate (Regulation and Development) Act, 2016 and UPRERA regulations.
- **Target Audience / Persona**: Regulators and inspection officers from UPRERA, institutional partners, prospective property buyers, legal compliance auditors, and citizens seeking verifiable developer information.
- **Key Value**: Guarantees 100% regulatory compliance for promoter digital disclosures while conveying the structural permanence, reliability, and architectural excellence of the company.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  - *Home Experience*: Uncluttered top navigation (Wordmark, single-line links for Home / About Us / Contact Us, and a "Verify on UPRERA" CTA). Hero banner showcasing modern architectural infrastructure, official statutory disclosure strip (CIN, UPRERA ID, RoC Kanpur, Active Status), corporate core pillars (Urban Infrastructure, Quality Construction, Regulatory Transparency), and compliance quick-access panel.
  - *About Us Experience*: Corporate narrative detailing the vision of KSGSK Infra Projects, formal governance overview, board of directors profile grid (highlighting leadership experience), and corporate registry records.
  - *Contact Us Experience*: Registered office physical address in Lucknow, interactive inquiry and grievance capture form with live client-side validation and confirmation feedback, official customer care email, and grievance nodal contact.
  - *UPRERA Compliance Drawer / Modal*: Quick-access regulatory modal displaying statutory promoter certificate details, QR code for instant mobile verification, and one-click redirection to the official UP RERA portal.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Prestigious corporate architectural style inspired by high-end infrastructure firms and institutional governance portals.
  - *Color Palette & Tokens*:
    - Canvas Background: Crisp architectural off-white / light neutral (`#F8FAFC` to `#FFFFFF`) paired with deep midnight navy structural zones (`#0B192C` and `#132238`).
    - Surfaces & Borders: Hairline slate borders (`border-slate-200`) with subtle warm tinting.
    - Accents & Highlights: Warm architectural gold (`#D4AF37` and `#C5A059`) for focused interactive affordances, badges, and trust insignia.
  - *Typography & Hierarchy*:
    - Display Face: `Plus Jakarta Sans` / `Outfit` in tight letter-spacing for refined, commanding headers.
    - Body Face: High-legibility geometric sans (`Plus Jakarta Sans` / `Public Sans`) with tabular numerals (`tabular-nums`) for registration numbers, dates, and capital values.
  - *Anti-Slop Discipline*: Zero floating pills, no generic code comments or mechanical prefixes, no decorative pulsing status dots, no fake scores or marketing buzzwords. Everything is genuine, dignified, and statutory.

- **Interactive Feedback & Motion**:
  - Seamless client-side tab/page navigation without page flicker.
  - Interactive Contact & Grievance form with input validation (name, email, phone, subject, message) and instant clear submission confirmation.
  - One-click copy for corporate credentials (CIN, UPRERA Registration Number).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Multi-Page Tab Architecture vs. Single Page Anchor Scrolling**
  - *Chosen Approach*: Multi-view stateful navigation (Home, About Us, Contact Us) with persistent header and statutory footer, complemented by instant tab switching and URL hash synchronization.
  - *Why*: Allows direct linking to required sections for regulatory auditors while maintaining a crisp, dedicated feel for each required legal section.
  - *Alternatives Considered*: Single-page infinite scroll (rejected because formal corporate filings and audits prefer clear sectional boundaries).

- **Decision 2: Verified Real Corporate Data vs. Placeholder Text**
  - *Chosen Approach*: Hardcode authentic verified data (CIN: U41001UP2025PTC215689, UPRERA ID: UPRERAPRM464597, RoC Kanpur, Lucknow registered address, Board of Directors).
  - *Why*: Critical compliance requirement under UPRERA Section 12, 60, and 61 which penalize non-disclosure or inaccurate developer claims.

- **Decision 3: High-Fidelity Architectural Visual Asset Generation**
  - *Chosen Approach*: Use the `generate_image` tool to create authentic, high-resolution architectural imagery (modern corporate infrastructure and construction engineering) matching the navy and gold aesthetic, accompanied by resilient CSS/SVG fallbacks.
  - *Why*: Prevents reliance on fragile external image hosts that break in sandboxed environments.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App Navigation & Top Bar                        │
│   [KSGSK INFRA PROJECTS] ── [Home] [About Us] [Contact Us] ── [UPRERA] │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Active View
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│    Home View     │       │  About Us View   │       │ Contact Us View  │
│ ──────────────── │       │ ──────────────── │       │ ──────────────── │
│ • Hero Section   │       │ • Vision & Ethos │       │ • Reg. Office    │
│ • Statutory Bar  │       │ • Board Members  │       │ • Grievance Desk │
│ • Core Verticals │       │ • MCA & RoC Info │       │ • Contact Form   │
│ • UPRERA Hub     │       │ • Governance     │       │ • Interactive Map│
└──────────────────┘       └──────────────────┘       └──────────────────┘
                                    │
┌───────────────────────────────────┴────────────────────────────────────┐
│                  Global Statutory Compliance Footer                    │
│ • CIN Disclosures • UPRERA Registration • Official Portal Hyperlink    │
└────────────────────────────────────────────────────────────────────────┘
```

- **State Model**:
  - `currentView`: `'home' | 'about' | 'contact'`
  - `isComplianceModalOpen`: boolean (for instant inspection of UPRERA certificate & QR verification)
  - `contactForm`: form state management with validation and success feedback
- **Compliance Linkages**:
  - Direct outbound regulatory link to `https://www.up-rera.in` with appropriate security headers (`rel="noopener noreferrer"`).
  - Interactive modal displaying the QR code for Promoter ID `UPRERAPRM464597`.
