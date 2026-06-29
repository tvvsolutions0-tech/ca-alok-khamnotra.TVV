import React, { useState } from 'react';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactFormProps {
  serviceOrIndustryTitle?: string;
  onSuccessCallback?: () => void;
}

export default function ContactForm({ serviceOrIndustryTitle, onSuccessCallback }: ContactFormProps) {
  const [formData, setFormData] = useState<Inquiry>({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    serviceOrIndustry: serviceOrIndustryTitle || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // CA Alok Khamnotra standard number
  const WHATSAPP_NUMBER = '917791077734'; // +91 77910 77734

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill out Name, Phone, and Email fields.');
      return;
    }

    setLoading(true);
    // Simulate API storage
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }, 800);
  };

  // Prepares the WhatsApp pre-filled message structure
  const getWhatsAppLink = () => {
    const contextText = formData.serviceOrIndustry 
      ? `Regarding: *${formData.serviceOrIndustry}*\n` 
      : '';
    const text = `Hello CA Alok Khamnotra,\n\nI am interested in your financial advisory services.\n\n*My Details:*\n• Name: ${formData.name || 'Visitor'}\n• Phone: ${formData.phone || 'N/A'}\n• Email: ${formData.email || 'N/A'}\n\n${contextText}*My Requirement:* ${formData.requirement || 'I would like to schedule a consultation.'}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-lg shadow-slate-100">
      {serviceOrIndustryTitle && (
        <div className="mb-6 pb-4 border-b border-slate-100">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-semibold">Inquiring Service / Industry Division</span>
          <h4 className="text-lg font-sans font-semibold text-slate-900 tracking-tight">{serviceOrIndustryTitle}</h4>
        </div>
      )}

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <Check className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-sans font-semibold text-slate-900 mb-2">Inquiry Submitted Successfully</h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. CA Alok Khamnotra’s office has received your request. We will review your details and contact you shortly.
          </p>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium rounded-xl transition-all shadow-md"
          >
            <MessageSquare className="w-5 h-5" />
            Connect via WhatsApp Instantly
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                Full Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alok Kumar"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-500/10 transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                Phone Number <span className="text-amber-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-500/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
              Email Address <span className="text-amber-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="alok@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-500/10 transition-all"
            />
          </div>

          <div>
            <label htmlFor="requirement" className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
              Brief Requirement <span className="text-slate-400">(Optional)</span>
            </label>
            <textarea
              id="requirement"
              name="requirement"
              rows={3}
              value={formData.requirement}
              onChange={handleChange}
              placeholder="Describe your taxation, accounting, or audit requirements briefly..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-500/10 transition-all resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold rounded-xl transition-all shadow-md cursor-pointer"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold rounded-xl border border-emerald-200 transition-all text-center"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
