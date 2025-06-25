"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Stethoscope } from "lucide-react"

interface NavigationProps {
  onNavigateToSection: (sectionId: string) => void
}

export default function Navigation({ onNavigateToSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (sectionId: string) => {
    onNavigateToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-slate-900">Dr. Angel</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("inicio")}
              className="text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavigation("sobre-mi")}
              className="text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => handleNavigation("biblioteca")}
              className="text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Biblioteca
            </button>
            <button
              onClick={() => handleNavigation("chat")}
              className="text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Chatbox
            </button>
            <button
              onClick={() => handleNavigation("contacto")}
              className="text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("inicio")}
                className="text-left text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavigation("sobre-mi")}
                className="text-left text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => handleNavigation("biblioteca")}
                className="text-left text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Biblioteca
              </button>
              <button
                onClick={() => handleNavigation("chat")}
                className="text-left text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Consulta
              </button>
              <button
                onClick={() => handleNavigation("contacto")}
                className="text-left text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
