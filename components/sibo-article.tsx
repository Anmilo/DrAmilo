"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, AlertTriangle, Utensils, Shield, Clock, Zap, MessageCircle, Calendar } from "lucide-react"

interface SiboArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function SiboArticle({ onBack, onNavigateToSection }: SiboArticleProps) {
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
              Gastroenterología
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              SIBO: Cuando las Bacterias Están en el Lugar Equivocado
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>14 Dic 2024</span>
              <span className="mx-2">•</span>
              <span>11 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                SIBO significa "Sobrecrecimiento Bacteriano del Intestino Delgado". Es como tener una fiesta de
                bacterias en el lugar equivocado de tu intestino. Estas bacterias normalmente viven en el intestino
                grueso, pero cuando se mudan al intestino delgado, causan problemas digestivos molestos.
              </p>
            </div>

            {/* What is SIBO */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué es SIBO? (Explicado Simple)</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <p className="text-slate-700 mb-4">
                  Imagina que tu intestino es como un edificio de apartamentos. El intestino delgado debería estar "casi
                  vacío" (como los pisos altos), mientras que el intestino grueso es donde vive la mayoría de bacterias
                  (como el sótano lleno de gente). En SIBO, las bacterias se mudan a los pisos altos donde no deberían
                  estar.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-6 w-6 text-green-500 mr-2" />
                      Intestino Normal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Intestino delgado: pocas bacterias</li>
                      <li>• Digestión eficiente</li>
                      <li>• Absorción óptima de nutrientes</li>
                      <li>• Sin gases excesivos</li>
                      <li>• Movimiento intestinal regular</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                      Intestino con SIBO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Intestino delgado: sobrepoblado</li>
                      <li>• Fermentación excesiva</li>
                      <li>• Mala absorción de nutrientes</li>
                      <li>• Gases e hinchazón</li>
                      <li>• Diarrea o estreñimiento</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Symptoms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Síntomas de SIBO: ¿Cómo Saber si lo Tienes?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">🚨 Síntomas Digestivos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>
                        • <strong>Hinchazón:</strong> Especialmente después de comer
                      </li>
                      <li>
                        • <strong>Gases excesivos:</strong> Más de lo normal
                      </li>
                      <li>
                        • <strong>Dolor abdominal:</strong> Tipo cólico
                      </li>
                      <li>
                        • <strong>Diarrea o estreñimiento:</strong> O alternando
                      </li>
                      <li>
                        • <strong>Náuseas:</strong> Especialmente después de comidas
                      </li>
                      <li>
                        • <strong>Reflujo ácido:</strong> Acidez frecuente
                      </li>
                      <li>
                        • <strong>Ruidos intestinales:</strong> Gorgoteos audibles
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">⚠️ Síntomas Generales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>
                        • <strong>Fatiga:</strong> Cansancio después de comer
                      </li>
                      <li>
                        • <strong>Deficiencias nutricionales:</strong> B12, hierro, vitaminas
                      </li>
                      <li>
                        • <strong>Pérdida de peso:</strong> Sin intentarlo
                      </li>
                      <li>
                        • <strong>Niebla mental:</strong> Dificultad para concentrarse
                      </li>
                      <li>
                        • <strong>Problemas de piel:</strong> Acné, eczema
                      </li>
                      <li>
                        • <strong>Dolores articulares:</strong> Sin causa aparente
                      </li>
                      <li>
                        • <strong>Ansiedad o depresión:</strong> Conexión intestino-cerebro
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Causes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué Causa SIBO?</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Importante:</strong> SIBO no aparece de la nada. Siempre hay una causa subyacente que permite
                  que las bacterias crezcan donde no deberían.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-orange-500 mr-2" />
                      Problemas de Motilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">¿Qué es la motilidad?</h5>
                        <p className="text-sm text-slate-600 mb-3">
                          Es como las "ondas de limpieza" que mueven la comida y bacterias hacia abajo. Si estas ondas
                          no funcionan bien, las bacterias se quedan "atascadas".
                        </p>
                        <h5 className="font-medium text-slate-900 mb-2">Causas comunes:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Diabetes (daña nervios intestinales)</li>
                          <li>• Hipotiroidismo (ralentiza todo)</li>
                          <li>• Medicamentos (opioides, antiácidos)</li>
                          <li>• Estrés crónico</li>
                          <li>• Envejecimiento</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-2" />
                      Otros Factores
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Factores Estructurales:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Cirugías abdominales (cicatrices)</li>
                          <li>• Enfermedad de Crohn</li>
                          <li>• Diverticulosis</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Factores de Riesgo:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Uso frecuente de antibióticos</li>
                          <li>• Inhibidores de bomba de protones (IBP)</li>
                          <li>• Intoxicación alimentaria previa</li>
                          <li>• Síndrome de intestino irritable</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Cómo se Diagnostica SIBO?</h2>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 text-blue-500 mr-2" />
                    Prueba de Aliento (Breath Test)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">¿Cómo funciona?</h5>
                      <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
                        <li>Bebes una solución de azúcar (lactulosa o glucosa)</li>
                        <li>Las bacterias fermentan el azúcar</li>
                        <li>Produces gases (hidrógeno y metano)</li>
                        <li>Soplas en tubitos cada 20 minutos por 3 horas</li>
                        <li>Se miden los niveles de gases</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Preparación:</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Dieta especial 1-2 días antes</li>
                        <li>• Ayuno de 12 horas</li>
                        <li>• No antibióticos 4 semanas antes</li>
                        <li>• No probióticos 1 semana antes</li>
                        <li>• No fumar el día del test</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Treatment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tratamiento Natural de SIBO</h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 text-green-500 mr-2" />
                      1. Dieta Específica (Lo Más Importante)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="text-green-800 text-sm">
                        <strong>¡Clave!</strong> El objetivo es "matar de hambre" a las bacterias problemáticas
                        eliminando los alimentos que fermentan fácilmente.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">✅ Alimentos Permitidos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Proteínas:</strong> Pollo, pescado, huevos
                          </li>
                          <li>
                            • <strong>Grasas:</strong> Aceite de oliva, aguacate
                          </li>
                          <li>
                            • <strong>Verduras bajas en FODMAP:</strong> Espinacas, zanahorias
                          </li>
                          <li>
                            • <strong>Frutas limitadas:</strong> Berries, cítricos
                          </li>
                          <li>
                            • <strong>Arroz blanco</strong> (en pequeñas cantidades)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">❌ Alimentos a Evitar:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Azúcares:</strong> Miel, fructosa, sorbitol
                          </li>
                          <li>
                            • <strong>Granos:</strong> Trigo, avena, quinoa
                          </li>
                          <li>
                            • <strong>Legumbres:</strong> Frijoles, lentejas
                          </li>
                          <li>
                            • <strong>Lácteos:</strong> Leche, yogur
                          </li>
                          <li>
                            • <strong>Verduras fermentables:</strong> Cebolla, ajo, brócoli
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-blue-500 mr-2" />
                      2. Antimicrobianos Naturales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Hierbas Antimicrobianas:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Berberina:</strong> Potente antibacteriano natural
                          </li>
                          <li>
                            • <strong>Aceite de orégano:</strong> Antimicrobiano de amplio espectro
                          </li>
                          <li>
                            • <strong>Allicina (ajo):</strong> Antibacteriano y antifúngico
                          </li>
                          <li>
                            • <strong>Neem:</strong> Tradicional antimicrobiano
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Protocolos Específicos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Duración: 4-6 semanas típicamente</li>
                          <li>• Rotación de antimicrobianos</li>
                          <li>• Monitoreo de síntomas</li>
                          <li>• Apoyo digestivo simultáneo</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-6 w-6 text-purple-500 mr-2" />
                      3. Mejorar la Motilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Suplementos Procinéticos:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Jengibre:</strong> Estimula motilidad natural
                          </li>
                          <li>
                            • <strong>MotilPro:</strong> Complejo de hierbas
                          </li>
                          <li>
                            • <strong>5-HTP:</strong> Precursor de serotonina
                          </li>
                          <li>
                            • <strong>Magnesio:</strong> Relaja músculos intestinales
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Hábitos de Vida:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Espaciar comidas 4-5 horas</li>
                          <li>• Ejercicio regular (caminata)</li>
                          <li>• Manejo del estrés</li>
                          <li>• Dormir 7-8 horas</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recovery phase */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fase de Recuperación</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Reintroducción Gradual de Alimentos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Orden de Reintroducción:</h5>
                        <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
                          <li>Verduras bien cocidas</li>
                          <li>Frutas bajas en azúcar</li>
                          <li>Granos sin gluten (arroz integral)</li>
                          <li>Legumbres (pequeñas cantidades)</li>
                          <li>Lácteos fermentados (si se toleran)</li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Cómo Reintroducir:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Un alimento nuevo cada 3 días</li>
                          <li>• Pequeñas cantidades al inicio</li>
                          <li>• Monitorear síntomas</li>
                          <li>• Llevar un diario alimentario</li>
                          <li>• Paciencia y gradualidad</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                  <h4 className="font-semibold text-emerald-800 mb-4">Apoyo Digestivo a Largo Plazo:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>✓ Enzimas digestivas con comidas</li>
                      <li>✓ Probióticos específicos (después del tratamiento)</li>
                      <li>✓ L-glutamina para reparar intestino</li>
                      <li>✓ Zinc carnosina para mucosa intestinal</li>
                    </ul>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>✓ Manejo continuo del estrés</li>
                      <li>✓ Ejercicio regular</li>
                      <li>✓ Sueño reparador</li>
                      <li>✓ Seguimiento médico regular</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Prevención de Recaídas</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-4">Factores Clave para Prevenir SIBO:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-amber-800 mb-2">🍽️ Hábitos Alimentarios:</h5>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• Comer en horarios regulares</li>
                      <li>• Masticar bien los alimentos</li>
                      <li>• Evitar picar entre comidas</li>
                      <li>• Limitar azúcares y procesados</li>
                      <li>• Mantener diversidad alimentaria</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-amber-800 mb-2">🏃‍♀️ Estilo de Vida:</h5>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• Ejercicio regular (mejora motilidad)</li>
                      <li>• Manejo efectivo del estrés</li>
                      <li>• Sueño de calidad</li>
                      <li>• Evitar antibióticos innecesarios</li>
                      <li>• Tratar condiciones subyacentes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                SIBO es una condición compleja pero tratable. El éxito del tratamiento requiere un enfoque integral que
                incluya dieta específica, antimicrobianos naturales, mejora de la motilidad y cambios de estilo de vida.
                La paciencia y consistencia son clave.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                Recuerda que SIBO a menudo es síntoma de un problema subyacente. Identificar y tratar la causa raíz es
                fundamental para prevenir recaídas y lograr una salud digestiva duradera.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">¿Sospechas que Puedes Tener SIBO?</h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                SIBO, síntomas, dietas específicas y protocolos de tratamiento natural.
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
