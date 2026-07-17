"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Mail, User, MessageSquare, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { Language, translations } from "@/lib/translations";

export default function ContactSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = lang === "es" ? "El nombre es requerido." : "Name is required.";
      } else if (value.trim().length < 2) {
        error = t.nameTooShort;
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = lang === "es" ? "El correo electrónico es requerido." : "Email is required.";
      } else if (!emailRegex.test(value)) {
        error = t.invalidEmail;
      }
    } else if (name === "message") {
      if (!value.trim()) {
        error = lang === "es" ? "El mensaje es requerido." : "Message is required.";
      } else if (value.trim().length < 10) {
        error = t.messageTooShort;
      }
    }
    return error;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when user edits
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError || undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields before submitting
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError || undefined,
        email: emailError || undefined,
        message: messageError || undefined,
      });
      return;
    }

    setStatus("submitting");
    setServerError(null);

    const URL = "https://xeost.com/api/portfolio-contact";
    const API_KEY = process.env.NEXT_PUBLIC_PORTFOLIO_CONTACT_API_KEY || "";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Submission failed:", data.error, data.details);
        setStatus("error");
        
        // Handle validation details from API if returned
        if (data.details) {
          const apiErrors: typeof errors = {};
          if (data.details.name) apiErrors.name = data.details.name[0];
          if (data.details.email) apiErrors.email = data.details.email[0];
          if (data.details.message) apiErrors.message = data.details.message[0];
          setErrors(apiErrors);
        }
        
        setServerError(data.error || (lang === "es" ? "Error al enviar el formulario." : "Failed to send form."));
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Network or parsing error:", error);
      setStatus("error");
      setServerError(lang === "es" 
        ? "Error de conexión. Por favor, comprueba tu red." 
        : "Connection error. Please check your network.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setServerError(null);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60 max-w-5xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="font-mono text-sm text-brand-orange">{"// 07."}</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
            {t.getInTouch}
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          {t.contactFsDesc}
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: LinkedIn / Quick Links */}
        <div className="md:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
          <div className="space-y-6 text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {lang === "es" ? "Conectemos" : "Let's Connect"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              {lang === "es" 
                ? "Si prefieres mensajería directa en tiempo real, puedes contactarme en LinkedIn para una respuesta rápida."
                : "If you prefer real-time direct messaging, connect with me on LinkedIn for a prompt response."}
            </p>
          </div>
          
          <div className="mt-8">
            <Link
              href="https://linkedin.com/in/fabiankaraben"
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 border border-brand-orange/40 text-sm font-semibold rounded-xl text-white bg-brand-orange hover:bg-brand-orange-hover transition-all duration-300 shadow-lg shadow-brand-orange/20 hover:scale-[1.02]"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
              {t.connectLinkedin}
            </Link>
          </div>
        </div>

        {/* Right Side: The Contact Form */}
        <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-brand-orange/30">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center py-8 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {t.contactFormSuccess}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 max-w-sm mx-auto font-sans">
                {t.contactFormSuccessDesc}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-850 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-sans cursor-pointer hover:scale-[1.01]"
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-3 font-sans animate-shake">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{t.contactFormError}</h4>
                    <p className="mt-1 text-xs opacity-90">{serverError || t.contactFormErrorDesc}</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {t.contactFormName}
                </label>
                <div className="relative group">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 dark:text-slate-500 transition-colors group-focus-within:text-brand-orange" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.contactFormNamePlaceholder}
                    disabled={status === "submitting"}
                    className={`w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-slate-950/40 border rounded-xl focus:ring-2 outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 font-sans text-sm ${
                      errors.name
                        ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-brand-orange focus:ring-brand-orange/20"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-rose-500 font-sans flex items-center gap-1.5 animate-slideDown">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {t.contactFormEmail}
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 dark:text-slate-500 transition-colors group-focus-within:text-brand-orange" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.contactFormEmailPlaceholder}
                    disabled={status === "submitting"}
                    className={`w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-slate-950/40 border rounded-xl focus:ring-2 outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 font-sans text-sm ${
                      errors.email
                        ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-brand-orange focus:ring-brand-orange/20"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-500 font-sans flex items-center gap-1.5 animate-slideDown">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {t.contactFormMessage}
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3.5 top-4.5 w-4.5 h-4.5 text-slate-400 dark:text-slate-500 transition-colors group-focus-within:text-brand-orange" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t.contactFormMessagePlaceholder}
                    disabled={status === "submitting"}
                    className={`w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-slate-950/40 border rounded-xl focus:ring-2 outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 font-sans text-sm resize-none ${
                      errors.message
                        ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-brand-orange focus:ring-brand-orange/20"
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="text-xs text-rose-500 font-sans flex items-center gap-1.5 animate-slideDown">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.01] shadow-lg shadow-brand-orange/20 cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t.contactFormSubmitting}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contactFormSubmit}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
