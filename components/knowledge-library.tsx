"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Calendar, User } from "lucide-react"
import Omega3Article from "./omega3-article"
import MicrobiomaArticle from "./microbioma-article"
import DetoxificacionArticle from "./detoxificacion-article"
import HormonasArticle from "./hormonas-article"
import InflamacionArticle from "./inflamacion-article"
import VitaminaDArticle from "./vitamina-d-article"
import EnvejecimientoArticle from "./envejecimiento-article"
import VitaminaCArticle from "./vitamina-c-article"
import SiboArticle from "./sibo-article"
import MagnesioArticle from "./magnesio-article"

interface KnowledgeLibraryProps {
  selectedArticle: string | null
  setSelectedArticle: (article: string | null) => void
  onNavigateToSection?: (sectionId: string) => void
  onBackToLibrary?: () => void
}

export default function KnowledgeLibrary({
  selectedArticle,
  setSelectedArticle,
  onNavigateToSection,
  onBackToLibrary,
}: KnowledgeLibraryProps) {
  const articles = [
    {
      id: "omega-3",
      title: "Omega-3: Grasas Esenciales para tu Salud",
      description:
        "Descubre los beneficios de los ácidos grasos omega-3 para la salud cardiovascular, cerebral y antiinflamatoria. Guía completa de fuentes y dosificación.",
      date: "20 Dic 2024",
      author: "Dr. Angel",
      category: "Suplementación",
    },
    {
      id: "microbioma",
      title: "Microbioma Intestinal y Salud Mental",
      description:
        "Descubre la conexión entre tu intestino y tu cerebro, y cómo optimizar tu microbioma para mejorar tu bienestar mental.",
      date: "15 Dic 2024",
      author: "Dr. Angel",
      category: "Neurología Funcional",
    },
    {
      id: "detoxificacion",
      title: "Cómo Limpiar tu Hígado de Forma Natural",
      description:
        "Protocolos naturales para optimizar la función hepática y mejorar los procesos de detoxificación del organismo.",
      date: "5 Dic 2024",
      author: "Dr. Angel",
      category: "Detoxificación",
    },
    {
      id: "hormonas",
      title: "Hormonas en Equilibrio: Tu Guía Práctica",
      description: "Estrategias integrales para balancear naturalmente las hormonas y restaurar la vitalidad.",
      date: "1 Dic 2024",
      author: "Dr. Angel",
      category: "Endocrinología",
    },
    {
      id: "inflamacion",
      title: "Inflamación Crónica: El Fuego Silencioso que Debes Apagar",
      description:
        "Identifica las causas raíz de la inflamación crónica y aprende protocolos naturales para reducirla.",
      date: "28 Nov 2024",
      author: "Dr. Angel",
      category: "Inmunología",
    },
    {
      id: "envejecimiento",
      title: "Envejecer Bien: Tu Guía para Mantenerte Joven y Vital",
      description:
        "Estrategias basadas en evidencia para optimizar la longevidad y mantener la vitalidad con los años.",
      date: "25 Nov 2024",
      author: "Dr. Angel",
      category: "Anti-aging",
    },
    {
      id: "vitamina-c",
      title: "Vitamina C: Mucho Más que un Simple Antioxidante",
      description:
        "Explora las múltiples funciones de la vitamina C en el sistema inmune, síntesis de colágeno y su papel en la medicina funcional.",
      date: "18 Dic 2024",
      author: "Dr. Angel",
      category: "Vitaminas",
    },
    {
      id: "vitamina-d",
      title: "Vitamina D: La 'Hormona del Sol' que Necesitas",
      description:
        "Comprende la importancia de la vitamina D como hormona, su impacto en la inmunidad, huesos y estado de ánimo. Protocolos de optimización.",
      date: "16 Dic 2024",
      author: "Dr. Angel",
      category: "Vitaminas",
    },
    {
      id: "sibo",
      title: "SIBO: Cuando las Bacterias Están en el Lugar Equivocado",
      description:
        "Guía completa sobre SIBO, sus síntomas, diagnóstico y tratamiento natural. Protocolos dietéticos y suplementos específicos.",
      date: "14 Dic 2024",
      author: "Dr. Angel",
      category: "Gastroenterología",
    },
    {
      id: "magnesio",
      title: "Magnesio: El 'Mineral Maestro' que Tu Cuerpo Necesita",
      description:
        "Descubre por qué el magnesio es esencial para más de 300 reacciones enzimáticas. Tipos de magnesio, deficiencia y suplementación óptima.",
      date: "12 Dic 2024",
      author: "Dr. Angel",
      category: "Minerales",
    },
  ]

  // Show specific articles
  if (selectedArticle === "omega-3") {
    return (
      <Omega3Article
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "microbioma") {
    return (
      <MicrobiomaArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "detoxificacion") {
    return (
      <DetoxificacionArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "hormonas") {
    return (
      <HormonasArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "inflamacion") {
    return (
      <InflamacionArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "vitamina-d") {
    return (
      <VitaminaDArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "envejecimiento") {
    return (
      <EnvejecimientoArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "vitamina-c") {
    return (
      <VitaminaCArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "sibo") {
    return (
      <SiboArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }
  if (selectedArticle === "magnesio") {
    return (
      <MagnesioArticle
        onBack={onBackToLibrary || (() => setSelectedArticle(null))}
        onNavigateToSection={onNavigateToSection}
      />
    )
  }

  return (
    <section id="biblioteca" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Biblioteca de Conocimiento</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recursos educativos sobre medicina funcional, nutrición y bienestar para empoderarte en tu camino hacia la
            salud óptima. Textos cortos sobre suplementos, información que te puede servir en tu día a día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <BookOpen className="h-5 w-5 text-slate-400" />
                </div>
                <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{article.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {article.author}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Leer Artículo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Ver Todos los Artículos
          </Button>
        </div>
      </div>
    </section>
  )
}
