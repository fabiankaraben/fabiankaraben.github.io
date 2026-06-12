import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabián Karaben | Java Backend Developer",
  description: "Portfolio of Fabián Karaben, a Java Backend Developer specializing in scalable systems, Spring Boot, hexagonal architecture, and cloud solutions.",
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: false,
    follow: true,
  },
};

import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  return (
    <html
      lang={lang}
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // 1. Theme detection
                  var storedTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }

                  // 2. Language detection
                  var storedLang = localStorage.getItem('lang');
                  var systemLang = navigator.language.startsWith('es') ? 'es' : 'en';
                  var activeLang = storedLang || systemLang;
                  document.documentElement.setAttribute('lang', activeLang);

                  // Sync to cookie for server-side rendering
                  var match = document.cookie.match(new RegExp('(^| )lang=([^;]+)'));
                  var cookieLang = match ? match[2] : null;

                  if (cookieLang !== activeLang) {
                    document.cookie = 'lang=' + activeLang + '; path=/; max-age=31536000; SameSite=Lax';
                    window.location.reload();
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-[#090a0f] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
