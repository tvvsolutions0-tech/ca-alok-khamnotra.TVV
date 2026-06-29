/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Clock, Star, Award, Users, BookOpen, 
  MessageSquare, Search, Building2, Briefcase, ShieldCheck, 
  Percent, ChevronRight, Send, Check, ExternalLink, Menu, X, 
  ArrowUpRight, FileText, CheckCircle2, TrendingUp, Sparkles, HelpCircle,
  ArrowLeft, Target, GraduationCap, Calendar
} from 'lucide-react';

import { servicesData } from './data/servicesData';
import { industriesData } from './data/industriesData';
import { teamData } from './data/teamData';
import { blogsData } from './data/blogsData';

import ThreeDCAAnimation from './components/ThreeDCAAnimation';
import ContactForm from './components/ContactForm';
import ServiceDetail from './components/ServiceDetail';
import IndustryDetail from './components/IndustryDetail';

type ViewType = 'home' | 'about' | 'services' | 'industries' | 'team' | 'team-detail' | 'blogs' | 'contact';

export default function App() {
  const [view, setView] = useState<ViewType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);
  
  // Search state
  const [serviceSearch, setServiceSearch] = useState('');
  const [industrySearch, setIndustrySearch] = useState('');
  
  // Mobile navbar toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [view, selectedServiceId, selectedIndustryId]);

  // Navigate helper
  const navigateTo = (targetView: ViewType, serviceId?: string, industryId?: string) => {
    setView(targetView);
    if (serviceId) {
      setSelectedServiceId(serviceId);
      setSelectedIndustryId(null);
    } else if (industryId) {
      setSelectedIndustryId(industryId);
      setSelectedServiceId(null);
    } else {
      setSelectedServiceId(null);
      setSelectedIndustryId(null);
    }
  };

  // Filter Services
  const filteredServices = servicesData.filter(s => 
    s.title.toLowerCase().includes(serviceSearch.toLowerCase()) ||
    s.description.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  // Filter Industries
  const filteredIndustries = industriesData.filter(ind => 
    ind.title.toLowerCase().includes(industrySearch.toLowerCase()) ||
    ind.description.toLowerCase().includes(industrySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-amber-600 selection:text-white text-slate-800">
      
      {/* TOP HEADER ANNOUNCEMENT BAR */}
      <div className="w-full bg-slate-900 border-b border-slate-800 py-2.5 px-4 text-xs font-mono text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <strong>4.9 Rating (104 Google Reviews)</strong>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">Chartered Accountant Firm, Jaipur</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:+917791077734" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors text-slate-200">
              <Phone className="w-3 h-3 text-amber-500" />
              077910 77734
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3 h-3 text-amber-500" />
              Open · Closes 7:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* CORE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Firm Logo / Title */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white font-display font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              AK
            </div>
            <div>
              <div className="font-display font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1">
                CA Alok Khamnotra
                <span className="text-xs font-mono font-normal bg-amber-100 border border-amber-200 text-amber-800 rounded px-1.5 py-0.5">FCA</span>
              </div>
              <p className="text-[11px] font-sans text-slate-500 tracking-wider uppercase font-semibold">
                Founder &bull; <span className="text-amber-700 text-xs lowercase">Chartered Accountant</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'industries', label: 'Industries' },
              { id: 'team', label: 'Our Founder' },
              { id: 'blogs', label: 'Insights & Blogs' },
              { id: 'contact', label: 'Contact' }
            ].map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => navigateTo(navItem.id as ViewType)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  view === navItem.id || (navItem.id === 'team' && view === 'team-detail')
                    ? 'bg-amber-50 text-amber-800 border border-amber-200 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent font-medium'
                }`}
              >
                {navItem.label}
              </button>
            ))}
          </nav>

          {/* Consultation Fast Access Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/917791077734?text=Hello%20CA%20Alok%20Khamnotra,%20I%20would%20like%20to%20schedule%20a%20tax%20or%20audit%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-md font-semibold"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              WhatsApp Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE NAV DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white border-b border-slate-200 shadow-md"
          >
            <div className="px-6 py-6 space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'industries', label: 'Industries' },
                { id: 'team', label: 'Our Founder' },
                { id: 'blogs', label: 'Insights & Blogs' },
                { id: 'contact', label: 'Contact' }
              ].map((navItem) => (
                <button
                  key={navItem.id}
                  onClick={() => navigateTo(navItem.id as ViewType)}
                  className={`w-full text-left px-4 py-3 text-sm font-mono uppercase tracking-wider rounded-xl transition-colors block ${
                    view === navItem.id || (navItem.id === 'team' && view === 'team-detail')
                      ? 'bg-amber-50 text-amber-800 border border-amber-200 font-semibold' 
                      : 'text-slate-600 hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  {navItem.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a 
                  href="https://wa.me/917791077734?text=Hello%20CA%20Alok%20Khamnotra,%20I%20would%20like%20to%20schedule%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-all text-center font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Direct Chat
                </a>
                <a 
                  href="tel:+917791077734"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono uppercase tracking-wider rounded-xl transition-all text-center font-semibold"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  Call: 077910 77734
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRIMARY VIEWS CONTENT ROUTER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* HOME VIEW */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-24 pb-20"
            >
              {/* HERO SECTION WITH INTEGRATED 3D ANIMATION */}
              <section className="relative overflow-hidden pt-12 md:pt-16 pb-8 border-b border-slate-200 bg-gradient-to-b from-slate-100 via-amber-500/5 to-slate-50">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Left Content */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-xs font-mono tracking-wider font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      TRUSTED CHARTERED ACCOUNTANCY & TAX ADVISORY
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-slate-900 leading-tight">
                      Precision in Audits.<br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                        Excellence in Advisory.
                      </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                      CA Alok Khamnotra delivers elite-tier tax compliance, corporate restructuring, and statutory auditing solutions. Empowering businesses and startups in Jaipur and across India with strategic financial guidance.
                    </p>

                    {/* Google Star Rating & Reviews Badge */}
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 max-w-md flex items-center justify-between gap-4 shadow-sm shadow-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-display font-bold">
                          4.9
                        </div>
                        <div>
                          <div className="flex items-center text-amber-500">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-slate-500 font-mono font-semibold">104 Google Client Reviews</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigateTo('about')}
                        className="text-xs font-mono text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors font-bold cursor-pointer"
                      >
                        Vetted &bull; Read More
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                      <button
                        onClick={() => navigateTo('services')}
                        className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold rounded-xl transition-all shadow-md cursor-pointer text-center"
                      >
                        Explore 15 Core Services
                      </button>
                      <button
                        onClick={() => navigateTo('contact')}
                        className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all text-center cursor-pointer"
                      >
                        Schedule Free Audit Check
                      </button>
                    </div>
                  </div>

                  {/* Hero Right Content - Interactive 3D Canvas Panel */}
                  <div className="lg:col-span-5 relative flex items-center justify-center">
                    <div className="w-full max-w-[460px] aspect-square rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-4">
                      {/* Integrated Interactive 3D Canvas element */}
                      <ThreeDCAAnimation />
                    </div>
                  </div>

                </div>
              </section>

              {/* CORE DIVISIONS PREVIEW (15 SERVICES HIGHLIGHTS) */}
              <section className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">Corporate Divisions</span>
                  <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-4">
                    Expert Financial & Taxation Services
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With an FCA foundation, we navigate the complex statutory landscapes of India, offering 15 bespoke specialized pathways tailored for corporate safety and growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {servicesData.slice(0, 6).map((service) => {
                    return (
                      <div 
                        key={service.id}
                        onClick={() => navigateTo('services', service.id)}
                        className="group p-6 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-amber-500/20 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Phase Integration Ready</span>
                        <h4 className="text-lg font-sans font-bold text-slate-900 mt-3 mb-2 group-hover:text-amber-700 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-1 text-xs font-mono text-amber-700 font-bold">
                          VIEW COMPLIANCE TIMELINE
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center mt-10">
                  <button
                    onClick={() => navigateTo('services')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider rounded-xl border border-slate-200 shadow-sm transition-colors cursor-pointer"
                  >
                    View All 15 Specialized Services
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </section>

              {/* INDUSTRIES SERVED HIGHLIGHTS */}
              <section className="bg-slate-100/60 border-y border-slate-200 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Specialized Verticals</span>
                      <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-1 mb-2">
                        Industries We Empower
                      </h2>
                      <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                        Every industry carries unique tax burdens, accounting criteria, and regulatory mandates. We tailor specific audits and compliance tracks.
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo('industries')}
                      className="px-6 py-3 bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 text-xs font-mono uppercase tracking-wider rounded-xl transition-all cursor-pointer font-semibold shadow-xs"
                    >
                      Browse All 10 Sectors
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industriesData.slice(0, 4).map((industry) => (
                      <div 
                        key={industry.id}
                        onClick={() => navigateTo('industries', undefined, industry.id)}
                        className="group p-5 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-amber-500/10 rounded-2xl cursor-pointer transition-all shadow-xs hover:shadow-sm"
                      >
                        <h4 className="text-base font-sans font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                          {industry.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                          {industry.description}
                        </p>
                        <span className="text-[10px] font-mono text-amber-700 font-bold uppercase group-hover:text-amber-800 transition-colors flex items-center gap-1">
                          READ SECTOR COMPLIANCES <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* HOME BRIEF INQUIRY FORM */}
              <section className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-100">
                  <div className="text-center max-w-2xl mx-auto mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">Instant Advisory Desk</span>
                    <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-3">
                      Initiate Professional Counsel
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Fill out your requirements or click "Chat on WhatsApp" for an immediate session regarding GST filings, corporate income taxes, or financial structural engineering.
                    </p>
                  </div>
                  <ContactForm serviceOrIndustryTitle="General Consulting Desk" />
                </div>
              </section>

            </motion.div>
          )}

          {/* ABOUT VIEW */}
          {view === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-4 py-16 space-y-20"
            >
              {/* Introduction */}
              <section className="text-left space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">THE EXECUTIVE STATEMENT</span>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900 mt-1">
                  Integrity, Experience, and <br />Uncompromising Financial Hygiene.
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed">
                  Founded by <strong className="text-slate-900 font-bold">CA Alok Khamnotra (FCA)</strong>, our Chartered Accountant firm represents Jaipur’s gold standard for financial intelligence, precision taxation compliance, and robust statutory auditing. We empower individual taxpayers, MSME sectors, and highly scaled corporate bodies with transparent accounting systems.
                </p>
              </section>

              {/* Bio & Google reviews highlight */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
                    CA Alok Khamnotra
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Alok Khamnotra is a Fellow Chartered Accountant with over 15 years of exhaustive experience navigating Indian taxation changes (direct and indirect), MCA company regulations, and operational system processes. 
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With a deeply detailed and customer-centric advisory system, his practice has earned a consistent <strong className="text-amber-700">4.9-star rating based on 104 verified reviews</strong> on Google. Client feedback highlights his ability to turn complex regulatory defaults into systematic, safe, and lawful financial recoveries.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                      <span className="block text-2xl font-display font-bold text-amber-700">15+</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-semibold font-semibold">Years Experience</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                      <span className="block text-2xl font-display font-bold text-amber-700">500+</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-semibold">Active Clients</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                      <span className="block text-2xl font-display font-bold text-amber-700">4.9 ★</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-semibold">104 Google reviews</span>
                    </div>
                  </div>
                </div>

                {/* Right profile graphic block */}
                <div className="lg:col-span-5 relative bg-white rounded-3xl border border-slate-200 p-8 space-y-6 shadow-sm">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl" />
                  <span className="text-xs font-mono text-amber-700 uppercase block font-bold">CORE VALUES</span>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 text-xs block font-bold">Double-Scrutiny Assurance</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Every document is verified against dual checklists before formal filing.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 text-xs block font-bold">Proactive Deadline Alarms</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">We notify you 7-14 days prior to any GST, TDS, or ROC filing deadlines.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 text-xs block font-bold">Absolute Privacy Vault</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">All ledger databases are protected using high-security standard cloud platforms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Physical Address Map & Coordinates Section */}
              <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-6 space-y-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Office Coordinates</span>
                    <h3 className="text-2xl font-sans font-bold text-slate-900 tracking-tight">
                      Vidyadhar Nagar Corporate Office
                    </h3>
                    
                    <div className="space-y-4 text-sm text-slate-600">
                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          F 103, BalaJi Tower 2 Rd, near Manipal Hospital,<br />
                          Sector 2, Sector 5, Vidyadhar Nagar,<br />
                          Jaipur, Rajasthan &bull; 302039
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">077910 77734</span>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>Open daily: 10:00 AM – 7:30 PM &bull; Sunday: Closed</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <a 
                        href="https://maps.google.com/?q=F+103,+BalaJi+Tower+2+Rd,+near+Manipal+Hospital,+Sector+2,+Sector+5,+Vidyadhar+Nagar,+Jaipur,+Rajasthan+302039"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
                      >
                        Open Google Maps
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a 
                        href="tel:+917791077734"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-colors"
                      >
                        Call Office
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-4 min-h-[220px] flex flex-col justify-between shadow-inner">
                    <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest flex justify-between font-semibold">
                      <span>LOCATION GRID</span>
                      <span>XQ9F+PH Jaipur, Rajasthan</span>
                    </div>
                    
                    <div className="text-center py-6">
                      <p className="text-xs text-slate-600 max-w-sm mx-auto mb-4 leading-relaxed">
                        Conveniently situated on Balaji Tower 2 Road near Manipal Hospital in Vidyadhar Nagar, our offices are easily accessible for clients seeking in-person private consults.
                      </p>
                      <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200 shadow-xs">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400 block text-right font-mono font-semibold">
                      CA Alok Khamnotra firm Location Registry &bull; Vidyadhar Nagar Jaipur
                    </span>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* SERVICES VIEW */}
          {view === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedServiceId ? (
                <ServiceDetail 
                  service={servicesData.find(s => s.id === selectedServiceId)!}
                  onBack={() => setSelectedServiceId(null)}
                />
              ) : (
                <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
                  
                  {/* Title and Search */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Corporate Divisions</span>
                      <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-1">
                        Specialized Financial & Tax Services
                      </h1>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">
                        Click on any service card below to read a comprehensive overview and procedural steps.
                      </p>
                    </div>

                    {/* Search bar */}
                    <div className="relative w-full md:w-80">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={serviceSearch}
                        onChange={(e) => setServiceSearch(e.target.value)}
                        placeholder="Search services..."
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-500/10 shadow-xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Grid index */}
                  {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredServices.map((service, index) => (
                        <div
                          key={service.id}
                          onClick={() => setSelectedServiceId(service.id)}
                          className="group p-6 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-amber-500/20 rounded-2xl cursor-pointer transition-all relative overflow-hidden shadow-xs hover:shadow-md"
                        >
                          <span className="text-xs font-mono text-amber-700 font-bold uppercase block mb-3">Service 0{index + 1}</span>
                          <h3 className="text-lg font-sans font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-1 text-[11px] font-mono text-amber-700 font-bold uppercase tracking-wider">
                            Explore Service Details
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-500 text-sm">No services matched your query. Try searching for "tax", "GST", "audit", or "startup".</p>
                    </div>
                  )}

                </div>
              )}
            </motion.div>
          )}

          {/* INDUSTRIES VIEW */}
          {view === 'industries' && (
            <motion.div
              key="industries"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedIndustryId ? (
                <IndustryDetail 
                  industry={industriesData.find(ind => ind.id === selectedIndustryId)!}
                  onBack={() => setSelectedIndustryId(null)}
                />
              ) : (
                <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
                  
                  {/* Title and Search */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Specialized Verticals</span>
                      <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-1">
                        Sectors & Industries We Assist
                      </h1>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">
                        Every industry faces unique tax challenges and parameters. Select your sector to view specific accounting focuses.
                      </p>
                    </div>

                    {/* Search bar */}
                    <div className="relative w-full md:w-80">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={industrySearch}
                        onChange={(e) => setIndustrySearch(e.target.value)}
                        placeholder="Search industry sectors..."
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-500/10 shadow-xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Grid index */}
                  {filteredIndustries.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredIndustries.map((ind, index) => (
                        <div
                          key={ind.id}
                          onClick={() => setSelectedIndustryId(ind.id)}
                          className="group p-6 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-amber-500/20 rounded-2xl cursor-pointer transition-all relative overflow-hidden shadow-xs hover:shadow-md"
                        >
                          <span className="text-xs font-mono text-amber-700 font-bold uppercase block mb-3">Sector 0{index + 1}</span>
                          <h3 className="text-lg font-sans font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                            {ind.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                            {ind.description}
                          </p>
                          <div className="flex items-center gap-1 text-[11px] font-mono text-amber-700 font-bold uppercase tracking-wider">
                            Explore Sector Audits
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-500 text-sm">No sectors matched your query. Try searching for "retail", "manufacturing", or "startup".</p>
                    </div>
                  )}

                </div>
              )}
            </motion.div>
          )}

          {/* TEAM VIEW */}
          {view === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 py-16 space-y-12 animate-fade-in"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Managing Leadership</span>
                <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-3">
                  Our Managing Partner
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed">
                  CA Alok Khamnotra oversees all core audit practices, corporate tax consulting, and client representations. Click on his card to view his professional biography and Areas of Expertise.
                </p>
              </div>

              <div className="flex justify-center">
                {teamData.map((member) => (
                  <div 
                    key={member.name} 
                    onClick={() => navigateTo('team-detail')}
                    className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-amber-500/40 cursor-pointer shadow-md hover:shadow-lg transition-all relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                    
                    {/* Placeholder image representation with elegant styling */}
                    <div className="w-24 h-24 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-display font-bold text-3xl shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      {member.name.split(' ').slice(-1)[0][0]}
                    </div>

                    <div className="space-y-4 flex-grow text-left">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-sans font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors">{member.name}</h3>
                          <span className="text-[10px] font-mono bg-amber-50 border border-amber-200 text-amber-800 rounded px-1.5 py-0.5 font-bold">{member.qualification.split(',')[0]}</span>
                        </div>
                        <p className="text-xs text-amber-700 font-mono mt-1 font-semibold">{member.role}</p>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600">
                        <p><strong>Designation:</strong> {member.designation}</p>
                        <p><strong>Experience:</strong> {member.experience}</p>
                      </div>

                      <p className="text-sm text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                        {member.description}
                      </p>

                      <div className="inline-flex items-center gap-1 text-xs font-mono text-amber-700 font-bold group-hover:text-amber-800 transition-colors">
                        VIEW COMPLETE PROFILE & EXPERTISE
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TEAM DETAIL VIEW (NEW PAGE FOR ALOK) */}
          {view === 'team-detail' && (
            <motion.div
              key="team-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 py-16 space-y-10"
            >
              {/* Back button */}
              <button
                onClick={() => navigateTo('team')}
                className="group inline-flex items-center gap-2 text-sm font-mono text-amber-700 hover:text-amber-800 cursor-pointer transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                BACK TO FOUNDER PAGE
              </button>

              {/* Founder Profile Details card */}
              {teamData.map((member) => (
                <div key={member.name} className="space-y-12">
                  
                  {/* Top profile banner */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden shadow-md">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="w-32 h-32 rounded-3xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-display font-bold text-5xl shrink-0 shadow-sm mx-auto md:mx-0">
                      {member.name.split(' ').slice(-1)[0][0]}
                    </div>

                    <div className="space-y-4 text-center md:text-left flex-grow">
                      <div>
                        <h1 className="text-3xl font-sans font-bold text-slate-900 tracking-tight leading-none mb-2">{member.name}</h1>
                        <p className="text-sm text-amber-700 font-mono font-bold tracking-wider uppercase">{member.designation}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <GraduationCap className="w-4 h-4 text-amber-600" />
                          <span><strong>Qualifications:</strong> {member.qualification}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <Calendar className="w-4 h-4 text-amber-600" />
                          <span><strong>Experience:</strong> {member.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comprehensive narrative details */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Left detailed columns (Biography) */}
                    <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs text-left">
                      <h2 className="text-xl font-sans font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
                        Professional Biography
                      </h2>
                      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                        {member.detailedBio.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>

                      {/* Milestones / Achievements */}
                      <div className="pt-4 space-y-4">
                        <h3 className="text-base font-sans font-bold text-slate-900 tracking-tight">
                          Key Achievements & Contributions
                        </h3>
                        <ul className="space-y-2.5 text-xs text-slate-600">
                          {member.keyMilestones.map((milestone, mIdx) => (
                            <li key={mIdx} className="flex gap-2">
                              <span className="text-emerald-600 shrink-0 mt-0.5">✔</span>
                              <span>{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Columns (Areas of Expertise) */}
                    <div className="md:col-span-5 space-y-6 text-left">
                      <div className="bg-gradient-to-br from-amber-50 to-amber-50/10 border border-amber-200 rounded-3xl p-6 md:p-8 shadow-xs">
                        <h2 className="text-base font-mono text-amber-800 uppercase tracking-wider mb-4 font-bold flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-amber-700" />
                          Areas of Expertise
                        </h2>
                        <ul className="space-y-3">
                          {member.areasOfExpertise.map((expertise, eIdx) => (
                            <li key={eIdx} className="flex gap-2.5 text-xs text-slate-700 font-medium">
                              <span className="text-amber-700 shrink-0 font-bold">&#8226;</span>
                              <span>{expertise}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Advisory prompt */}
                      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center text-white shadow-md">
                        <h4 className="text-sm font-sans font-bold mb-2">Schedule Consultation Directly</h4>
                        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                          Request a personal tax consult or statutory corporate auditing with CA Alok Khamnotra.
                        </p>
                        <a
                          href={`https://wa.me/917791077734?text=${encodeURIComponent(`Hello CA Alok Khamnotra, I read your professional detailed profile and would like to schedule a personal financial consultation regarding my business.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Consult CA Alok Khamnotra
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </motion.div>
          )}

          {/* BLOGS VIEW */}
          {view === 'blogs' && (
            <motion.div
              key="blogs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 py-16 space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Regulatory Bulletins</span>
                <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-3">
                  Indian Taxation & Corporate Insights
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Stay updated with deep articles written directly by our partners covering GST circulars, income tax updates, and MSME concessions.
                </p>
              </div>

              <div className="space-y-10">
                {blogsData.map((blog) => (
                  <article key={blog.id} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-amber-500/30 transition-all text-left shadow-xs hover:shadow-sm">
                    <div className="flex items-center gap-4 text-xs font-mono text-amber-700 font-bold mb-3">
                      <span>{blog.category}</span>
                      <span>&bull;</span>
                      <span>{blog.date}</span>
                      <span>&bull;</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 tracking-tight hover:text-amber-700 transition-colors mb-3">
                      {blog.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {blog.summary}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      {blog.content.map((p, pIdx) => (
                        <p key={pIdx} className="text-xs text-slate-500 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-mono text-slate-400">
                      <span>Author: {blog.author}</span>
                      <a 
                        href={`https://wa.me/917791077734?text=${encodeURIComponent(`Hello CA Alok, I read your article about "${blog.title}" and would like to discuss this.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors font-bold"
                      >
                        Ask Question on WhatsApp
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          {/* CONTACT VIEW */}
          {view === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-4 py-16 space-y-16"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Corporate Registry Desk</span>
                <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mt-2 mb-3">
                  Initiate Professional Advisory
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have a taxation issue or need a comprehensive statutory audit? Submit your details below or connect via fast-track telephone links.
                </p>
              </div>

              {/* Form & details panel columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
                
                {/* Contact Coordinates (Left) */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-8 flex-grow shadow-sm">
                    <span className="text-xs font-mono text-amber-700 font-bold uppercase block">Jaipur Office Address</span>
                    
                    <div className="space-y-6 text-sm text-slate-600">
                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          F 103, BalaJi Tower 2 Rd, near Manipal Hospital,<br />
                          Sector 2, Sector 5, Vidyadhar Nagar,<br />
                          Jaipur, Rajasthan &bull; 302039
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <a href="tel:+917791077734" className="block hover:text-amber-800 transition-colors font-semibold text-slate-900">077910 77734</a>
                          <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Consulting Hotdesk Line</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          Open daily: 10:00 AM – 7:30 PM<br />
                          Sunday: Closed &bull; Online Support Available
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">Google Location Registry</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Registered Location Index: <strong className="text-slate-700">XQ9F+PH Jaipur, Rajasthan</strong>. We welcome visitors for structured corporate tax consults during office hours.
                      </p>
                      <a 
                        href="https://maps.google.com/?q=F+103,+BalaJi+Tower+2+Rd,+near+Manipal+Hospital,+Sector+2,+Sector+5,+Vidyadhar+Nagar,+Jaipur,+Rajasthan+302039"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 hover:text-amber-800 transition-colors font-bold"
                      >
                        Navigate on Map <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Immediate Emergency support trigger */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 text-center">
                    <span className="text-[10px] font-mono uppercase text-emerald-700 block mb-1 font-bold">Tax/GST Deadline Emergency?</span>
                    <h4 className="text-sm font-sans font-bold text-slate-800 mb-2">Connect Directly via Mobile WhatsApp</h4>
                    <a 
                      href="https://wa.me/917791077734?text=Hello%20CA%20Alok%20Khamnotra,%20I%20have%20an%20urgent%20tax%20or%20GST%20deadline%20concern."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Instant Deadlines Help
                    </a>
                  </div>
                </div>

                {/* Form (Right) */}
                <div className="lg:col-span-7">
                  <ContactForm serviceOrIndustryTitle="Vidyadhar Nagar Main Desk" />
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* CORE FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-display font-bold text-sm">
                AK
              </div>
              <span className="font-display font-bold text-white text-base">CA Alok Khamnotra</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
               Leading Fellow Chartered Accountant firm in Rajasthan, India. Delivers regulatory statutory audits, tax counseling, corporate law, and high-fidelity growth models.
            </p>
            <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold font-mono">
              <span>FCA Registration Vetted</span>
              <span>&bull;</span>
              <span className="text-amber-500/70">Jaipur District, Rajasthan</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Advisory Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors cursor-pointer">About CA Alok</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors cursor-pointer">15 Core Services</button></li>
              <li><button onClick={() => navigateTo('industries')} className="hover:text-amber-400 transition-colors cursor-pointer">Sectors & Industries</button></li>
              <li><button onClick={() => navigateTo('team')} className="hover:text-amber-400 transition-colors cursor-pointer">Founder Profile</button></li>
              <li><button onClick={() => navigateTo('blogs')} className="hover:text-amber-400 transition-colors cursor-pointer">Insights & Blogs</button></li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Office Access</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="leading-relaxed">
                <strong>Address:</strong> F 103, BalaJi Tower 2 Rd, near Manipal Hospital, Sector 2, Sector 5, Vidyadhar Nagar, Jaipur, Rajasthan 302039.
              </p>
              <p>
                <strong>Phone:</strong> 077910 77734
              </p>
              <p>
                <strong>Operational Hours:</strong> 10:00 AM – 7:30 PM (Sun Closed)
              </p>
            </div>
          </div>

          {/* Column 4: Quick Disclaimer */}
          <div className="md:col-span-3 space-y-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">ICAI Regulatory Compliance</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
              As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to advertise or solicit work. This website represents an informational portal highlighting firm parameters, expertise sectors, and coordinates.
            </p>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="w-full bg-slate-950 py-6 px-4 text-center text-xs text-slate-500 font-mono">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} CA Alok Khamnotra. All Rights Reserved.</span>
            <span>Created for Chartered Accountants Vidyadhar Nagar Jaipur &bull; Estd. 2011</span>
          </div>
        </div>
      </footer>

      {/* PERSISTENT FLOATING WHATSAPP CTA WIDGET */}
      <a
        href="https://wa.me/917791077734?text=Hello%20CA%20Alok%20Khamnotra,%20I%20have%20a%20taxation%20or%20auditing%20query%20regarding%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group flex items-center justify-center"
        title="Consult CA Alok Khamnotra on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white/10" />
        <span className="absolute right-14 bg-emerald-950 text-emerald-400 text-[10px] font-mono uppercase tracking-wider py-1 px-3.5 rounded-lg border border-emerald-500/20 shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
          Quick Tax Query
        </span>
      </a>

    </div>
  );
}
