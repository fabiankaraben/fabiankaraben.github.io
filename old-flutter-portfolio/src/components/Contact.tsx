"use client";

import React from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
    const handleCopyEmail = () => {
        const userP1 = "fabian";
        const userP2 = "karaben";
        const domainP1 = "gma";
        const domainP2 = "il.com"
        const email = `${userP1}${userP2}@${domainP1}${domainP2}`;

        navigator.clipboard.writeText(email).then(() => {
            toast.success("Email copied to clipboard!");
        }).catch(() => {
            toast.error("Failed to copy email.");
        });
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-linear-to-br from-violet-600 to-blue-700 text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative group shadow-2xl shadow-violet-500/20">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                            Let's engineer something <span className="italic opacity-70 underline decoration-1 underline-offset-8">extraordinary.</span>
                        </h2>

                        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light">
                            Searching for a developer who understands the full infrastructure stack?
                            I'm open to full-time opportunities and interesting collaborations.
                        </p>

                        <div className="flex flex-wrap gap-8 items-center">
                            <button
                                onClick={handleCopyEmail}
                                className="p-4 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center border border-white/20 backdrop-blur-sm"
                                title="Copy email"
                            >
                                <Mail className="w-8 h-8" />
                            </button>
                            <a
                                href="https://www.linkedin.com/in/fabiankaraben"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center border border-white/20 backdrop-blur-sm"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-8 h-8" />
                            </a>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[120px] rounded-full -mr-48 -mt-48 group-hover:scale-150 transition-transform duration-1000" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 blur-[100px] rounded-full -ml-32 -mb-32 opacity-50" />
                    </div>
                </div>

                <footer className="mt-24 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Fabián Karaben. All rights reserved.</p>
                    <p className="italic">Thanks for stopping by!</p>
                </footer>
            </div>
        </section>
    );
}
