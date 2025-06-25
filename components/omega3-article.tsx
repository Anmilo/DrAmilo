"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Brain, Shield, Fish, Leaf, Pill, MessageCircle, Calendar } from "lucide-react"

interface Omega3ArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function Omega3Article({ onBack, onNavigateToSection }: Omega3ArticleProps) {
  const handleChatWithAssistant = () => {
    if (onNavigateToSection) {
      onNavigateToSection("chat")
    }
  }

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
              Suplementación
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Omega-3: Grasas Esenciales para tu Salud
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>20 Jun 2025</span>
              <span className="mx-2">•</span>
              <span>8 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Los ácidos grasos omega-3 son nutrientes esenciales que nuestro cuerpo no puede producir por sí mismo,
                por lo que debemos obtenerlos a través de la alimentación o suplementación. Estas grasas "buenas" son
                fundamentales para múltiples funciones corporales y su deficiencia está relacionada con numerosos
                problemas de salud.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Beneficios Principales de los Omega-3</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Heart className="h-6 w-6 text-red-500 mr-2" />
                      Salud Cardiovascular
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Reducen triglicéridos</li>
                      <li>• Disminuyen la presión arterial</li>
                      <li>• Mejoran la función endotelial</li>
                      <li>• Reducen el riesgo de arritmias</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-6 w-6 text-blue-500 mr-2" />
                      Función Cerebral
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Mejoran la memoria</li>
                      <li>• Protegen contra el deterioro cognitivo</li>
                      <li>• Reducen la inflamación cerebral</li>
                      <li>• Apoyan el estado de ánimo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-emerald-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-emerald-500 mr-2" />
                      Antiinflamatorio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Reducen marcadores inflamatorios</li>
                      <li>• Alivian dolor articular</li>
                      <li>• Mejoran condiciones autoinmunes</li>
                      <li>• Protegen contra enfermedades crónicas</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Types of Omega-3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tipos de Omega-3</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">EPA (Ácido Eicosapentaenoico)</h3>
                    <p className="text-sm text-slate-600">
                      Principalmente antiinflamatorio. Excelente para la salud cardiovascular y el estado de ánimo.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">DHA (Ácido Docosahexaenoico)</h3>
                    <p className="text-sm text-slate-600">
                      Esencial para el cerebro y la retina. Crucial durante el embarazo y desarrollo infantil.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">ALA (Ácido Alfa-linolénico)</h3>
                    <p className="text-sm text-slate-600">
                      De origen vegetal. Se convierte parcialmente en EPA y DHA, pero con baja eficiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Sources */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fuentes Alimentarias</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Fish className="h-6 w-6 text-blue-500 mr-2" />
                      Fuentes Marinas (EPA + DHA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-700">Salmón salvaje</span>
                        <span className="text-emerald-600 font-medium">1,500-2,000mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Sardinas</span>
                        <span className="text-emerald-600 font-medium">1,200-1,800mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Caballa</span>
                        <span className="text-emerald-600 font-medium">1,000-1,500mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Anchoas</span>
                        <span className="text-emerald-600 font-medium">800-1,200mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Atún</span>
                        <span className="text-emerald-600 font-medium">300-800mg/100g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-6 w-6 text-green-500 mr-2" />
                      Fuentes Vegetales (ALA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-700">Semillas de chía</span>
                        <span className="text-green-600 font-medium">17,000mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Semillas de lino</span>
                        <span className="text-green-600 font-medium">22,000mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Nueces</span>
                        <span className="text-green-600 font-medium">9,000mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Aceite de linaza</span>
                        <span className="text-green-600 font-medium">53,000mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Semillas de cáñamo</span>
                        <span className="text-green-600 font-medium">8,000mg/100g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Supplementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Suplementación: Guía Práctica</h2>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Pill className="h-6 w-6 text-emerald-600 mr-2" />
                    Dosificación Recomendada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Para Mantenimiento General:</h4>
                      <ul className="text-slate-600 space-y-2">
                        <li>• EPA + DHA: 1,000-2,000mg/día</li>
                        <li>• Ratio EPA:DHA = 2:1 o 3:1</li>
                        <li>• Tomar con comidas grasas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Para Condiciones Específicas:</h4>
                      <ul className="text-slate-600 space-y-2">
                        <li>• Inflamación: 2,000-4,000mg/día</li>
                        <li>• Depresión: 1,000-2,000mg EPA</li>
                        <li>• Triglicéridos altos: 2,000-4,000mg/día</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-2">Criterios de Calidad para Suplementos:</h4>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>✓ Certificación de pureza (libre de metales pesados)</li>
                  <li>✓ Forma triglicérido (mejor absorción que ésteres etílicos)</li>
                  <li>✓ Procesamiento en frío</li>
                  <li>✓ Envase opaco para proteger de la luz</li>
                  <li>✓ Fecha de caducidad y almacenamiento adecuado</li>
                </ul>
              </div>
            </div>

            {/* Testing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Cómo Saber si Necesitas Omega-3?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Síntomas de Deficiencia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Piel seca y escamosa</li>
                      <li>• Cabello quebradizo</li>
                      <li>• Fatiga y falta de concentración</li>
                      <li>• Dolor articular</li>
                      <li>• Cambios de humor</li>
                      <li>• Problemas de sueño</li>
                      <li>• Cicatrización lenta</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pruebas de Laboratorio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900">Índice Omega-3</h5>
                        <p className="text-sm text-slate-600">Mide EPA + DHA en glóbulos rojos</p>
                        <p className="text-xs text-emerald-600">Óptimo: {">"} 8%</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Ratio AA/EPA</h5>
                        <p className="text-sm text-slate-600">Balance inflamatorio</p>
                        <p className="text-xs text-emerald-600">Óptimo: {"<"} 3:1</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Conclusión</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                Los omega-3 son fundamentales para una salud óptima. La mayoría de las personas no consumen suficientes
                a través de la dieta, especialmente EPA y DHA de fuentes marinas. Una suplementación de calidad puede
                ser una inversión valiosa en tu salud a largo plazo.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Recuerda que la medicina funcional busca personalizar el tratamiento. Si tienes condiciones específicas
                o tomas medicamentos, consulta con un profesional antes de iniciar suplementación.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">¿Tienes Preguntas sobre Omega-3?</h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                omega-3, dosificación y suplementación personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={handleChatWithAssistant}>
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
