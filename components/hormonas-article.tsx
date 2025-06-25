"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, Moon, Sun, Heart, AlertTriangle, MessageCircle, Calendar } from "lucide-react"

interface HormonasArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function HormonasArticle({ onBack, onNavigateToSection }: HormonasArticleProps) {
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
              Endocrinología
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Hormonas en Equilibrio: Tu Guía Práctica
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>1 Dic 2024</span>
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
                Las hormonas son como los "mensajeros" de tu cuerpo, enviando instrucciones importantes a todos tus
                órganos. Cuando están en equilibrio, te sientes con energía, duermes bien y tienes buen humor. Cuando
                no, todo se siente cuesta arriba. Te explico cómo recuperar ese equilibrio de forma natural.
              </p>
            </div>

            {/* What are hormones */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué Son las Hormonas? </h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <p className="text-slate-700 mb-4">
                  Imagina que tu cuerpo es como una gran empresa y las hormonas son los "emails internos" que envían
                  mensajes entre diferentes departamentos (órganos) para que todo funcione en armonía.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-6 w-6 text-blue-500 mr-2" />
                      Hormonas de Energía
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>
                        • <strong>Insulina:</strong> Controla el azúcar
                      </li>
                      <li>
                        • <strong>Tiroides:</strong> Tu "acelerador" metabólico
                      </li>
                      <li>
                        • <strong>Cortisol:</strong> Hormona del estrés
                      </li>
                      <li>
                        • <strong>Adrenalina:</strong> Tu "turbo" de emergencia
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Heart className="h-6 w-6 text-pink-500 mr-2" />
                      Hormonas Sexuales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>
                        • <strong>Estrógenos:</strong> La "feminidad"
                      </li>
                      <li>
                        • <strong>Progesterona:</strong> La "calmante"
                      </li>
                      <li>
                        • <strong>Testosterona:</strong> Fuerza y vitalidad
                      </li>
                      <li>
                        • <strong>DHEA:</strong> La "hormona de la juventud"
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Moon className="h-6 w-6 text-purple-500 mr-2" />
                      Hormonas del Bienestar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>
                        • <strong>Melatonina:</strong> Tu "pastilla natural para dormir"
                      </li>
                      <li>
                        • <strong>Serotonina:</strong> La "hormona de la felicidad"
                      </li>
                      <li>
                        • <strong>Hormona del crecimiento:</strong> Reparación nocturna
                      </li>
                      <li>
                        • <strong>Oxitocina:</strong> La hormona del "amor"
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Signs of imbalance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Señales de que tus Hormonas Están Desbalanceadas
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Síntomas Físicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Cansancio constante (incluso después de dormir)</li>
                      <li>• Subir de peso sin razón aparente</li>
                      <li>• Problemas para dormir o despertar cansado</li>
                      <li>• Antojos intensos de azúcar o carbohidratos</li>
                      <li>• Períodos irregulares o muy dolorosos</li>
                      <li>• Piel seca, cabello quebradizo o acné</li>
                      <li>• Sensación de frío o calor extremos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">🧠 Síntomas Emocionales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• Cambios de humor frecuentes</li>
                      <li>• Irritabilidad o ansiedad sin motivo</li>
                      <li>• Depresión o tristeza constante</li>
                      <li>• Falta de motivación o interés</li>
                      <li>• Problemas de concentración</li>
                      <li>• Sensación de estar "desconectado"</li>
                      <li>• Pérdida de libido o deseo sexual</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Natural solutions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cómo Equilibrar tus Hormonas Naturalmente</h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="h-6 w-6 text-yellow-500 mr-2" />
                      1. Arregla tu Sueño (¡Es Súper Importante!)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">¿Por qué es tan importante?</h5>
                        <p className="text-sm text-slate-600 mb-3">
                          Durante la noche tu cuerpo "resetea" las hormonas. Sin buen sueño, es como tratar de arreglar
                          un carro con el motor encendido.
                        </p>
                        <h5 className="font-medium text-slate-900 mb-2">Reglas de Oro:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Dormir 7-9 horas cada noche</li>
                          <li>• Acostarse y levantarse a la misma hora</li>
                          <li>• Cuarto oscuro y fresco</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Rutina Nocturna:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• 2 horas antes: No más pantallas</li>
                          <li>• 1 hora antes: Té de manzanilla</li>
                          <li>• 30 min antes: Lectura o meditación</li>
                          <li>• Al acostarse: Respiración profunda</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-6 w-6 text-red-500 mr-2" />
                      2. Maneja el Estrés (Tu Enemigo #1)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>¡Importante!</strong> El estrés crónico es como tener el "botón de pánico" presionado
                        todo el tiempo. Desbalancea TODAS las hormonas.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Técnicas Diarias:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• 10 minutos de respiración profunda</li>
                          <li>• Caminata en la naturaleza</li>
                          <li>• Yoga o estiramientos</li>
                          <li>• Música relajante</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Cambios de Mentalidad:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Aprende a decir "no"</li>
                          <li>• Prioriza lo realmente importante</li>
                          <li>• Busca apoyo cuando lo necesites</li>
                          <li>• Practica la gratitud diaria</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-6 w-6 text-green-500 mr-2" />
                      3. Alimentación que Equilibra Hormonas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">✅ Alimentos que SÍ Ayudan:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Proteínas:</strong> Huevos, pescado, pollo
                          </li>
                          <li>
                            • <strong>Grasas buenas:</strong> Aguacate, nueces, aceite de oliva
                          </li>
                          <li>
                            • <strong>Verduras:</strong> Brócoli, espinacas, zanahorias
                          </li>
                          <li>
                            • <strong>Frutas:</strong> Berries, manzanas, peras
                          </li>
                          <li>
                            • <strong>Semillas:</strong> Chía, linaza, calabaza
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">❌ Alimentos que NO Ayudan:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Azúcar refinada y dulces</li>
                          <li>• Comida procesada y chatarra</li>
                          <li>• Exceso de cafeína</li>
                          <li>• Alcohol en exceso</li>
                          <li>• Grasas trans (frituras)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Supplements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Suplementos Naturales que Pueden Ayudar</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 text-sm">
                  <strong>Nota:</strong> Siempre consulta con un profesional antes de tomar suplementos, especialmente
                  si tomas medicamentos o tienes condiciones médicas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para Mujeres</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Vitex (Sauzgatillo)</h5>
                        <p className="text-xs text-slate-600">Ayuda con ciclos irregulares y síndrome premenstrual</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Maca</h5>
                        <p className="text-xs text-slate-600">Equilibra hormonas y mejora la energía</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Omega-3</h5>
                        <p className="text-xs text-slate-600">Reduce inflamación y apoya la producción hormonal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para Todos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Ashwagandha</h5>
                        <p className="text-xs text-slate-600">Reduce el cortisol (hormona del estrés)</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Magnesio</h5>
                        <p className="text-xs text-slate-600">Mejora el sueño y reduce la ansiedad</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Vitamina D</h5>
                        <p className="text-xs text-slate-600">Esencial para la producción hormonal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Lifestyle tips */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Cambios de Estilo de Vida que Marcan la Diferencia
              </h2>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-emerald-800 mb-3">🏃‍♀️ Ejercicio Inteligente:</h5>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>• 30 minutos de caminata diaria</li>
                      <li>• Ejercicios de fuerza 2-3 veces/semana</li>
                      <li>• Yoga o pilates para flexibilidad</li>
                      <li>• ¡Evita el ejercicio excesivo! (genera estrés)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-800 mb-3">🌞 Ritmos Naturales:</h5>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>• Exponerte al sol en la mañana</li>
                      <li>• Comer a horarios regulares</li>
                      <li>• Evitar luces brillantes en la noche</li>
                      <li>• Respetar los ciclos de tu cuerpo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* When to seek help */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Cuándo Buscar Ayuda Profesional?</h2>

              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <AlertTriangle className="h-6 w-6 mr-2" />
                    Busca Ayuda Si Tienes:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Síntomas que no mejoran después de 2-3 meses</li>
                      <li>• Períodos muy irregulares o ausentes</li>
                      <li>• Cambios drásticos de peso</li>
                      <li>• Depresión severa o ansiedad</li>
                    </ul>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Problemas de fertilidad</li>
                      <li>• Fatiga extrema que no mejora</li>
                      <li>• Síntomas de tiroides</li>
                      <li>• Sofocos severos en la menopausia</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                Equilibrar tus hormonas no es algo que sucede de la noche a la mañana, pero con paciencia y los cambios
                correctos, puedes recuperar tu energía, mejorar tu estado de ánimo y sentirte como la mejor versión de
                ti mismo.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Recuerda: pequeños cambios consistentes son más poderosos que cambios drásticos que no puedes mantener.
                ¡Tu cuerpo te lo agradecerá!
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                ¿Tienes Preguntas sobre Equilibrio Hormonal?
              </h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                hormonas, síntomas de desbalance y estrategias naturales para tu situación específica.
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
