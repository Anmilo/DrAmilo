"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, Heart, Brain, Shield, Moon, Utensils, MessageCircle, Calendar, Leaf } from "lucide-react"

interface MagnesioArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function MagnesioArticle({ onBack, onNavigateToSection }: MagnesioArticleProps) {
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
              Minerales
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Magnesio: El "Mineral Maestro" que Tu Cuerpo Necesita
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>12 Dic 2024</span>
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
                El magnesio es como el "director de orquesta" de tu cuerpo, coordinando más de 300 reacciones
                enzimáticas diferentes. Sin suficiente magnesio, tu cuerpo simplemente no puede funcionar al 100%. Es
                esencial para todo: desde tu corazón hasta tu sueño, desde tus músculos hasta tu estado de ánimo.
              </p>
            </div>

            {/* Why magnesium is so important */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Por Qué es Tan Importante el Magnesio?</h2>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <p className="text-purple-800 mb-4">
                  <strong>Dato Impresionante:</strong> El magnesio participa en más de 300 reacciones enzimáticas en tu
                  cuerpo. Es como tener un asistente súper eficiente que ayuda en casi todo lo que tu cuerpo hace.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Heart className="h-6 w-6 text-red-500 mr-2" />
                      Corazón y Músculos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Regula el ritmo cardíaco</li>
                      <li>• Relaja los músculos</li>
                      <li>• Controla la presión arterial</li>
                      <li>• Previene calambres</li>
                      <li>• Mejora la circulación</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-6 w-6 text-blue-500 mr-2" />
                      Cerebro y Nervios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Calma el sistema nervioso</li>
                      <li>• Reduce ansiedad y estrés</li>
                      <li>• Mejora la concentración</li>
                      <li>• Previene migrañas</li>
                      <li>• Estabiliza el estado de ánimo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-6 w-6 text-green-500 mr-2" />
                      Energía y Metabolismo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Produce energía celular (ATP)</li>
                      <li>• Regula el azúcar en sangre</li>
                      <li>• Apoya la función tiroidea</li>
                      <li>• Mejora la resistencia</li>
                      <li>• Reduce la fatiga</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Signs of deficiency */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Señales de que te Falta Magnesio</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm">
                  <strong>¡Alarmante!</strong> Hasta el 80% de las personas tienen deficiencia de magnesio sin saberlo.
                  Los análisis de sangre normales no siempre detectan la deficiencia.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Síntomas Físicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>
                        • <strong>Calambres musculares:</strong> Especialmente en piernas
                      </li>
                      <li>
                        • <strong>Tics en los ojos:</strong> Espasmos involuntarios
                      </li>
                      <li>
                        • <strong>Fatiga constante:</strong> Sin energía
                      </li>
                      <li>
                        • <strong>Dolores de cabeza:</strong> Migrañas frecuentes
                      </li>
                      <li>
                        • <strong>Palpitaciones:</strong> Corazón irregular
                      </li>
                      <li>
                        • <strong>Estreñimiento:</strong> Músculos intestinales tensos
                      </li>
                      <li>
                        • <strong>Presión alta:</strong> Vasos sanguíneos contraídos
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">🧠 Síntomas Mentales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>
                        • <strong>Ansiedad:</strong> Nerviosismo constante
                      </li>
                      <li>
                        • <strong>Insomnio:</strong> Dificultad para relajarse
                      </li>
                      <li>
                        • <strong>Irritabilidad:</strong> Cambios de humor
                      </li>
                      <li>
                        • <strong>Depresión:</strong> Estado de ánimo bajo
                      </li>
                      <li>
                        • <strong>Niebla mental:</strong> Dificultad para concentrarse
                      </li>
                      <li>
                        • <strong>Sensibilidad al ruido:</strong> Sobresaltos fáciles
                      </li>
                      <li>
                        • <strong>Ataques de pánico:</strong> Episodios de ansiedad intensa
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why we're deficient */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Por Qué Nos Falta Magnesio?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 text-orange-500 mr-2" />
                      Problemas Alimentarios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🌾 Suelos Empobrecidos:</h5>
                        <p className="text-sm text-slate-600 mb-2">
                          Los alimentos modernos tienen menos magnesio que antes porque los suelos están agotados.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🍞 Alimentos Procesados:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Refinamiento elimina magnesio</li>
                          <li>• Comida chatarra sin nutrientes</li>
                          <li>• Azúcar agota las reservas</li>
                          <li>• Cafeína aumenta la pérdida</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-2" />
                      Factores de Pérdida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">💊 Medicamentos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Diuréticos</li>
                          <li>• Inhibidores de bomba de protones</li>
                          <li>• Antibióticos</li>
                          <li>• Píldoras anticonceptivas</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🏃‍♀️ Estilo de Vida:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Estrés crónico</li>
                          <li>• Ejercicio intenso</li>
                          <li>• Alcohol excesivo</li>
                          <li>• Sudoración excesiva</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Food sources */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fuentes Naturales de Magnesio</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-6 w-6 text-green-500 mr-2" />
                      Mejores Fuentes Alimentarias
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-700">Semillas de calabaza</span>
                        <span className="text-green-600 font-medium">534mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Chocolate oscuro (85%)</span>
                        <span className="text-green-600 font-medium">228mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Almendras</span>
                        <span className="text-green-600 font-medium">268mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Espinacas cocidas</span>
                        <span className="text-green-600 font-medium">87mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Aguacate</span>
                        <span className="text-green-600 font-medium">29mg/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Plátano</span>
                        <span className="text-green-600 font-medium">27mg/100g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-6 w-6 text-blue-500 mr-2" />
                      Otras Fuentes Excelentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🥜 Frutos Secos y Semillas:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Nueces de Brasil, anacardos</li>
                          <li>• Semillas de girasol, sésamo</li>
                          <li>• Tahini, mantequilla de almendra</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🐟 Otros Alimentos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Pescados grasos (salmón, caballa)</li>
                          <li>• Legumbres (frijoles negros)</li>
                          <li>• Granos integrales (quinoa, arroz integral)</li>
                          <li>• Verduras de hoja verde</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Types of magnesium supplements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tipos de Suplementos de Magnesio</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>¡Importante!</strong> No todos los suplementos de magnesio son iguales. Cada tipo tiene
                  diferentes beneficios y absorción.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para Relajación y Sueño</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Glicinato de Magnesio</h5>
                        <p className="text-xs text-slate-600 mb-1">✅ La mejor opción general</p>
                        <p className="text-sm text-slate-600">Excelente absorción, no causa diarrea, muy relajante</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Taurato de Magnesio</h5>
                        <p className="text-xs text-slate-600 mb-1">❤️ Ideal para el corazón</p>
                        <p className="text-sm text-slate-600">Combina magnesio con taurina, protege cardiovascular</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Malato de Magnesio</h5>
                        <p className="text-xs text-slate-600 mb-1">⚡ Para energía</p>
                        <p className="text-sm text-slate-600">Combina con ácido málico, mejora energía muscular</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Para Problemas Específicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Treonato de Magnesio</h5>
                        <p className="text-xs text-slate-600 mb-1">🧠 Para el cerebro</p>
                        <p className="text-sm text-slate-600">Cruza la barrera hematoencefálica, mejora memoria</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Óxido de Magnesio</h5>
                        <p className="text-xs text-slate-600 mb-1">💩 Para estreñimiento</p>
                        <p className="text-sm text-slate-600">Baja absorción pero efecto laxante</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Citrato de Magnesio</h5>
                        <p className="text-xs text-slate-600 mb-1">⚖️ Absorción moderada</p>
                        <p className="text-sm text-slate-600">Buena absorción, puede causar diarrea en dosis altas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Dosage and timing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Dosis y Cuándo Tomar Magnesio</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dosis Recomendadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Adultos:</h5>
                        <p className="text-sm text-slate-600">Hombres: 400-420mg/día | Mujeres: 310-320mg/día</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Para Deficiencia:</h5>
                        <p className="text-sm text-slate-600">200-400mg adicionales (bajo supervisión)</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Embarazo/Lactancia:</h5>
                        <p className="text-sm text-slate-600">350-400mg/día</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Deportistas:</h5>
                        <p className="text-sm text-slate-600">Hasta 600mg/día (por mayor pérdida)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Moon className="h-6 w-6 text-purple-500 mr-2" />
                      Mejor Momento para Tomar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">🌙 Por la Noche:</h5>
                        <p className="text-sm text-slate-600">
                          Ideal para relajación y sueño (1-2 horas antes de dormir)
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">🍽️ Con Comida:</h5>
                        <p className="text-sm text-slate-600">Mejora absorción y reduce molestias estomacales</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">💊 Dividir Dosis:</h5>
                        <p className="text-sm text-slate-600">Si tomas más de 200mg, divide en 2-3 tomas</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">⚠️ Evitar Con:</h5>
                        <p className="text-sm text-slate-600">Calcio, zinc, hierro (compiten por absorción)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits for specific conditions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Beneficios del Magnesio para Condiciones Específicas
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ansiedad y Estrés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Calma el sistema nervioso</li>
                      <li>• Reduce cortisol (hormona del estrés)</li>
                      <li>• Mejora la respuesta al estrés</li>
                      <li>• Relaja músculos tensos</li>
                      <li>• Mejora calidad del sueño</li>
                      <li>• Reduce ataques de pánico</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Migrañas y Dolores de Cabeza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Relaja vasos sanguíneos</li>
                      <li>• Reduce frecuencia de migrañas</li>
                      <li>• Disminuye intensidad del dolor</li>
                      <li>• Mejora función neurológica</li>
                      <li>• Previene espasmos musculares</li>
                      <li>• Reduce sensibilidad a la luz</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Diabetes y Metabolismo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Mejora sensibilidad a la insulina</li>
                      <li>• Regula azúcar en sangre</li>
                      <li>• Reduce resistencia a la insulina</li>
                      <li>• Apoya función pancreática</li>
                      <li>• Mejora metabolismo de glucosa</li>
                      <li>• Reduce inflamación</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rendimiento Deportivo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-slate-600 space-y-2 text-sm">
                      <li>• Mejora contracción muscular</li>
                      <li>• Reduce calambres</li>
                      <li>• Acelera recuperación</li>
                      <li>• Aumenta resistencia</li>
                      <li>• Mejora producción de energía</li>
                      <li>• Reduce fatiga muscular</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Side effects and precautions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Precauciones y Efectos Secundarios</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">⚠️ Efectos Secundarios Comunes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>
                        • <strong>Diarrea:</strong> Dosis muy altas o tipos mal absorbidos
                      </li>
                      <li>
                        • <strong>Náuseas:</strong> Tomar con el estómago vacío
                      </li>
                      <li>
                        • <strong>Calambres abdominales:</strong> Dosis excesiva
                      </li>
                      <li>
                        • <strong>Somnolencia:</strong> Efecto relajante normal
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Consulta Médico Si:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Tienes problemas renales</li>
                      <li>• Tomas medicamentos para el corazón</li>
                      <li>• Usas diuréticos</li>
                      <li>• Tienes miastenia gravis</li>
                      <li>• Tomas antibióticos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                El magnesio es verdaderamente el "mineral maestro" - esencial para cientos de funciones corporales. La
                mayoría de las personas se beneficiarían enormemente de aumentar su ingesta, ya sea a través de
                alimentos ricos en magnesio o suplementación inteligente.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Si sufres de estrés, ansiedad, insomnio, calambres musculares o fatiga, el magnesio podría ser la pieza
                que falta en tu puzzle de salud. ¡Tu cuerpo te lo agradecerá!
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">¿Quieres Optimizar tus Niveles de Magnesio?</h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                magnesio, tipos de suplementos, dosificación y protocolos específicos para tu situación.
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
