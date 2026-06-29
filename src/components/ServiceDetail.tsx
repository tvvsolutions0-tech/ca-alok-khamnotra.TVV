import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Percent, FileText, ShieldCheck, BookOpen, 
  DollarSign, Briefcase, BarChart3, Search, TrendingUp, 
  PieChart, Cpu, Glasses, RefreshCw, Layers, Rocket, HelpCircle
} from 'lucide-react';
import { Service } from '../types';
import ContactForm from './ContactForm';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

// Icon Mapping
const iconMap: { [key: string]: any } = {
  Percent, FileText, ShieldCheck, BookOpen, DollarSign, 
  Briefcase, BarChart3, Search, TrendingUp, PieChart, 
  Cpu, Glasses, RefreshCw, Layers, Rocket
};

export default function ServiceDetail({ service, onBack }: ServiceDetailProps) {
  const IconComponent = iconMap[service.icon] || HelpCircle;

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
        BACK TO ALL SERVICES
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
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">Corporate Service Division</span>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-1 mb-3">
              {service.title}
            </h1>
            <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
              {service.description}
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
              Service Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-sans font-semibold text-slate-900 tracking-tight mb-4 border-b border-slate-100 pb-2">
              Key Strategic Benefits
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-amber-600 mt-1 shrink-0 font-bold">✦</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-sans font-semibold text-slate-900 tracking-tight mb-6 border-b border-slate-100 pb-2">
              Our Service Engagement Process
            </h3>
            <div className="relative pl-6 border-l border-slate-200 space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Indicator Ring */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  </div>
                  <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-semibold">Phase 0{index + 1}</span>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Contacts & Core Assurance */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h4 className="text-sm font-mono text-amber-700 uppercase tracking-wider mb-4 font-semibold">Core Client Assurance</h4>
            <div className="space-y-4 text-xs text-slate-500">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-0.5 font-semibold">Strict Confidentiality</strong>
                All financial accounts and client documents are governed by absolute professional NDA covenants.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-0.5 font-semibold">100% Tax Accuracy Guarantee</strong>
                Vetted by FCA with multi-tier verification before tax portal upload.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-0.5 font-semibold">Transparent SLA Engagements</strong>
                Regular milestones, timeline tracking, and clear pricing options.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-transparent border border-amber-200/80 rounded-2xl p-6 text-center">
            <h4 className="text-base font-sans font-semibold text-slate-900 mb-2">Need Immediate Consultation?</h4>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Skip the forms and schedule a high-priority face-to-face conference with CA Alok Khamnotra.
            </p>
            <a
              href="tel:+917791077734"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
            >
              Call Now: 077910 77734
            </a>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div id="enquire-section" className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg relative">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">Fast-Track Response</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-3">
            Enquire About This Service
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Submit your contact credentials and brief business needs. CA Alok Khamnotra’s core tax/audit specialists will contact you within 2 business hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm serviceOrIndustryTitle={service.title} />
        </div>
      </div>
    </motion.div>
  );
}
