"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Brain } from "lucide-react"

interface HeroSectionProps {
  onNavigateToSection: (sectionId: string) => void
}

export default function HeroSection({ onNavigateToSection }: HeroSectionProps) {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-1 gap-12 items-center text-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 text-center">
              Recupera el control de
              <span className="text-emerald-600 block">tu salud personal</span>
              <span className="block text-2xl lg:text-3xl mt-4 text-emerald-700 font-semibold">
                ¡PUEDES ESTAR MEJOR, PUEDES SENTIRTE MEJOR!
              </span>
            </h1>
            <div className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto space-y-4">
              <p>Aprende, conoce y gestiona tu propia salud.</p>
              <p>El saber es poder, y el poder de tu salud lo debes tener tú, siempre.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => onNavigateToSection("contacto")}
              >
                Agenda tu Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                onClick={() => onNavigateToSection("biblioteca")}
              >
                Explora Recursos
              </Button>
            </div>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-3">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Causa Raíz</h3>
                <p className="text-sm text-slate-600">
                  No buscamos "aliviar síntomas" sino investigar y tratar el origen de tus desequilibrios.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-teal-100 p-4 rounded-full mb-3">
                  <Leaf className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Planes Personalizados</h3>
                <p className="text-sm text-slate-600">
                  Tu plan de salud es único, basado en tu historia, genética y estilo de vida.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-3">
                  <Brain className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Bienestar Integral</h3>
                <p className="text-sm text-slate-600">
                  Integramos nutrición, mente y cuerpo para una salud completa y duradera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
