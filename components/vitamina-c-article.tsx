"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Zap, Heart, Leaf, Pill, AlertTriangle, MessageCircle, Calendar } from "lucide-react"

interface VitaminaCArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function VitaminaCArticle({ onBack, onNavigateToSection }: VitaminaCArticleProps) {
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
              Vitamina C: Mucho Más que un Simple Antioxidante
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>18 Dic 2024</span>
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
                Cuando piensas en vitamina C, probablemente piensas en naranjas y resfriados. Pero esta vitamina es como
                un "trabajador multitarea" en tu cuerpo: construye colágeno, fortalece tu sistema inmune, ayuda a
                absorber hierro, y mucho más. Te explico todo lo que necesitas saber de forma simple.
              </p>
            </div>

            {/* What vitamin C does */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué Hace la Vitamina C en tu Cuerpo?</h2>

              <div className="bg-orange-50 rounded-lg p-6 mb-6">
                <p className="text-orange-800 mb-4">
                  <strong>Dato Curioso:</strong> Los humanos somos uno de los pocos animales que no podemos producir
                  vitamina C. ¡Tenemos que obtenerla de los alimentos todos los días!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-6 w-6 text-orange-500 mr-2" />
                      Constructor de Colágeno
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Piel firme y elástica</li>
                      <li>• Huesos y dientes fuertes</li>
                      <li>• Vasos sanguíneos saludables</li>
                      <li>• Cicatrización rápida</li>
                      <li>• Articulaciones flexibles</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-blue-500 mr-2" />
                      Guardián Inmune
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Fortalece las defensas</li>
                      <li>• Reduce duración de resfriados</li>
                      <li>• Protege contra infecciones</li>
                      <li>• Ayuda a los glóbulos blancos</li>
                      <li>• Acelera la recuperación</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Heart className="h-6 w-6 text-green-500 mr-2" />
                      Antioxidante Poderoso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Neutraliza radicales libres</li>
                      <li>• Protege células del daño</li>
                      <li>• Previene envejecimiento prematuro</li>
                      <li>• Regenera otros antioxidantes</li>
                      <li>• Reduce inflamación</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Signs of deficiency */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Señales de que te Falta Vitamina C</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm">
                  <strong>¡Importante!</strong> La deficiencia severa (escorbuto) es rara hoy en día, pero la
                  deficiencia leve es más común de lo que piensas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Síntomas Tempranos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Cansancio y fatiga constante</li>
                      <li>• Resfriados frecuentes o prolongados</li>
                      <li>• Heridas que tardan en sanar</li>
                      <li>• Moretones que aparecen fácilmente</li>
                      <li>• Encías que sangran al cepillarse</li>
                      <li>• Piel seca y áspera</li>
                      <li>• Cabello quebradizo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">⚠️ Síntomas Avanzados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Dolor en articulaciones</li>
                      <li>• Dientes flojos</li>
                      <li>• Anemia (falta de hierro)</li>
                      <li>• Depresión o irritabilidad</li>
                      <li>• Infecciones recurrentes</li>
                      <li>• Problemas de cicatrización</li>
                      <li>• Debilidad muscular</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Food sources */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fuentes Naturales de Vitamina C</h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-sm">
                  <strong>¡Sorpresa!</strong> Muchas verduras tienen más vitamina C que las naranjas. ¡La variedad es
                  clave!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-6 w-6 text-green-500 mr-2" />
                      Campeones de Vitamina C
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-700">Guayaba</span>
                        <span className="text-green-600 font-medium">228mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Pimiento rojo</span>
                        <span className="text-green-600 font-medium">190mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Kiwi</span>
                        <span className="text-green-600 font-medium">93mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Brócoli</span>
                        <span className="text-green-600 font-medium">89mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Fresas</span>
                        <span className="text-green-600 font-medium">59mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Naranja</span>
                        <span className="text-green-600 font-medium">53mg/100g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-6 w-6 text-orange-500 mr-2" />
                      Otras Fuentes Excelentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🥬 Verduras:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Coliflor, coles de Bruselas</li>
                          <li>• Espinacas, acelgas</li>
                          <li>• Tomates, pimientos</li>
                          <li>• Perejil, cilantro</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🍓 Frutas:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Papaya, mango</li>
                          <li>• Piña, melón</li>
                          <li>• Berries (arándanos, moras)</li>
                          <li>• Cítricos (limón, toronja)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How much do you need */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Cuánta Vitamina C Necesitas?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recomendaciones Oficiales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Adultos:</h5>
                        <p className="text-sm text-slate-600">Hombres: 90mg/día | Mujeres: 75mg/día</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Fumadores:</h5>
                        <p className="text-sm text-slate-600">+35mg adicionales (el humo destruye vitamina C)</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Embarazo/Lactancia:</h5>
                        <p className="text-sm text-slate-600">85-120mg/día</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Niños:</h5>
                        <p className="text-sm text-slate-600">15-75mg/día (según edad)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Medicina Funcional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Para Salud Óptima:</h5>
                        <p className="text-sm text-slate-600">200-1000mg/día (según necesidades)</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Durante Enfermedad:</h5>
                        <p className="text-sm text-slate-600">1000-3000mg/día (dividido en dosis)</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Para Estrés/Ejercicio:</h5>
                        <p className="text-sm text-slate-600">500-1500mg/día</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Anti-envejecimiento:</h5>
                        <p className="text-sm text-slate-600">500-1000mg/día</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Supplementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Suplementación: ¿Cuándo y Cómo?</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Pill className="h-6 w-6 text-blue-500 mr-2" />
                      Tipos de Suplementos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">✅ Mejores Formas:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Ácido ascórbico:</strong> Forma básica y económica
                          </li>
                          <li>
                            • <strong>Ascorbato de sodio:</strong> Menos ácido para el estómago
                          </li>
                          <li>
                            • <strong>Ester-C:</strong> Liberación prolongada
                          </li>
                          <li>
                            • <strong>Liposomal:</strong> Mejor absorción
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">💡 Consejos de Absorción:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Divide la dosis en 2-3 tomas</li>
                          <li>• Toma con comida (reduce acidez)</li>
                          <li>• Combina con bioflavonoides</li>
                          <li>• Evita con antiácidos</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h5 className="font-medium text-amber-800 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    ¿Cuándo Suplementar?
                  </h5>
                  <ul className="text-amber-700 space-y-1 text-sm">
                    <li>• Si no comes suficientes frutas y verduras</li>
                    <li>• Durante períodos de estrés o enfermedad</li>
                    <li>• Si fumas o estás expuesto a contaminación</li>
                    <li>• Para apoyo inmune en invierno</li>
                    <li>• Si tienes problemas de absorción</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special benefits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Beneficios Especiales de la Vitamina C</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para la Piel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Estimula producción de colágeno</li>
                      <li>• Reduce arrugas y líneas finas</li>
                      <li>• Aclara manchas oscuras</li>
                      <li>• Protege del daño solar</li>
                      <li>• Acelera cicatrización</li>
                      <li>• Da luminosidad natural</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para el Corazón</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Fortalece vasos sanguíneos</li>
                      <li>• Reduce presión arterial</li>
                      <li>• Mejora función endotelial</li>
                      <li>• Reduce colesterol LDL oxidado</li>
                      <li>• Previene aterosclerosis</li>
                      <li>• Protege contra infartos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para el Cerebro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Protege neuronas del daño</li>
                      <li>• Mejora función cognitiva</li>
                      <li>• Reduce riesgo de demencia</li>
                      <li>• Apoya neurotransmisores</li>
                      <li>• Reduce estrés oxidativo</li>
                      <li>• Mejora estado de ánimo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para la Absorción</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Mejora absorción de hierro</li>
                      <li>• Ayuda con anemia</li>
                      <li>• Potencia otros antioxidantes</li>
                      <li>• Regenera vitamina E</li>
                      <li>• Mejora síntesis de carnitina</li>
                      <li>• Apoya metabolismo energético</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Precautions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Precauciones y Efectos Secundarios</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">⚠️ Ten Cuidado Si:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Tienes cálculos renales (oxalato)</li>
                      <li>• Tomas anticoagulantes</li>
                      <li>• Tienes hemocromatosis (exceso hierro)</li>
                      <li>• Sufres de acidez estomacal severa</li>
                      <li>• Tomas quimioterapia</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">💊 Dosis Altas Pueden Causar:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• Diarrea o malestar estomacal</li>
                      <li>• Náuseas o acidez</li>
                      <li>• Dolor de cabeza</li>
                      <li>• Insomnio (si se toma tarde)</li>
                      <li>• Cálculos renales (muy raro)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                La vitamina C es mucho más que una vitamina para resfriados. Es un nutriente esencial que tu cuerpo
                necesita todos los días para construir, reparar y proteger. La mejor estrategia es obtenerla
                principalmente de alimentos frescos y suplementar cuando sea necesario.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Recuerda: una dieta rica en frutas y verduras coloridas no solo te dará vitamina C, sino también cientos
                de otros nutrientes que trabajan en equipo para mantenerte saludable.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">¿Tienes Preguntas sobre Vitamina C?</h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                vitamina C, dosificación, fuentes alimentarias y suplementación personalizada.
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
