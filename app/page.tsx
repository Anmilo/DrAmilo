"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import KnowledgeLibrary from "@/components/knowledge-library"
import ChatSection from "@/components/chat-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)

  const handleNavigateToSection = (sectionId: string) => {
    // Always reset selected article when navigating to any section
    setSelectedArticle(null)

    // Small delay to ensure state is updated before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  // Add a new function specifically for returning to library
  const handleBackToLibrary = () => {
    setSelectedArticle(null)

    // Small delay to ensure state is updated before scrolling
    setTimeout(() => {
      const element = document.getElementById("biblioteca")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigateToSection={handleNavigateToSection} />
      <main>
        {selectedArticle ? (
          // Show article view
          <div className="pt-16">
            <KnowledgeLibrary
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
              onNavigateToSection={handleNavigateToSection}
              onBackToLibrary={handleBackToLibrary}
            />
          </div>
        ) : (
          // Show normal page sections
          <>
            <HeroSection onNavigateToSection={handleNavigateToSection} />
            <AboutSection />
            <KnowledgeLibrary
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
              onNavigateToSection={handleNavigateToSection}
            />
            <ChatSection />
            <ContactSection />
          </>
        )}
      </main>
      {!selectedArticle && (
        <footer className="bg-slate-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Dr. Angel. Todos los derechos reservados.</p>
            <p className="text-sm text-slate-400 mt-2">
              La información proporcionada no sustituye el consejo médico profesional.
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
