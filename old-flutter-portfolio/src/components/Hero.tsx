"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-4xl text-center space-y-6"
            >
                <motion.h1
                    variants={item}
                    className="text-5xl md:text-8xl font-bold tracking-tight"
                >
                    Fabián Karaben
                </motion.h1>

                <motion.h2
                    variants={item}
                    className="text-2xl md:text-4xl font-medium text-muted-foreground"
                >
                    Flutter Engineer with a <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-blue-500 font-bold">Platform Mindset.</span>
                </motion.h2>

                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting pixel-perfect mobile experiences backed by 10+ years of Backend & DevOps excellence.
                    I don't just build apps; I engineer complete solutions.
                </motion.p>

                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-foreground/20"
                    >
                        View Projects
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fabiankaraben"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-border bg-background rounded-full font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <Linkedin className="w-5 h-5" />
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
