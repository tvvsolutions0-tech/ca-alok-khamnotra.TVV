import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'gst-advisory',
    title: 'GST Advisory & Compliance',
    description: 'End-to-end GST registration, regular monthly/quarterly filings, transactional advisory, and audit representation.',
    fullDescription: 'Goods and Services Tax (GST) in India demands precise compliance and strategic structural planning. CA Alok Khamnotra provides expert advice to align your business operations with the latest GST council amendments. We assist in optimizing input tax credits (ITC), managing reverse charge mechanisms (RCM), and navigating complex transition provisions.',
    benefits: [
      'Maximize Input Tax Credit (ITC) reconciliation and avoid blockages.',
      '100% compliant monthly/quarterly filing of GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C.',
      'Proactive legal representation and response drafting for GST notices.',
      'Structured refund processing for exporters and inverted tax structures.'
    ],
    process: [
      'Diagnostic review of existing business transactions and billing formats.',
      'Setting up automated reconciliation tools for GSTR-2B vs. Purchase Register.',
      'Regular computation, cross-verification, and submission of monthly GST returns.',
      'Annual GST audit and filing of reconciliation statement GSTR-9C.'
    ],
    icon: 'Percent'
  },
  {
    id: 'income-tax',
    title: 'Income Tax Consultancy',
    description: 'Personalized tax planning, high-accuracy ITR filing, representation in assessment appeals, and TDS/TCS optimization.',
    fullDescription: 'Our Income Tax services are crafted to legal standards of optimization for corporate and individual taxpayers. We specialize in dynamic tax planning under the Income Tax Act, 1961, ensuring you pay the optimum tax while complying perfectly with evolving rules, exemptions, and deductions.',
    benefits: [
      'Customized corporate tax structures to lawfully minimize net tax liabilities.',
      'Accurate and timely filing of all ITR forms (ITR-1 to ITR-7).',
      'Strategic advising on capital gains tax, real estate transactions, and trusts.',
      'Comprehensive representation for scrutiny assessments and income tax appeals.'
    ],
    process: [
      'Detailed assessment of financial statements and revenue streams.',
      'Identification of eligible deductions, exemptions, and investment avenues.',
      'Advance tax estimation and prompt quarterly advance tax calculations.',
      'Compilation of relevant documentation, filing of ITR, and electronic verification.'
    ],
    icon: 'FileText'
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description: 'Statutory audits under the Companies Act, tax audits under section 44AB, and specialized financial verification.',
    fullDescription: 'Providing reliable assurance to shareholders, lenders, and regulators is vital for business credibility. CA Alok Khamnotra delivers statutory, tax, and custom-defined audits with uncompromising professional integrity, ensuring your financial records present a true and fair view of your business health.',
    benefits: [
      'High-quality statutory audits that enhance financial transparency and trust.',
      'Full compliance with Companies Act 2013 and CARO (Companies Auditor’s Report Order) guidelines.',
      'Detailed Tax Audits (Form 3CD) ensuring zero compliance gaps with Tax authorities.',
      'Identification of operational gaps and recommendation of control enhancements.'
    ],
    process: [
      'Rigorous pre-audit planning, materiality assessment, and risk evaluation.',
      'On-site/Remote verification of transactions, physical inventory checks, and reconciliations.',
      'Substantive testing, analytical review procedures, and control evaluations.',
      'Issuance of formal Auditor’s Reports and management letters detailing improvements.'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    description: 'Professional accounting services, ledger maintenance, accounting standards (IndAS/AS) implementation, and payroll.',
    fullDescription: 'Maintain clean, orderly, and standard financial accounts with our professional bookkeeping services. We help businesses transition from messy paper records to high-fidelity, cloud-managed double-entry ledger systems, ensuring your books are always transaction-ready.',
    benefits: [
      'Error-free general ledger maintenance, bank reconciliations, and payroll processing.',
      'Compliance with Indian Accounting Standards (AS) and Indian GAAP.',
      'Real-time access to critical financial registers (sales, purchases, cash books).',
      'Preparation of standard trial balances, profit/loss accounts, and balance sheets.'
    ],
    process: [
      'Structured onboarding to migrate or initialize accounts on Tally Prime, Zoho Books, or custom systems.',
      'Daily/weekly transaction categorization, invoice matching, and ledger posting.',
      'Monthly bank statement and payment gateway reconciliations.',
      'Closing entries, depreciation schedules, and trial balance freezing.'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'tds-compliance',
    title: 'TDS & TCS Compliance',
    description: 'Quarterly TDS return filing (Forms 24Q, 26Q, 27Q), TCS reconciliation, and correction statement processing.',
    fullDescription: 'Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) involve complex rates, thresholds, and penalty-backed deadlines. We handle your TDS/TCS lifecycle seamlessly to prevent late filing fees, interest penalties, and mismatch issues in TRACES.',
    benefits: [
      'Zero penalty occurrences due to timely calculation and deposit of monthly TDS/TCS.',
      'Accurate quarterly filing of TDS returns (24Q, 26Q, 27Q, 27EQ).',
      'Timely issuance of TDS certificates (Form 16/16A) to vendors and employees.',
      'Reconciliation of Form 26AS and AIS/TIS data to ensure seamless credit matching.'
    ],
    process: [
      'Monthly auditing of expense ledgers to identify transactions subject to TDS deduction.',
      'Tax computation, generation of Challan 281, and electronic payment processing.',
      'Quarterly data compilation, validation using NSDL utility, and return submission.',
      'Handling of TRACES defaults, interest demands, and filing correction statements.'
    ],
    icon: 'DollarSign'
  },
  {
    id: 'roc-company-law',
    title: 'ROC & Company Law',
    description: 'Company incorporation, filing of annual returns (MGT-7/AOC-4), board resolution management, and legal compliances.',
    fullDescription: 'Corporate governance under the Ministry of Corporate Affairs (MCA) requires rigorous compliance. Our ROC and Company Law services help you navigate the entire corporate lifecycle, from initial startup registration to maintaining essential corporate minutes and statutory registers.',
    benefits: [
      'Fast, hassle-free incorporation of Private Limited (Pvt Ltd), OPC, LLP, and Section 8 companies.',
      'Timely annual filings (Form AOC-4, MGT-7) avoiding hefty daily penalties.',
      'Hassle-free management of corporate restructurings, director updates, and share transfers.',
      'Professional maintenance of statutory registers, minutes books, and board resolutions.'
    ],
    process: [
      'Initial advisory on ideal entity structure (LLP vs. Pvt Ltd) based on fundraising plans.',
      'Drafting of Memorandum of Association (MoA) and Articles of Association (AoA).',
      'E-filing of SPICe+ and other required incorporation forms with MCA.',
      'On-going annual ROC compliance scheduling, secretarial audits, and regulatory filings.'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'financial-statements',
    title: 'Financial Statements Preparation',
    description: 'Drafting of professional Balance Sheets, Profit & Loss Statements, Cash Flow statements, and Notes to Accounts.',
    fullDescription: 'High-quality, professional financial statements are the voice of your business to banks, investors, and tax departments. We draft clear, fully compliant financial statements incorporating all essential accounting notes, disclosures, and schedules.',
    benefits: [
      'Schedules fully aligned with Schedule III of the Companies Act, 2013.',
      'Accurate Indirect Cash Flow statements mapping operating, investing, and financing flows.',
      'Professional notes to accounts detailing critical accounting policies and commitments.',
      'Standard-ready financials tailored for immediate bank credit and equity fundraising pitches.'
    ],
    process: [
      'Rigorous trial balance vetting and ledger scrutiny.',
      'Adjusting entries for outstanding liabilities, prepaid expenses, and depreciation.',
      'Drafting the Balance Sheet, Profit & Loss, and Cash Flow ledger matrices.',
      'Comprehensive review of disclosure requirements and generation of final audited-ready books.'
    ],
    icon: 'BarChart3'
  },
  {
    id: 'internal-audit',
    title: 'Internal Audit',
    description: 'Evaluating internal control frameworks, process audits, fraud detection, and operational risk assessment.',
    fullDescription: 'Beyond statutory requirements, internal audits are powerful tools for operational efficiency and risk management. We review your internal processes, verify internal financial controls (IFC), and evaluate operational risks to protect business assets from leakage and fraud.',
    benefits: [
      'Rigorous checking of business processes for loopholes, inefficiencies, and leakages.',
      'Mitigation of internal transaction errors and prevention of operational fraud.',
      'Compliance check of operational workflows with standard operating procedures (SOPs).',
      'Objective feedback on management control efficiency to senior leadership.'
    ],
    process: [
      'Defining audit scope, departmental focus areas, and key performance parameters.',
      'On-ground field work, transaction sampling, staff interviews, and walkthrough testing.',
      'Identifying risk vulnerabilities, control gaps, and process bottlenecks.',
      'Presenting detailed reports with actionable remediation timelines to the audit committee.'
    ],
    icon: 'Search'
  },
  {
    id: 'management-consultancy',
    title: 'Management Consultancy',
    description: 'Strategic business advisory, corporate restructures, working capital management, and cost reduction strategies.',
    fullDescription: 'Unlock business growth and maximize efficiency with our Management Consultancy services. We act as strategic growth advisors, analyzing financial structures, operating leverage, pricing models, and cost structures to boost net profit margins.',
    benefits: [
      'Objective financial analysis to streamline decision-making and operational velocity.',
      'Detailed cost-reduction and overhead-optimization advisory.',
      'Strategic structural advice for LLPs, partnerships, and corporate groups.',
      'Customized KPI dashboards for monitoring key business verticals.'
    ],
    process: [
      'In-depth business model diagnostic and financial health analysis.',
      'Collaborative strategy workshops with executive leadership to define growth milestones.',
      'Formulating actionable financial, capital structure, and resource plans.',
      'Continuous implementation support, monthly performance reviews, and course corrections.'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis',
    description: 'Ratio analysis, horizontal/vertical trend analysis, cash flow burn-rate calculations, and profitability reviews.',
    fullDescription: 'Turn raw ledger books into actionable financial insights. CA Alok Khamnotra evaluates key ratios (liquidity, profitability, efficiency, solvency) to highlight operational strengths and vulnerabilities, giving you the clarity needed to make confident business moves.',
    benefits: [
      'Deep, structural understanding of your company’s cost drivers and margin leaks.',
      'Early identification of cash burn trends and working capital crunches.',
      'Accurate ratio profiling to benchmarking performance against industry standards.',
      'High-impact graphic reports mapping out historical and comparative finances.'
    ],
    process: [
      'Data extraction from primary accounting engines.',
      'Applying analytical ratio engines, comparative tables, and vertical scaling.',
      'Isolating key underperforming departments, products, or channels.',
      'Delivering clean visual reports outlining immediate financial adjustments.'
    ],
    icon: 'PieChart'
  },
  {
    id: 'financial-modeling',
    title: 'Financial Modeling',
    description: 'Building dynamic 3-statement projection models, valuation sheets, scenario testing, and pitch book math.',
    fullDescription: 'Whether planning expansion, raising equity capital, or applying for bank limits, you need a dynamic financial model. We build sophisticated, formula-driven financial models that project balance sheets, profit statements, and cash flows over 3-10 years based on solid, realistic assumptions.',
    benefits: [
      'Fully dynamic 3-statement models built on standard Excel/Google Sheets guidelines.',
      'Comprehensive scenario analyses (best, base, worst-case projections) for stress testing.',
      'Accurate business valuation projections using Discounted Cash Flow (DCF) and multiples.',
      'Ready-to-present models for private equity, venture capitalists, and bank officers.'
    ],
    process: [
      'Structuring growth, cost, tax, and capital expenditure assumptions.',
      'Building the integrated revenue, asset, working capital, and debt schedules.',
      'Constructing and linking the Income Statement, Balance Sheet, and Cash Flow matrices.',
      'Running sensitivity checks, building charts, and compiling a clean, presentable executive dashboard.'
    ],
    icon: 'Cpu'
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence',
    description: 'Detailed financial and tax due diligence for business acquisitions, mergers, and high-value investments.',
    fullDescription: 'Avoid surprises in corporate transactions. Our due diligence team conducts investigative reviews of target company financial books, verifying tax histories, hidden liabilities, ledger accuracies, and legal compliance to protect your investment capital.',
    benefits: [
      'Identification of hidden financial liabilities, undisclosed debts, and outstanding lawsuits.',
      'Verification of quality of earnings (QofE) and validation of revenue recognition policies.',
      'Comprehensive assessment of past tax compliance and audit risks.',
      'Informed pricing and negotiation power based on solid evidentiary findings.'
    ],
    process: [
      'Drafting the due diligence questionnaire and coordinating secure virtual data room access.',
      'Rigorous checking of transaction trails, corporate books, tax filings, and compliance certificates.',
      'Identifying anomalies, adjustments to EBITDA, and structural tax risks.',
      'Delivering a comprehensive, high-fidelity Due Diligence Report with transactional recommendations.'
    ],
    icon: 'Glasses'
  },
  {
    id: 'business-process',
    title: 'Business Process Advisory',
    description: 'Mapping financial workflows, designing internal checks, and optimizing operational cycles.',
    fullDescription: 'Inefficient business processes translate directly into financial losses and slow delivery. We map, analyze, and redesign your financial workflows—including order-to-cash, procure-to-pay, and payroll processes—to maximize internal control and speed.',
    benefits: [
      'Elimination of redundant, paper-intensive operational workflows.',
      'Reduction in business cycle times (e.g., faster invoice processing and customer billing).',
      'Minimization of manual errors through well-designed automated checks and balances.',
      'Enhanced alignment between accounting teams and on-field operational wings.'
    ],
    process: [
      'Detailed mapping of existing "as-is" business and financial processes.',
      'Identifying bottlenecks, lack of segregation of duties, and high-risk control points.',
      'Designing streamlined, software-backed "to-be" workflows.',
      'Assisting in team training, standard operating procedures (SOP) drafting, and roll-out.'
    ],
    icon: 'RefreshCw'
  },
  {
    id: 'inventory-advisory',
    title: 'Inventory Advisory & Auditing',
    description: 'Stock audits, physical count verification, inventory valuation policies (FIFO/Weighted Average), and shrinkage control.',
    fullDescription: 'For trading and manufacturing businesses, inventory is typically the largest current asset on the balance sheet. Our Inventory Advisory and Audit service ensures accurate physical counting, prevents leakage or shrinkage, and establishes compliant valuation metrics under Accounting Standard 2 (AS-2).',
    benefits: [
      'Independent, physical verification of warehouse inventory avoiding book discrepancies.',
      'Identification of slow-moving, obsolete, or damaged stock for write-off planning.',
      'Accurate cost valuation in perfect compliance with FIFO/Weighted Average methods.',
      'Implementation of robust warehouse security and check-in/check-out ledger rules.'
    ],
    process: [
      'Scheduling physical stock audits across multi-location warehouses.',
      'Deploying verification teams to execute systematic barcodes/physical item checks.',
      'Comparing physical counts with digital records and compiling mismatch reconciliations.',
      'Advising on optimized reorder levels, EOQ models, and stock security frameworks.'
    ],
    icon: 'Layers'
  },
  {
    id: 'startup-msme',
    title: 'Startup & MSME Advisory',
    description: 'DPIIT Startup India registration, MSME/Udyam certificates, pitch deck guidance, and compliance packages.',
    fullDescription: 'Startups and Micro, Small & Medium Enterprises (MSMEs) are the backbone of Jaipur’s growth. We provide high-impact advisory starting from DPIIT registration (for tax exemptions) to Udyam Aadhar registration, unlocking government subsidies and collateral-free bank loans.',
    benefits: [
      'DPIIT Recognition for Startups unlocking eligibility for Section 56(2)(viib) (Angel Tax) exemption.',
      'Hassle-free MSME/Udyam Registration to secure payment protections and low interest bank limits.',
      'Affordable legal compliance packages covering ROC, TDS, and GST under one single umbrella.',
      'Strategic capital structure guidance, seed funding compliance, and cap table design.'
    ],
    process: [
      'Detailed consultation on DPIIT guidelines and startup structuring.',
      'Drafting business write-ups and filing applications with Startup India and MSME portals.',
      'Securing regulatory certifications and setting up standard corporate registers.',
      'Continuous support for compliance deadlines, audit preparation, and VC due-diligence readiness.'
    ],
    icon: 'Rocket'
  }
];
