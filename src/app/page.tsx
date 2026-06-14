"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const systemLang = navigator.language.startsWith("es") ? "es" : "en";
    const activeLang = storedLang || systemLang;
    
    // Use window.location.replace to prevent back-button loops
    window.location.replace(`/${activeLang}`);
  }, []);

  return null;
}
