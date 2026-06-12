import Image from "next/image";
import Link from "next/link";
import { Terminal, Cpu, Layers, Server, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechGridBackground from "@/components/TechGridBackground";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import { getAllPosts } from "@/lib/blog";

// Static image imports
import fkPortrait from "@/assets/fk.jpg";
import coreBankingApi from "@/assets/projects/core-banking-api.webp";
import coreBankingPlatform from "@/assets/projects/core-banking-platform.webp";
import xeoContext from "@/assets/projects/xeocontext.webp";
import wordsus from "@/assets/projects/wordsus.webp";
import xeoCast from "@/assets/projects/xeocast.jpg";
import goMiniProject from "@/assets/mini-projects/go.jpg";

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 3);

  const skills = [
    { name: "Java", desc: "Enterprise, Robustness", icon: "java" },
    { name: "Spring Boot", desc: "Framework, DI, MVC", icon: "spring" },
    { name: "Hibernate", desc: "ORM, JPA, Data Binding", icon: "hibernate" },
    { name: "Maven", desc: "Build, Dependencies", icon: "maven" },
    { name: "Kubernetes", desc: "Orchestration, Scaling", icon: "kubernetes" },
    { name: "Go", desc: "Gin, Echo, Chi", icon: "golang" },
    { name: "TypeScript", desc: "Node.js, Express.js, Hono", icon: "typescript" },
    { name: "AWS", desc: "EC2, S3, Lambda", icon: "aws" },
    { name: "Cloudflare", desc: "Workers, D1, R2", icon: "cloudflare" },
    { name: "Python", desc: "Django, Flask, FastAPI", icon: "python" },
    { name: "Docker", desc: "Portability, Consistency", icon: "docker" },
    { name: "PostgreSQL", desc: "Extensibility, Reliability", icon: "postgresql" },
    { name: "MongoDB", desc: "Scalability, Replication", icon: "mongodb" },
    { name: "Redis", desc: "Caching, Performance", icon: "redis" },
    { name: "SQLite", desc: "Serverless, D1, Turso", icon: "sqlite" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-white">
      <TechGridBackground />

      <Header />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-900 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYSTEM_STATUS: ACTIVE // REGION: AWS-EAST-1</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Fabián Karaben
            <span className="block mt-3 bg-gradient-to-r from-brand-orange to-amber-500 bg-clip-text text-transparent">
              Java Backend Developer
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Architecting robust and scalable systems. I build the digital backbone of modern web applications, focusing on performance, security, and reliability.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="https://github.com/fabiankaraben"
              target="_blank"
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/fabiankaraben"
              target="_blank"
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 01.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative p-1 border border-slate-200/80 dark:border-slate-900 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={fkPortrait}
                  alt="Fabián Karaben"
                  width={220}
                  height={220}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-4 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <p>
                I&apos;m a backend developer with a solid background in infrastructure (DevOps), Node.js, and Go, currently focused on the Java and Spring Boot ecosystem. I&apos;m looking to join a team as a Java Backend Developer where I can contribute my architectural background and my ability to implement robust and efficient systems.
              </p>
              <p>
                I hold an <strong className="text-slate-900 dark:text-slate-100">AWS</strong> certification and am actively pursuing additional certifications to enhance my proficiency in cloud service providers.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 02.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              dateInfo="Issued Oct 2024 · Expires Oct 2027"
              iconName="aws"
              verifyUrl="https://www.credly.com/badges/93cee039-21f8-4bd2-9352-e0c977897905/public_url"
            />
            <CertificationCard
              title="Oracle Java SE 21 Developer Professional: 1Z0-830"
              issuer="Udemy"
              dateInfo="Issued Feb 2026"
              iconName="udemy"
              verifyUrl="https://www.udemy.com/certificate/UC-a0a247a5-02c1-4ef2-ac9b-d74c751f5eff/"
            />
            <CertificationCard
              title="Spring Certified Professional"
              issuer="Udemy"
              dateInfo="Issued Mar 2026"
              iconName="udemy"
              verifyUrl="https://www.udemy.com/certificate/UC-5c3103ab-4a9e-4cf0-8ee6-f5c2ad966072/"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 03.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              Core Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-white/30 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200 dark:border-slate-900/80 rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-orange/30 hover:bg-slate-100/50 dark:hover:bg-slate-900/40"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3 relative">
                  <Image
                    src={`/icons/${skill.icon}.svg`}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{skill.name}</h3>
                <p className="text-xs text-slate-500 mt-1 font-sans">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 04.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              Portfolio Projects
            </h2>
          </div>

          <div className="space-y-16">
            {/* Monolith & EDA Banking Section */}
            <div>
              <h3 className="text-lg font-mono text-slate-600 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-orange" />
                <span>Enterprise Banking Systems</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Core Banking API"
                  description="A monolithic banking backend built with Java 21, Spring Boot, and Hexagonal Architecture. Features robust ACID transactions and idempotency controlled with Redis."
                  image={coreBankingApi}
                  tags={["Java 21", "Spring Boot 3", "RabbitMQ", "Hexagonal", "PostgreSQL", "Redis"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/core-banking-api" }]}
                />
                <ProjectCard
                  title="Core Banking Platform"
                  description="A highly scalable, distributed enterprise system using an Event-Driven Architecture (EDA). Implements distributed transactions and Database-per-Service."
                  image={coreBankingPlatform}
                  tags={["Java 21", "Spring Boot 3.3", "Apache Kafka", "Saga Pattern", "Microservices"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/core-banking-platform" }]}
                />
              </div>
            </div>

            {/* Real World Projects */}
            <div>
              <h3 className="text-lg font-mono text-slate-600 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-orange" />
                <span>Real World Projects & Products</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="XeoContext"
                  description="The Source of Truth for System Design. Unified viewer for Markdown, OpenAPI, and AsyncAPI definitions."
                  image={xeoContext}
                  tags={["Docker", "Markdown", "OpenAPI", "AsyncAPI", "Next.js"]}
                  links={[
                    { label: "Website", href: "https://xeocontext.com" },
                    { label: "GitHub", href: "https://github.com/xeost/xeocontext" },
                  ]}
                />
                <ProjectCard
                  title="Wordsus"
                  description="Your Personal Cloud Library. A unified, browser-based reader for PDFs and EPUBs with native-like performance."
                  image={wordsus}
                  tags={["PWA", "WebSockets", "Canvas", "Go", "PDF Reader", "EPUB Reader"]}
                  links={[
                    { label: "Website", href: "https://wordsus.com" },
                    { label: "GitHub", href: "https://github.com/orgs/wordsus/repositories" },
                  ]}
                />
                <ProjectCard
                  title="XeoCast"
                  description="A system to generate podcast episodes with AI. Features a Cloudflare-based API and automated video processing with Python/FFmpeg."
                  image={xeoCast}
                  tags={["TypeScript", "Hono", "Python", "Cloudflare", "Gemini", "FFmpeg"]}
                  links={[
                    { label: "Website", href: "https://xeocast.com" },
                    { label: "GitHub", href: "https://github.com/orgs/xeocast/repositories" },
                  ]}
                />
              </div>
            </div>

            {/* Mini-Projects Series */}
            <div>
              <h3 className="text-lg font-mono text-slate-600 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-orange" />
                <span>150 Mini-Projects Series</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-3xl text-sm leading-relaxed">
                Learning from examples and practical exercises is crucial because it bridges theoretical knowledge with real-world application. Examples provide context, showing how concepts work in practice, while hands-on exercises build problem-solving skills and confidence.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="150 Spring mini-projects"
                  description="Explore 150 Spring mini-projects, from basic configuration to advanced microservices, mastering the Spring ecosystem through hands-on practice."
                  image="/mini-projects/imgs/spring.webp"
                  tags={["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring Cloud", "REST API", "Microservices", "Testing"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/spring-mini-projects" }]}
                />
                <ProjectCard
                  title="150 Java mini-projects"
                  description="Explore 150 Java mini-projects, from basic applications to advanced enterprise solutions backend skills in a hands-on way."
                  image="/mini-projects/imgs/java.webp"
                  tags={["Java", "Backend", "Spring Boot", "REST API", "Microservices", "JPA", "Hibernate", "PostgreSQL", "Docker", "JWT", "Security", "Redis", "GraphQL", "MongoDB"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/java-mini-projects" }]}
                />
                <ProjectCard
                  title="150 Go mini-projects"
                  description="Explore 150 Go mini-projects, from basic HTTP servers to advanced microservices, with Docker, enhancing backend skills in a hands-on way."
                  image={goMiniProject}
                  tags={["Go", "Backend", "Microservices", "REST API", "JWT", "PostgreSQL", "Redis", "GraphQL", "MongoDB", "WebSocket", "RabbitMQ", "gRPC", "Elasticsearch", "Jaeger", "Security"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/golang-mini-projects" }]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Articles Section */}
        {featuredPosts.length > 0 && (
          <section id="blog" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
            <div className="flex items-center gap-3 mb-12">
              <span className="font-mono text-sm text-brand-orange">// 05.</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
                Featured Articles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200 dark:border-slate-900 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand-orange/40 hover:shadow-lg hover:shadow-slate-200/50 hover:dark:shadow-brand-orange/5"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500 mb-2">{post.pubDate}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-orange transition-colors duration-300 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
                      {post.description}
                    </p>
                    <span className="mt-auto text-brand-orange group-hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                      Read article &rarr;
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-900 hover:border-brand-orange/40 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
              >
                See all articles &rarr;
              </Link>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60 text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="font-mono text-sm text-brand-orange">// 06.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              Get in Touch
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-10">
            Have a project in mind or just want to chat? Feel free to reach out! I&apos;m always open to new opportunities and collaborations in backend architecture and cloud integrations.
          </p>

          <Link
            href="https://linkedin.com/in/fabiankaraben"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-4.5 border border-brand-orange/40 text-base font-semibold rounded-xl text-white bg-brand-orange hover:bg-brand-orange-hover transition-all duration-300 shadow-lg shadow-brand-orange/20"
          >
            <LinkedinIcon className="w-5 h-5" />
            Connect on LinkedIn
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
