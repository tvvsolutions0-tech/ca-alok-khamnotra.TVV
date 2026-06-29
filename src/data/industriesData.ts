import { Industry } from '../types';

export const industriesData: Industry[] = [
  {
    id: 'trading-retail',
    title: 'Trading & Retail',
    description: 'GST compliance for multi-channel sales, inventory reconciliations, e-commerce TCS audits, and profit-margin reviews.',
    fullDescription: 'The fast-paced retail and trading industry is characterized by high transaction volumes, multi-platform sales (offline, Amazon, Flipkart, Shopify), and complex inventory turnarounds. CA Alok Khamnotra designs robust financial workflows that automate sales reconciliations, manage input tax credit on purchases, and ensure compliance with e-commerce TDS/TCS regulations.',
    challengesSolved: [
      'Multi-channel sales and marketplace settlement sheet reconciliations.',
      'Accurate tracking and valuation of multi-warehouse physical inventories.',
      'Filing of custom GSTR returns and input credit matching against GSTR-2B.'
    ],
    focusAreas: [
      'Inventory turnover and shrinkage audits.',
      'Margin optimization, pricing advice, and working capital management.',
      'E-commerce TCS compliance and refund filings.'
    ],
    icon: 'ShoppingBag'
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Construction',
    description: 'RERA compliance counseling, GST on construction services (1% vs 5%), joint development agreement (JDA) tax planning.',
    fullDescription: 'Real Estate and construction in Jaipur involve highly specific tax rules, capital-intensive transactions, and strict RERA compliance requirements. We specialize in structuring Joint Development Agreements (JDA), calculating correct input tax credit eligibility, and guiding builders through complex land valuation deductions.',
    challengesSolved: [
      'Structuring tax-efficient Joint Development Agreements (JDAs) between landowners and builders.',
      'Deciding correct GST rates (affordable vs non-affordable housing) and tax deductions for land cost.',
      'RERA account certifications and construction-cost audit compliance.'
    ],
    focusAreas: [
      'Long-term contract accounting and percentage of completion method (POCM) auditing.',
      'Capital gains tax planning on property sales and reinvestment structures.',
      'Subcontractor TDS checking and material supply cost audits.'
    ],
    icon: 'Home'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Product costing analysis, factory overhead allocations, depreciation schedules, and state-level subsidy compliance.',
    fullDescription: 'For manufacturing enterprises in Rajasthan, managing product costing, factory overhead allocations, and inventory valuations (WIP, raw materials, finished goods) is crucial for profitability. CA Alok Khamnotra acts as a comprehensive financial partner, advising on cost control, plant depreciation schedules, and securing state industrial subsidies.',
    challengesSolved: [
      'Accurate allocation of variable, semi-variable, and fixed factory overheads.',
      'Implementing reliable standard costing systems to pinpoint production cost variances.',
      'Reconciliation of raw material imports and custom duty credits.'
    ],
    focusAreas: [
      'Work-in-progress (WIP) and finished goods inventory valuations.',
      'Vetting capital budgets for plant and machinery acquisitions.',
      'Ensuring compliance with local environmental, labor, and state subsidy filings.'
    ],
    icon: 'Factory'
  },
  {
    id: 'pharmaceuticals',
    title: 'Pharmaceuticals',
    description: 'Drug distribution network taxation, expired-goods tax adjustments, intellectual property amortization, and regulatory compliance.',
    fullDescription: 'The highly regulated pharmaceutical sector requires specialized accounting for R&D expenditures, intellectual property (IP) amortizations, and intricate distributor network accounts. We ensure precise handling of expired medicine tax adjustments, product recalls, and multi-state drug distributions.',
    challengesSolved: [
      'Correct accounting and GST adjustments for expired-goods returns from retailers/wholesalers.',
      'Structuring compliance models for multi-state stock transfers and retail distribution hubs.',
      'Handling R&D expenditure tax incentives and capital-allowance write-offs.'
    ],
    focusAreas: [
      'Auditing product margins, distribution commissions, and discount models.',
      'Statutory compliance with Drugs and Cosmetics Act licensing fees bookkeeping.',
      'Tax amortization of pharmaceutical formulations, copyrights, and patents.'
    ],
    icon: 'Pills'
  },
  {
    id: 'it-technology',
    title: 'IT & Technology',
    description: 'Software export GST refunds, LUT filings, SEZ/STPI tax benefits, and dynamic ESOP valuation accounting.',
    fullDescription: 'Software-as-a-Service (SaaS), IT consulting, and technology startups operate in a global marketplace. We assist Jaipur’s tech companies in securing zero-rated GST export benefits via Letter of Undertaking (LUT), managing foreign inward remittances (FIRC), and structuring compliant Employee Stock Option Plans (ESOPs).',
    challengesSolved: [
      'Seamless filing and receipt of GST refund claims for zero-rated software exports.',
      'Ensuring full compliance with FEMA regulations for international software services and payments.',
      'Designing and accounting for employee equity allocations and ESOP valuations.'
    ],
    focusAreas: [
      'LUT (Letter of Undertaking) filings and foreign remittance verification (FIRC).',
      'Cost-plus transfer pricing models for IT subsidiaries.',
      'Accounting for capitalization of software development expenditures (AS-26).'
    ],
    icon: 'Code'
  },
  {
    id: 'startups-msmes',
    title: 'Startups & MSMEs',
    description: 'Venture capital due-diligence preparation, cap table maintenance, DPIIT tax holidays, and corporate-structure consulting.',
    fullDescription: 'Jaipur is a thriving hub for startups and MSMEs. Our dynamic startup-oriented team specializes in building investor-ready pitch deck math, preparing companies for venture capital due diligence, maintaining structured cap tables, and leveraging Indian MSME loan subsidies.',
    challengesSolved: [
      'Preparing high-quality financial projections for seed and Series A funding rounds.',
      'Vetting legal share-purchase agreements (SPA) for hidden tax and liability triggers.',
      'Securing Udyam registrations for priority sector bank lending and interest subventions.'
    ],
    focusAreas: [
      'Capital structure optimization and founder equity vesting agreements.',
      'DPIIT tax holiday application and Angel Tax (Sec 56) exemption counseling.',
      'Affordable monthly compliance dashboards tracking cash burn and runway.'
    ],
    icon: 'Rocket'
  },
  {
    id: 'food-hospitality',
    title: 'Food & Hospitality',
    description: 'GST compliance for restaurants (5% non-ITC vs 18% ITC), food safety license accounting, and hotel occupancy tax audits.',
    fullDescription: 'The hospitality and food services sector faces highly specific tax structures, including non-ITC GST models for restaurants and complex tiered luxury taxes for luxury resorts and hotels. We manage compliance, liquor license accounting, and POS-integrated bookkeeping.',
    challengesSolved: [
      'GST structuring for restaurants, hotels, and event caterers with accurate input tax credit claims.',
      'Daily POS sales audit and cash-to-ledger reconciliations across multiple franchise branches.',
      'Controlling food wastage and beverage cost leakages through structured audits.'
    ],
    focusAreas: [
      'Franchise royalty fee accounting and withholding tax compliance.',
      'Auditing of hotel room occupancy rates, average daily rates (ADR), and REVPAR.',
      'Food license (FSSAI) fees, local municipality tax, and entertainment tax bookkeeping.'
    ],
    icon: 'Utensils'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'GST exemptions on clinical services, pharmaceutical inventory accounting, hospital trust tax compliance.',
    fullDescription: 'Healthcare clinics, hospitals, and diagnostic labs require precise bookkeeping. Since healthcare services are largely exempt from GST, businesses face unique input tax credit reversals. We manage complex payroll configurations for visiting specialist doctors, trust accounting, and healthcare equipment lease audits.',
    challengesSolved: [
      'Navigating partial GST exemptions and calculating accurate input tax credit reversals (Rule 42/43).',
      'TDS deductions on high-value consulting fees paid to visiting medical practitioners (Sec 194J).',
      'Trust tax-exempt compliance for charitable hospital systems and clinics.'
    ],
    focusAreas: [
      'Medical equipment leasing finance and depreciation models.',
      'Auditing diagnostic lab cash collections and insurance TPA receivables.',
      'Compliance check on medical waste disposal licenses and pharmaceutical inventory audits.'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Section 10(23C) trust exemptions, GST on auxiliary educational services, payroll management for academic staff.',
    fullDescription: 'Schools, colleges, coaching institutes, and educational trusts require dedicated accounting support. We manage trust registration exemptions under Section 12AB and 80G, audit tuition fee structures, and advise on GST applicability for auxiliary services like transport, catering, and security.',
    challengesSolved: [
      'Securing and maintaining income tax exemptions for educational trusts under Section 10(23C) and 12AB.',
      'Correct tax applicability of GST on ancillary services like student hostels, books, and transport.',
      'Structuring dynamic fee collection accounting and deferred revenue ledgers.'
    ],
    focusAreas: [
      'Provident fund (PF), ESI, and professional tax configurations for academic faculty.',
      'Auditing capital expenditures for classroom expansions, labs, and sports complexes.',
      'Advising on compliance for CSR grants and public educational donations.'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    description: 'E-way bill auditing, GST on GTA services (Forward vs Reverse Charge), vehicle fleet capitalization, and fuel surcharge tracking.',
    fullDescription: 'With Jaipur being a major north-western logistical hub, logistics and fleet operations face dynamic compliance, including strict E-way bill rules and complex Goods Transport Agency (GTA) GST models. We build robust accounting pipelines to manage fleet depreciations, fuel overheads, and driver trip reconciliations.',
    challengesSolved: [
      'Filing of GTA options with GST portals (5% RCM vs 12% Forward Charge) to maximize benefits.',
      'Continuous audit of E-way bills against physical invoices to avoid transit penalty notices.',
      'Reconciliation of multi-state vehicle fuel expenses, maintenance records, and driver allowance vouchers.'
    ],
    focusAreas: [
      'Fleet asset capitalization, vehicle loan interests, and depreciation schedules.',
      'Auditing warehouse storage receipts, third-party logistics (3PL) contracts, and billing.',
      'Cross-border freight forwarding custom clearances bookkeeping.'
    ],
    icon: 'Truck'
  }
];
