"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, Shield, Droplets, Leaf, Clock, AlertTriangle, MessageCircle, Calendar } from "lucide-react"

interface DetoxificacionArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function DetoxificacionArticle({ onBack, onNavigateToSection }: DetoxificacionArticleProps) {
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
              Detoxificación
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cómo Limpiar tu Hígado de Forma Natural
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>5 Dic 2024</span>
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
                Tu hígado es como el "filtro de agua" de tu cuerpo, trabajando 24/7 para limpiar todo lo que comes,
                bebes y respiras. En nuestro mundo moderno, lleno de químicos y alimentos procesados, tu hígado necesita
                ayuda extra para mantenerse saludable y funcionando al 100%.
              </p>
            </div>

            {/* Liver Functions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué Hace tu Hígado por Ti?</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-6 w-6 text-green-500 mr-2" />
                      Procesa tu Comida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Convierte las grasas en energía</li>
                      <li>• Almacena vitaminas y minerales</li>
                      <li>• Controla el azúcar en tu sangre</li>
                      <li>• Produce bilis para digerir grasas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-blue-500 mr-2" />
                      Limpia las Toxinas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Filtra químicos dañinos</li>
                      <li>• Neutraliza sustancias tóxicas</li>
                      <li>• Elimina desechos del cuerpo</li>
                      <li>• Protege otros órganos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Droplets className="h-6 w-6 text-purple-500 mr-2" />
                      Produce lo que Necesitas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Proteínas para tu sangre</li>
                      <li>• Sustancias para coagular heridas</li>
                      <li>• Colesterol bueno</li>
                      <li>• Hormonas importantes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Detox Process Simplified */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cómo Limpia tu Hígado (Explicado Fácil)</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <p className="text-slate-700 mb-4">
                  Imagina que tu hígado es como una lavandería súper avanzada que limpia la "ropa sucia" (toxinas) de tu
                  cuerpo en 3 pasos:
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Paso 1: Preparar para Limpiar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">¿Qué pasa?</h5>
                        <p className="text-sm text-slate-600 mb-3">
                          Tu hígado toma las toxinas "pegajosas" (como grasa) y las convierte en algo más fácil de
                          eliminar (como agua).
                        </p>
                        <h5 className="font-medium text-slate-900 mb-2">Necesita:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Vitaminas del grupo B</li>
                          <li>• Magnesio</li>
                          <li>• Hierro</li>
                          <li>• Antioxidantes (como vitamina C)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Alimentos que Ayudan:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Brócoli y coliflor</li>
                          <li>• Naranjas y limones</li>
                          <li>• Ajo y cebolla</li>
                          <li>• Té verde</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Paso 2: Neutralizar y Empaquetar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">¿Qué pasa?</h5>
                        <p className="text-sm text-slate-600 mb-3">
                          Las toxinas del Paso 1 se "empaquetan" con sustancias especiales para que sean completamente
                          seguras y fáciles de eliminar.
                        </p>
                        <h5 className="font-medium text-slate-900 mb-2">Necesita:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Glutatión (antioxidante maestro)</li>
                          <li>• Azufre (de ciertos alimentos)</li>
                          <li>• Aminoácidos (proteínas)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Alimentos que Ayudan:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Huevos</li>
                          <li>• Carne de res y pollo</li>
                          <li>• Espárragos</li>
                          <li>• Aguacate</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Paso 3: Sacar la Basura</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">¿Qué pasa?</h5>
                        <p className="text-sm text-slate-600 mb-3">
                          Las toxinas ya "empaquetadas" se envían fuera del hígado hacia el intestino o los riñones para
                          ser eliminadas del cuerpo.
                        </p>
                        <h5 className="font-medium text-slate-900 mb-2">Necesita:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Mucha agua</li>
                          <li>• Fibra en la dieta</li>
                          <li>• Ejercicio regular</li>
                          <li>• Buen funcionamiento intestinal</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Cómo Ayudar:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Beber 2-3 litros de agua al día</li>
                          <li>• Comer frutas y verduras</li>
                          <li>• Caminar o hacer ejercicio</li>
                          <li>• Sudar (sauna, ejercicio)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Natural Support Protocol */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Remedios Naturales para tu Hígado</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-6 w-6 text-green-500 mr-2" />
                      Plantas Medicinales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Cardo Mariano</h5>
                        <p className="text-xs text-slate-600 mb-1">La "aspirina" del hígado</p>
                        <p className="text-sm text-slate-600">Protege y ayuda a regenerar las células del hígado</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Diente de León</h5>
                        <p className="text-xs text-slate-600 mb-1">El "destapacaños" natural</p>
                        <p className="text-sm text-slate-600">Ayuda a que la bilis fluya mejor y mejora la digestión</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Alcachofa</h5>
                        <p className="text-xs text-slate-600 mb-1">El "lubricante" del hígado</p>
                        <p className="text-sm text-slate-600">Facilita la digestión de grasas y limpia el hígado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-blue-500 mr-2" />
                      Suplementos Importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Glutatión</h5>
                        <p className="text-xs text-slate-600 mb-1">El "superhéroe" antioxidante</p>
                        <p className="text-sm text-slate-600">El antioxidante más poderoso que protege tu hígado</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">NAC (N-Acetil Cisteína)</h5>
                        <p className="text-xs text-slate-600 mb-1">El "constructor" de glutatión</p>
                        <p className="text-sm text-slate-600">Ayuda a tu cuerpo a producir más glutatión</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Complejo de Vitamina B</h5>
                        <p className="text-xs text-slate-600 mb-1">Las "herramientas" del hígado</p>
                        <p className="text-sm text-slate-600">Vitaminas esenciales para que el hígado funcione bien</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Lifestyle Protocol */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tu Rutina Diaria para un Hígado Sano</h2>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-emerald-800 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Plan Diario Fácil de Seguir
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-emerald-800 mb-2">🌅 Al Despertar:</h5>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>• Un vaso de agua tibia con limón</li>
                      <li>• 15-30 minutos de caminata</li>
                      <li>• Desayuno con proteína (huevos, yogur)</li>
                      <li>• Tus suplementos si los tomas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-800 mb-2">🌙 En la Noche:</h5>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>• Cena ligera antes de las 7 PM</li>
                      <li>• Té de manzanilla o diente de león</li>
                      <li>• Dormir 7-8 horas</li>
                      <li>• No comer por 12 horas (ayuno nocturno)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Cosas que Dañan tu Hígado (¡Evítalas!)
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">🍔 En la Comida:</h5>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Mucho alcohol</li>
                      <li>• Comida chatarra</li>
                      <li>• Frituras y grasas trans</li>
                      <li>• Demasiada azúcar</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">🏠 En Casa:</h5>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Productos de limpieza tóxicos</li>
                      <li>• Pesticidas en frutas/verduras</li>
                      <li>• Humo de cigarrillo</li>
                      <li>• Plásticos calentados</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">💊 Medicamentos:</h5>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Paracetamol en exceso</li>
                      <li>• Antibióticos sin necesidad</li>
                      <li>• Antiinflamatorios por mucho tiempo</li>
                      <li>• Automedicación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Signs your liver needs help */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Señales de que tu Hígado Necesita Ayuda</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-amber-800 mb-3">🚨 Síntomas Físicos:</h5>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• Te sientes cansado todo el tiempo</li>
                      <li>• Digestión pesada después de comer</li>
                      <li>• Dolor o molestia debajo de las costillas derechas</li>
                      <li>• Piel amarillenta o muy pálida</li>
                      <li>• Orina muy oscura</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-amber-800 mb-3">🧠 Síntomas Mentales:</h5>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• Dificultad para concentrarte</li>
                      <li>• Cambios de humor frecuentes</li>
                      <li>• Te despiertas cansado</li>
                      <li>• Antojos de azúcar constantes</li>
                      <li>• Sensación de "niebla mental"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                Tu hígado es uno de los órganos más importantes de tu cuerpo, pero también uno de los más maltratados en
                nuestro estilo de vida moderno. La buena noticia es que tiene una capacidad increíble de regenerarse
                cuando le das lo que necesita.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Con pequeños cambios en tu alimentación, algunos remedios naturales y evitando las cosas que lo dañan,
                puedes ayudar a tu hígado a funcionar mejor y sentirte con más energía y vitalidad.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                ¿Tienes Preguntas sobre Detoxificación Natural?
              </h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                detoxificación hepática, protocolos naturales y suplementos específicos para tu caso.
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
