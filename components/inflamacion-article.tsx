"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Flame, Shield, Heart, Brain, Utensils, AlertTriangle, MessageCircle, Calendar } from "lucide-react"

interface InflamacionArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function InflamacionArticle({ onBack, onNavigateToSection }: InflamacionArticleProps) {
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
              Inmunología
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Inflamación Crónica: El Fuego Silencioso que Debes Apagar
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>28 Nov 2024</span>
              <span className="mx-2">•</span>
              <span>9 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                La inflamación crónica es como tener un "incendio pequeño" que nunca se apaga dentro de tu cuerpo. No lo
                sientes directamente, pero con el tiempo puede causar problemas serios. La buena noticia es que puedes
                "apagar ese fuego" con los cambios correctos en tu estilo de vida.
              </p>
            </div>

            {/* What is inflammation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué es la Inflamación? </h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <p className="text-slate-700 mb-4">
                  Imagina que tu cuerpo es como una casa con un sistema de seguridad. La inflamación es como los
                  "guardias de seguridad" que salen a defender cuando hay una amenaza (bacteria, virus, herida).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-green-500 mr-2" />
                      Inflamación Buena (Aguda)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">
                      Es como llamar a los bomberos cuando hay un incendio real.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Aparece rápido cuando te lastimas</li>
                      <li>• Te ayuda a sanar</li>
                      <li>• Desaparece cuando ya no la necesitas</li>
                      <li>• Es normal y saludable</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Flame className="h-6 w-6 text-red-500 mr-2" />
                      Inflamación Mala (Crónica)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">
                      Es como tener la alarma de incendios sonando todo el tiempo sin razón.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Dura meses o años</li>
                      <li>• Daña tejidos sanos</li>
                      <li>• No la sientes directamente</li>
                      <li>• Causa enfermedades a largo plazo</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Signs of chronic inflammation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Señales de que Tienes Inflamación Crónica</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Síntomas Físicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Cansancio que no se quita con descanso</li>
                      <li>• Dolores musculares o articulares frecuentes</li>
                      <li>• Resfriados o infecciones constantes</li>
                      <li>• Problemas digestivos (gases, hinchazón)</li>
                      <li>• Piel con problemas (acné, eczema, psoriasis)</li>
                      <li>• Alergias que empeoran</li>
                      <li>• Heridas que tardan en sanar</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">🧠 Síntomas Mentales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• "Niebla mental" o dificultad para concentrarse</li>
                      <li>• Cambios de humor frecuentes</li>
                      <li>• Ansiedad o depresión sin causa clara</li>
                      <li>• Problemas de memoria</li>
                      <li>• Irritabilidad constante</li>
                      <li>• Falta de motivación</li>
                      <li>• Sensación de estar "desconectado"</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Causes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué Causa la Inflamación Crónica?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 text-orange-500 mr-2" />
                      Causas Alimentarias
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">❌ Alimentos Pro-inflamatorios:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Azúcar refinada y dulces</li>
                          <li>• Comida procesada y chatarra</li>
                          <li>• Grasas trans (frituras, margarina)</li>
                          <li>• Exceso de omega-6 (aceites vegetales)</li>
                          <li>• Carnes procesadas (embutidos)</li>
                          <li>• Alcohol en exceso</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                      Causas del Estilo de Vida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">⚠️ Factores de Riesgo:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Estrés crónico (el más importante)</li>
                          <li>• Falta de sueño o sueño de mala calidad</li>
                          <li>• Sedentarismo (no hacer ejercicio)</li>
                          <li>• Obesidad, especialmente abdominal</li>
                          <li>• Tabaquismo</li>
                          <li>• Exposición a toxinas ambientales</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Health consequences */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Enfermedades Relacionadas con Inflamación Crónica
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-red-800 text-sm mb-4">
                  <strong>Importante:</strong> La inflamación crónica está detrás de la mayoría de enfermedades
                  modernas. No es solo una molestia, es un factor de riesgo serio.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Heart className="h-6 w-6 text-red-500 mr-2" />
                      Cardiovasculares
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Enfermedades del corazón</li>
                      <li>• Presión arterial alta</li>
                      <li>• Ataques cardíacos</li>
                      <li>• Derrames cerebrales</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-6 w-6 text-blue-500 mr-2" />
                      Neurológicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Alzheimer</li>
                      <li>• Parkinson</li>
                      <li>• Depresión</li>
                      <li>• Ansiedad</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-purple-500 mr-2" />
                      Otras Condiciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Diabetes tipo 2</li>
                      <li>• Artritis</li>
                      <li>• Cáncer</li>
                      <li>• Enfermedades autoinmunes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Anti-inflammatory solutions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cómo "Apagar el Fuego" de la Inflamación</h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 text-green-500 mr-2" />
                      1. Dieta Antiinflamatoria (Lo Más Importante)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">✅ Alimentos que "Apagan el Fuego":</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Pescados grasos:</strong> Salmón, sardinas, caballa
                          </li>
                          <li>
                            • <strong>Verduras de colores:</strong> Brócoli, espinacas, zanahorias
                          </li>
                          <li>
                            • <strong>Frutas antioxidantes:</strong> Berries, cerezas, granadas
                          </li>
                          <li>
                            • <strong>Especias:</strong> Cúrcuma, jengibre, ajo
                          </li>
                          <li>
                            • <strong>Grasas buenas:</strong> Aceite de oliva, aguacate, nueces
                          </li>
                          <li>
                            • <strong>Té verde</strong> y hierbas antiinflamatorias
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">❌ Alimentos que "Avivan el Fuego":</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Azúcar y dulces procesados</li>
                          <li>• Comida rápida y procesada</li>
                          <li>• Frituras y grasas trans</li>
                          <li>• Refrescos y bebidas azucaradas</li>
                          <li>• Carnes procesadas</li>
                          <li>• Exceso de alcohol</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-6 w-6 text-red-500 mr-2" />
                      2. Manejo del Estrés (Súper Importante)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>¡Clave!</strong> El estrés crónico es como echar gasolina al fuego de la inflamación.
                        Sin manejarlo, es muy difícil mejorar.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Técnicas Diarias:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Puedes empezar con 5 minutos de meditación </li>
                          <li>• Respiración profunda</li>
                          <li>• Yoga o tai chi</li>
                          <li>• Tiempo en la naturaleza</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Cambios de Vida:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Establecer límites saludables</li>
                          <li>• Priorizar lo realmente importante</li>
                          <li>• Buscar apoyo social</li>
                          <li>• Practicar hobbies relajantes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-blue-500 mr-2" />
                      3. Ejercicio Inteligente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">✅ Ejercicio Antiinflamatorio:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Caminata diaria (30-45 minutos)</li>
                          <li>• Natación</li>
                          <li>• Yoga</li>
                          <li>• Ejercicios de fuerza moderados</li>
                          <li>• Estiramientos regulares</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">❌ Ejercicio Pro-inflamatorio:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Ejercicio excesivo o muy intenso</li>
                          <li>• Entrenamientos sin descanso</li>
                          <li>• Deportes con mucho impacto</li>
                          <li>• Ejercicio cuando estás enfermo</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Natural supplements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Suplementos Naturales Antiinflamatorios</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 text-sm">
                  <strong>Nota:</strong> Los suplementos son un apoyo, no un reemplazo de una buena alimentación y
                  estilo de vida. Consulta con un profesional antes de tomarlos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Suplementos Básicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Omega-3 (EPA/DHA)</h5>
                        <p className="text-xs text-slate-600">El antiinflamatorio natural más estudiado</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Cúrcuma con Pimienta Negra</h5>
                        <p className="text-xs text-slate-600">Potente antiinflamatorio natural</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Vitamina D</h5>
                        <p className="text-xs text-slate-600">Regula el sistema inmune</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Suplementos Avanzados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Quercetina</h5>
                        <p className="text-xs text-slate-600">Antioxidante y antiinflamatorio potente</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Resveratrol</h5>
                        <p className="text-xs text-slate-600">Protege contra el envejecimiento</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Probióticos</h5>
                        <p className="text-xs text-slate-600">Reducen la inflamación intestinal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                La inflamación crónica es un problema serio, pero también es algo que puedes controlar con los cambios
                correctos. No necesitas medicamentos caros o tratamientos complicados - tu estilo de vida es tu mejor
                medicina.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Recuerda: pequeños cambios consistentes son más poderosos que cambios drásticos que no puedes mantener.
                ¡Empieza hoy mismo a "apagar ese fuego"!
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                ¿Tienes Preguntas sobre Inflamación Crónica?
              </h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                inflamación, dieta antiinflamatoria y protocolos naturales específicos para tu caso.
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
