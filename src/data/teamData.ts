import { TeamMember } from '../types';

export interface DetailedTeamMember extends TeamMember {
  detailedBio: string[];
  designation: string;
  areasOfExpertise: string[];
  keyMilestones: string[];
}

export const teamData: DetailedTeamMember[] = [
  {
    name: 'CA Alok Khamnotra',
    role: 'Founder & Managing Partner',
    qualification: 'FCA (Fellow Chartered Accountant), DISA (ICAI), B.Com',
    experience: '15+ Years of Post-Qualification Experience',
    description: 'CA Alok Khamnotra is a highly acclaimed Fellow Chartered Accountant specializing in Corporate Tax, GST audits, and transactional advisory. Under his vision, the firm has served over 500+ clients across India, maintaining a stellar 4.9-star rating in Jaipur for financial precision and reliability.',
    image: 'alok_khamnotra',
    designation: 'Founder, Senior Partner & Chief Auditor',
    detailedBio: [
      'CA Alok Khamnotra is a distinguished Fellow Chartered Accountant (FCA) with a post-qualification experience of over 15 years. He holds a DISA (Diploma in Information System Audit) qualification from the Institute of Chartered Accountants of India (ICAI), which equips him with unique capabilities in implementing robust audit trails and digital compliance structures.',
      'Over the course of his illustrious career, he has successfully managed statutory audits, internal controls assessment, and represented numerous corporate and individual clients in front of Direct and Indirect Tax appellate authorities. His client-first methodology has positioned him as one of the most reliable tax strategists and business advisors in Jaipur, Rajasthan.',
      'Alok’s expertise spans complex corporate tax advisory, GST audits, project financing engineering, and legal representations. He is a passionate mentor to startups and MSMEs, advising them on corporate restructuring, capital structuring, and efficient bookkeeping practices.'
    ],
    areasOfExpertise: [
      'Corporate Tax Advisory & Planning',
      'Statutory & Tax Auditing (ICAI Standards)',
      'GST Compliances, Appeals & Auditing',
      'Direct Taxation & Income Tax Representation',
      'DISA Information System Auditing',
      'Corporate Law & Registrar of Companies (ROC) Compliances',
      'Project Finance Engineering & Startup Valuations'
    ],
    keyMilestones: [
      'Successfully defended 120+ complicated Income Tax and GST notice cases.',
      'Supervised statutory compliance audits for over 250 corporate establishments across Rajasthan.',
      'Advised on corporate restructuring for leading real estate and manufacturing industries in Jaipur.',
      'Established a dual-scrutiny filing process, resulting in a flawless 99.9% error-free submission rate.'
    ]
  }
];
