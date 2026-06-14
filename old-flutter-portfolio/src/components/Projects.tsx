"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "CineFlow",
        description: "A visually immersive movie explorer app featuring offline support, dynamic animations, and complex state management using Riverpod.",
        tech: ["Flutter", "Riverpod", "TMDB API", "Hive"],
        link: "https://cineflow.fabka.workers.dev",
        github: "https://github.com/fabiankaraben/cineflow-app",
        image: "/projects/cineflow-featured.webp",
    },
    {
        title: "PennyVault",
        description: "A privacy-first personal finance app with offline support. Tracks expenses and visualizes spending habits with beautiful charts in a clean 'Fintech' interface.",
        tech: ["Flutter", "Provider", "Hive", "fl_chart"],
        link: "https://pennyvault.fabka.workers.dev/",
        github: "https://github.com/fabiankaraben/pennyvault-app",
        image: "/projects/pennyvault-featured.webp",
    },
    {
        title: "StreamDesk",
        description: "A desktop-optimized customer support dashboard. Features a split-view interface, real-time chat simulation, and persistent chat history.",
        tech: ["Flutter", "BLoC", "Hydrated BLoC"],
        link: "https://streamdesk.fabka.workers.dev/",
        github: "https://github.com/fabiankaraben/streamdesk-app",
        image: "/projects/streamdesk-featured.webp",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A selection of my recent work in mobile development, focusing on high-quality UX and robust architecture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="bg-card border rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all flex flex-col"
                        >
                            <div className="aspect-video bg-muted relative group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 space-y-4 grow flex flex-col">
                                <h3 className="text-2xl font-bold bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent w-fit">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono px-3 py-1 bg-violet-500/10 text-black dark:text-violet-400 rounded-full border border-violet-500/20 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-muted rounded-full transition-colors"
                                        title="View Source"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-muted rounded-full transition-colors"
                                        title="Live Demo"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
