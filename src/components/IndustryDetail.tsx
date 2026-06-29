import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ShoppingBag, Home, Factory, Pill, Code, 
  Rocket, Utensils, Stethoscope, GraduationCap, Truck, HelpCircle
} from 'lucide-react';
import { Industry } from '../types';
import ContactForm from './ContactForm';

interface IndustryDetailProps {
  industry: Industry;
  onBack: () => void;
}

// Icon Mapping
const iconMap: { [key: string]: any } = {
  ShoppingBag, Home, Factory, Pill, Code, 
  Rocket, Utensils, Stethoscope, GraduationCap, Truck
};

export default function IndustryDetail({ industry, onBack }: IndustryDetailProps) {
  const IconComponent = iconMap[industry.icon] || HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group inline-flex items-center gap-2 text-sm font-mono text-amber-700 hover:text-amber-800 mb-8 cursor-pointer transition-colors font-semibold"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        BACK TO ALL INDUSTRIES
      </button>

      {/* Header Panel */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 p-8 md:p-12 mb-12 shadow-md shadow-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 relative">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 shadow-sm">
            <IconComponent className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">Industry Sector Specialization</span>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-1 mb-3">
              {industry.title}
            </h1>
            <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </div>

      {/* Body Content Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* Left Column: Full Details */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h3 className="text-xl font-sans font-semibold text-slate-900 tracking-tight mb-4 border-b border-slate-100 pb-2">
              Industry Overview & Compliance
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {industry.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-sans font-semibold text-slate-900 tracking-tight mb-4 border-b border-slate-100 pb-2">
              Key Challenges Solved
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.challengesSolved.map((challenge, index) => (
                <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <span className="text-xs font-mono text-amber-700 uppercase font-semibold">Issue 0{index + 1}</span>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-sans font-semibold text-slate-900 tracking-tight mb-4 border-b border-slate-100 pb-2">
              Strategic Focus Areas
            </h3>
            <ul className="space-y-3">
              {industry.focusAreas.map((focus, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-amber-600 mt-1 shrink-0 font-bold">✔</span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Industry-specific Assurance */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h4 className="text-sm font-mono text-amber-700 uppercase tracking-wider mb-4 font-semibold">Dedicated Industry Partner</h4>
            <div className="space-y-4 text-xs text-slate-500">
              <p className="leading-relaxed text-slate-600">
                At CA Alok Khamnotra, we don’t just offer generic audit templates. We understand that <strong className="text-slate-900 font-semibold">{industry.title}</strong> has distinct operational metrics, gross margins, and regulatory compliance pressures.
              </p>
              <p className="leading-relaxed">
                Our specialized team brings direct experience auditing and consulting for companies in your niche. Let us help you unlock optimal corporate taxation structures while maintaining rigorous statutory hygiene.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-transparent border border-emerald-200 rounded-2xl p-6 text-center">
            <h4 className="text-base font-sans font-semibold text-slate-900 mb-2">Want to Speak on WhatsApp?</h4>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Have a direct conversation with CA Alok Khamnotra’s specialized industry desk.
            </p>
            <a
              href={`https://wa.me/917791077734?text=${encodeURIComponent(`Hello CA Alok Khamnotra, I would like to discuss financial advisory for the *${industry.title}* sector.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div id="enquire-section" className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg relative">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">Fast-Track Response</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-3">
            Enquire About This Industry Division
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Submit your details below to connect with a senior partner specialized in the {industry.title} division.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm serviceOrIndustryTitle={`${industry.title} Division`} />
        </div>
      </div>
    </motion.div>
  );
}
