"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Brain, Shield, Zap, Utensils, Pill, MessageCircle, Calendar } from "lucide-react"

interface MicrobiomaArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function MicrobiomaArticle({ onBack, onNavigateToSection }: MicrobiomaArticleProps) {
  const handleScheduleConsultation = () => {
    if (onNavigateToSection) {
      onNavigateToSection("contacto")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <Button variant="ghost" onClick={onBack} className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a la Biblioteca
            </Button>
          )}

          <div className="text-center">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Neurología Funcional
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Microbioma Intestinal y Salud Mental</h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>15 Dic 2024</span>
              <span className="mx-2">•</span>
              <span>10 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                El eje intestino-cerebro representa una de las conexiones más fascinantes de nuestro cuerpo. Tu
                microbioma intestinal, compuesto por trillones de microorganismos, no solo influye en tu digestión, sino
                que tiene un impacto directo en tu estado de ánimo, cognición y salud mental general.
              </p>
            </div>

            {/* Connection Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">La Conexión Intestino-Cerebro</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-6 w-6 text-purple-500 mr-2" />
                      Vía Neural
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Nervio vago</li>
                      <li>• Sistema nervioso entérico</li>
                      <li>• Comunicación bidireccional</li>
                      <li>• Señales eléctricas directas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-6 w-6 text-blue-500 mr-2" />
                      Vía Hormonal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Serotonina (90% intestinal)</li>
                      <li>• GABA</li>
                      <li>• Dopamina</li>
                      <li>• Cortisol</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-emerald-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-emerald-500 mr-2" />
                      Vía Inmune
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Citoquinas inflamatorias</li>
                      <li>• Permeabilidad intestinal</li>
                      <li>• Activación microglial</li>
                      <li>• Respuesta inmune sistémica</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mental Health Impact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Impacto en la Salud Mental</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Probables Condiciones Relacionadas con Disbiosis (desequilibrio flora intestinal):
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Trastornos del Estado de Ánimo:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Depresión</li>
                      <li>• Ansiedad</li>
                      <li>• Trastorno bipolar</li>
                      <li>• Irritabilidad</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Función Cognitiva:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Niebla mental</li>
                      <li>• Problemas de concentración</li>
                      <li>• Memoria deficiente</li>
                      <li>• Fatiga mental</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Strategies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Estrategias de Optimización</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 text-green-500 mr-2" />
                      Alimentación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Alimentos Prebióticos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Fibra soluble e insoluble</li>
                          <li>• Almidón resistente</li>
                          <li>• Inulina y FOS</li>
                          <li>• Pectina</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Alimentos Fermentados:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Kéfir</li>
                          <li>• Yogur natural</li>
                          <li>• Chucrut</li>
                          <li>• Kimchi</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Pill className="h-6 w-6 text-blue-500 mr-2" />
                      Suplementación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Probióticos Específicos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Lactobacillus helveticus</li>
                          <li>• Bifidobacterium longum</li>
                          <li>• Lactobacillus rhamnosus</li>
                          <li>• Saccharomyces boulardii</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Soporte Adicional:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• L-glutamina</li>
                          <li>• Zinc carnosina</li>
                          <li>• Omega-3</li>
                          <li>• Vitamina D</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Lifestyle Factors */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Factores de Estilo de Vida</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-amber-800 mb-4">Factores que Dañan el Microbioma:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-amber-700 space-y-2 text-sm">
                    <li>❌ Antibióticos innecesarios</li>
                    <li>❌ Estrés crónico</li>
                    <li>❌ Falta de sueño</li>
                    <li>❌ Sedentarismo</li>
                  </ul>
                  <ul className="text-amber-700 space-y-2 text-sm">
                    <li>❌ Dieta procesada</li>
                    <li>❌ Exceso de azúcar</li>
                    <li>❌ Alcohol excesivo</li>
                    <li>❌ Tabaquismo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-800 mb-4">Factores que Nutren el Microbioma:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-emerald-700 space-y-2 text-sm">
                    <li>✓ Ejercicio regular</li>
                    <li>✓ Manejo del estrés</li>
                    <li>✓ Sueño reparador</li>
                    <li>✓ Contacto con la naturaleza</li>
                  </ul>
                  <ul className="text-emerald-700 space-y-2 text-sm">
                    <li>✓ Dieta diversa</li>
                    <li>✓ Ayuno intermitente</li>
                    <li>✓ Hidratación adecuada</li>
                    <li>✓ Respiración consciente</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Evaluación del Microbioma</h2>

              <Card>
                <CardHeader>
                  <CardTitle>Pruebas Disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Análisis Básicos:</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Coprocultivo</li>
                        <li>• Parásitos y levaduras</li>
                        <li>• Calprotectina fecal</li>
                        <li>• Zonulina sérica</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Análisis Avanzados:</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Secuenciación 16S rRNA</li>
                        <li>• Análisis metabolómico</li>
                        <li>• Ácidos grasos de cadena corta</li>
                        <li>• Permeabilidad intestinal</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Conclusión</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                El microbioma intestinal es un órgano metabólico que influye profundamente en tu salud mental. Optimizar
                esta relación a través de la alimentación, suplementación y estilo de vida puede transformar no solo tu
                digestión, sino también tu bienestar emocional y cognitivo.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Un enfoque integral que considere tanto la salud intestinal como mental es fundamental para lograr un
                bienestar duradero.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                ¿Tienes Preguntas sobre el Eje Intestino-Cerebro?
              </h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                microbioma, salud mental, probióticos y protocolos específicos para tu bienestar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => {
                    if (onNavigateToSection) {
                      onNavigateToSection("chat")
                    }
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear con Asistente de Salud
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                  onClick={handleScheduleConsultation}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta Personalizada
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
