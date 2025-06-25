"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sun, Shield, Bone, Heart, Brain, AlertTriangle, MessageCircle, Calendar } from "lucide-react"

interface VitaminaDArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function VitaminaDArticle({ onBack, onNavigateToSection }: VitaminaDArticleProps) {
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
              Vitaminas
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Vitamina D: La "Hormona del Sol" que Necesitas
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>16 Dic 2024</span>
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
                La vitamina D no es realmente una vitamina - ¡es una hormona súper poderosa! Tu cuerpo la produce cuando
                tu piel recibe luz solar, y es esencial para muchísimas funciones. La mayoría de las personas tienen
                deficiencia sin saberlo, y esto puede afectar todo: desde tus huesos hasta tu estado de ánimo.
              </p>
            </div>

            {/* Why it's important */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Por Qué es Tan Importante la Vitamina D?</h2>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <p className="text-yellow-800 mb-4">
                  <strong>Dato Impactante:</strong> La vitamina D activa más de 1,000 genes en tu cuerpo. Es como un
                  "interruptor maestro" que enciende muchas funciones importantes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Bone className="h-6 w-6 text-orange-500 mr-2" />
                      Huesos y Músculos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Ayuda a absorber el calcio</li>
                      <li>• Fortalece los huesos</li>
                      <li>• Previene fracturas</li>
                      <li>• Mantiene músculos fuertes</li>
                      <li>• Mejora el equilibrio</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-blue-500 mr-2" />
                      Sistema Inmune
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Fortalece las defensas</li>
                      <li>• Reduce infecciones</li>
                      <li>• Previene enfermedades autoinmunes</li>
                      <li>• Combate la inflamación</li>
                      <li>• Protege contra alergias</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-6 w-6 text-green-500 mr-2" />
                      Mente y Corazón
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Mejora el estado de ánimo</li>
                      <li>• Reduce la depresión</li>
                      <li>• Protege el corazón</li>
                      <li>• Regula la presión arterial</li>
                      <li>• Apoya la función cerebral</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Signs of deficiency */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Señales de que te Falta Vitamina D</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm">
                  <strong>¡Importante!</strong> Hasta el 80% de las personas tienen deficiencia de vitamina D,
                  especialmente en países con poco sol o durante el invierno.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Síntomas Físicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Cansancio y fatiga constante</li>
                      <li>• Dolores de huesos y músculos</li>
                      <li>• Resfriados frecuentes</li>
                      <li>• Heridas que tardan en sanar</li>
                      <li>• Pérdida de cabello</li>
                      <li>• Dolor de espalda</li>
                      <li>• Debilidad muscular</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">🧠 Síntomas Mentales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Depresión o tristeza</li>
                      <li>• Ansiedad</li>
                      <li>• Cambios de humor</li>
                      <li>• Dificultad para concentrarse</li>
                      <li>• Irritabilidad</li>
                      <li>• Problemas de sueño</li>
                      <li>• Falta de motivación</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How to get vitamin D */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cómo Obtener Vitamina D de Forma Natural</h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="h-6 w-6 text-yellow-500 mr-2" />
                      1. Exposición al Sol (La Mejor Forma)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>¡Clave!</strong> Tu piel produce vitamina D cuando recibe rayos UVB del sol. Es gratis,
                        natural y la forma más efectiva.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Guía Práctica:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Tiempo:</strong> 10-30 minutos diarios
                          </li>
                          <li>
                            • <strong>Horario:</strong> 10 AM - 3 PM (cuando el sol está alto)
                          </li>
                          <li>
                            • <strong>Piel expuesta:</strong> Brazos, piernas, espalda
                          </li>
                          <li>
                            • <strong>Sin protector:</strong> Úsalo solo si es necesario
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Factores que Afectan:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Piel más oscura:</strong> Necesita más tiempo
                          </li>
                          <li>
                            • <strong>Edad:</strong> Personas mayores necesitan más
                          </li>
                          <li>
                            • <strong>Ubicación:</strong> Más cerca del ecuador = más vitamina D
                          </li>
                          <li>
                            • <strong>Estación:</strong> Invierno = menos producción
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-6 w-6 text-red-500 mr-2" />
                      2. Alimentos con Vitamina D
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                      <p className="text-amber-800 text-sm">
                        <strong>Realidad:</strong> Muy pocos alimentos tienen vitamina D naturalmente. Es difícil
                        obtener suficiente solo con la comida.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🐟 Mejores Fuentes:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Salmón salvaje:</strong> 600-1000 UI por porción
                          </li>
                          <li>
                            • <strong>Sardinas:</strong> 300-400 UI por lata
                          </li>
                          <li>
                            • <strong>Caballa:</strong> 400-500 UI por porción
                          </li>
                          <li>
                            • <strong>Yemas de huevo:</strong> 20-40 UI por yema
                          </li>
                          <li>
                            • <strong>Hígado de res:</strong> 40 UI por porción
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🥛 Alimentos Fortificados:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Leche fortificada</li>
                          <li>• Cereales fortificados</li>
                          <li>• Bebidas vegetales fortificadas</li>
                          <li>• Yogur fortificado</li>
                          <li>• Margarina fortificada</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Supplementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Suplementación: Cuándo y Cómo</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Para la mayoría de personas:</strong> La suplementación es necesaria, especialmente en
                  invierno o si vives en lugares con poco sol.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tipos de Suplementos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Vitamina D3 (Colecalciferol)</h5>
                        <p className="text-xs text-slate-600 mb-1">✅ La mejor opción - más efectiva</p>
                        <p className="text-sm text-slate-600">Es la misma forma que produce tu piel</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Vitamina D2 (Ergocalciferol)</h5>
                        <p className="text-xs text-slate-600 mb-1">⚠️ Menos efectiva</p>
                        <p className="text-sm text-slate-600">De origen vegetal, pero no dura tanto en el cuerpo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dosis Recomendadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Mantenimiento General:</h5>
                        <p className="text-sm text-slate-600">1,000-2,000 UI diarias</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Deficiencia:</h5>
                        <p className="text-sm text-slate-600">3,000-5,000 UI diarias (bajo supervisión)</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">Niños:</h5>
                        <p className="text-sm text-slate-600">400-1,000 UI diarias (según edad)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <h5 className="font-medium text-amber-800 mb-2">💡 Consejos para Mejor Absorción:</h5>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>• Tómala con una comida que tenga grasas (mejora absorción)</li>
                  <li>• Combínala con vitamina K2 y magnesio</li>
                  <li>• Tómala por la mañana (puede afectar el sueño si es de noche)</li>
                  <li>• Sé consistente - tómala todos los días</li>
                </ul>
              </div>
            </div>

            {/* Testing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Cómo Saber si Tienes Suficiente Vitamina D?</h2>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                    Análisis de Sangre: 25(OH)D
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Niveles en Sangre:</h5>
                      <ul className="text-sm text-slate-600 space-y-2">
                        <li>
                          • <strong>Deficiencia severa:</strong> Menos de 20 ng/ml
                        </li>
                        <li>
                          • <strong>Deficiencia:</strong> 20-30 ng/ml
                        </li>
                        <li>
                          • <strong>Insuficiencia:</strong> 30-40 ng/ml
                        </li>
                        <li>
                          • <strong>Óptimo:</strong> 40-60 ng/ml
                        </li>
                        <li>
                          • <strong>Exceso:</strong> Más de 100 ng/ml
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">¿Cuándo Hacerse el Análisis?</h5>
                      <ul className="text-sm text-slate-600 space-y-2">
                        <li>• Si tienes síntomas de deficiencia</li>
                        <li>• Antes de empezar suplementación</li>
                        <li>• Después de 3 meses de suplementar</li>
                        <li>• Una vez al año como prevención</li>
                        <li>• Si vives en lugares con poco sol</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Special considerations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Consideraciones Especiales</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-pink-50 border-pink-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-pink-800">👶 Embarazo y Lactancia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-pink-700 space-y-2 text-sm">
                      <li>• Súper importante para el desarrollo del bebé</li>
                      <li>• Previene complicaciones del embarazo</li>
                      <li>• Dosis: 1,000-4,000 UI diarias</li>
                      <li>• Siempre bajo supervisión médica</li>
                      <li>• El bebé depende de los niveles de la mamá</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-800">👴 Adultos Mayores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-purple-700 space-y-2 text-sm">
                      <li>• La piel produce menos vitamina D con la edad</li>
                      <li>• Mayor riesgo de fracturas</li>
                      <li>• Necesitan dosis más altas</li>
                      <li>• Importante para prevenir caídas</li>
                      <li>• Combinar con ejercicio y calcio</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                La vitamina D es mucho más que una vitamina - es una hormona esencial para tu salud. La mayoría de las
                personas necesitan más de la que están obteniendo, especialmente si viven en lugares con poco sol.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                La combinación de exposición solar inteligente, alimentación adecuada y suplementación cuando sea
                necesaria puede transformar tu salud, energía y bienestar general.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">¿Tienes Preguntas sobre Vitamina D?</h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                vitamina D, exposición solar, suplementación y niveles óptimos para tu situación.
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
