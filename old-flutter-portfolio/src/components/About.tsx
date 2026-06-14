"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why the Full Stack Matters</h2>
                    <div className="w-20 h-1 bg-linear-to-r from-violet-600 to-blue-500 rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                    <p>
                        With a background spanning over a decade in Backend (Node.js, Go) and DevOps (AWS, Kubernetes),
                        I bring a unique perspective to mobile development.
                    </p>
                    <p>
                        My experience at companies like TIVIT LATAM and OpenPass taught me that a great mobile app requires
                        robust architecture. I build Flutter applications that are not only beautiful but also optimized for
                        performance, security, and seamless API integration.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
