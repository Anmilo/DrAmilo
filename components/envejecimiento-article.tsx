"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Brain, Shield, Zap, Clock, Utensils, MessageCircle, Calendar } from "lucide-react"

interface EnvejecimientoArticleProps {
  onBack?: () => void
  onNavigateToSection?: (sectionId: string) => void
}

export default function EnvejecimientoArticle({ onBack, onNavigateToSection }: EnvejecimientoArticleProps) {
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
              Anti-aging
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Envejecer Bien: Tu Guía para Mantenerte Joven y Vital
            </h1>
            <div className="flex items-center justify-center text-slate-600 text-sm">
              <span>Por Dr. Angel</span>
              <span className="mx-2">•</span>
              <span>25 Nov 2024</span>
              <span className="mx-2">•</span>
              <span>12 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Envejecer no significa automáticamente enfermarse o perder vitalidad. La medicina funcional nos enseña
                que puedes influir enormemente en cómo envejeces. No se trata de vivir para siempre, sino de vivir
                mejor: con más energía, claridad mental y salud durante todos tus años.
              </p>
            </div>

            {/* What is healthy aging */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué es Envejecer Saludablemente?</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <p className="text-slate-700 mb-4">
                  Imagina que tu cuerpo es como un auto clásico. Puedes dejarlo en el garaje y que se oxide, o puedes
                  mantenerlo, cuidarlo y hacer que funcione como nuevo durante décadas. ¡Tu cuerpo es igual!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-6 w-6 text-green-500 mr-2" />
                      Energía y Vitalidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Despertar con energía natural</li>
                      <li>• Mantener fuerza y resistencia</li>
                      <li>• Recuperarse rápido del ejercicio</li>
                      <li>• Tener ganas de hacer cosas</li>
                      <li>• Dormir profundo y reparador</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-6 w-6 text-blue-500 mr-2" />
                      Mente Clara
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Memoria sharp y ágil</li>
                      <li>• Concentración sin esfuerzo</li>
                      <li>• Aprender cosas nuevas fácilmente</li>
                      <li>• Estado de ánimo estable</li>
                      <li>• Creatividad y curiosidad</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Heart className="h-6 w-6 text-purple-500 mr-2" />
                      Cuerpo Fuerte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Huesos y músculos fuertes</li>
                      <li>• Piel saludable y radiante</li>
                      <li>• Sistema inmune robusto</li>
                      <li>• Digestión eficiente</li>
                      <li>• Movilidad y flexibilidad</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* What accelerates aging */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué Te Hace Envejecer Más Rápido?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">⚡ Aceleradores del Envejecimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>
                        • <strong>Estrés crónico:</strong> El "oxidante" #1 de tu cuerpo
                      </li>
                      <li>
                        • <strong>Inflamación:</strong> El "fuego interno" que daña células
                      </li>
                      <li>
                        • <strong>Azúcar en exceso:</strong> "Carameliza" tus proteínas
                      </li>
                      <li>
                        • <strong>Falta de sueño:</strong> Tu cuerpo no se repara
                      </li>
                      <li>
                        • <strong>Sedentarismo:</strong> "Si no lo usas, lo pierdes"
                      </li>
                      <li>
                        • <strong>Toxinas:</strong> Sobrecargan tus sistemas de limpieza
                      </li>
                      <li>
                        • <strong>Aislamiento social:</strong> Afecta tu salud mental
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-emerald-50 border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-800">🌟 Ralentizadores del Envejecimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-emerald-700 space-y-2 text-sm">
                      <li>
                        • <strong>Alimentación antiinflamatoria:</strong> Nutre y protege
                      </li>
                      <li>
                        • <strong>Ejercicio regular:</strong> Mantiene todo funcionando
                      </li>
                      <li>
                        • <strong>Sueño reparador:</strong> Tu "taller de reparación" nocturno
                      </li>
                      <li>
                        • <strong>Manejo del estrés:</strong> Protege tus células
                      </li>
                      <li>
                        • <strong>Conexiones sociales:</strong> Medicina para el alma
                      </li>
                      <li>
                        • <strong>Propósito de vida:</strong> Razón para levantarse
                      </li>
                      <li>
                        • <strong>Aprendizaje continuo:</strong> Mantiene el cerebro joven
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* The pillars of healthy aging */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Los 5 Pilares del Envejecimiento Saludable</h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 text-green-500 mr-2" />
                      1. Nutrición Inteligente (Tu Combustible Premium)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🥗 Alimentos Anti-Edad:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>
                            • <strong>Antioxidantes:</strong> Berries, té verde, chocolate oscuro
                          </li>
                          <li>
                            • <strong>Omega-3:</strong> Pescado graso, nueces, semillas
                          </li>
                          <li>
                            • <strong>Proteína de calidad:</strong> Huevos, pescado, legumbres
                          </li>
                          <li>
                            • <strong>Verduras coloridas:</strong> Cuanto más color, mejor
                          </li>
                          <li>
                            • <strong>Grasas buenas:</strong> Aguacate, aceite de oliva
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">⚠️ Evita los "Aceleradores":</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Azúcar refinada y dulces procesados</li>
                          <li>• Comida ultra-procesada</li>
                          <li>• Grasas trans y frituras</li>
                          <li>• Exceso de alcohol</li>
                          <li>• Carnes procesadas</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-6 w-6 text-blue-500 mr-2" />
                      2. Movimiento Inteligente (Tu Fuente de Juventud)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-blue-800 text-sm">
                        <strong>¡Clave!</strong> El ejercicio es la medicina anti-edad más poderosa que existe. Activa
                        genes de longevidad y regenera células.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">💪 Fuerza (2-3x/semana):</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Pesas o bandas elásticas</li>
                          <li>• Ejercicios con peso corporal</li>
                          <li>• Mantiene masa muscular</li>
                          <li>• Fortalece huesos</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">❤️ Cardio (4-5x/semana):</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Caminata rápida</li>
                          <li>• Natación</li>
                          <li>• Baile</li>
                          <li>• Protege corazón y cerebro</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">🧘 Flexibilidad (diario):</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Yoga o tai chi</li>
                          <li>• Estiramientos</li>
                          <li>• Mantiene movilidad</li>
                          <li>• Reduce estrés</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-purple-500 mr-2" />
                      3. Sueño Reparador (Tu Taller de Renovación)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">¿Qué pasa mientras duermes?</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Se reparan células dañadas</li>
                          <li>• Se consolida la memoria</li>
                          <li>• Se producen hormonas de crecimiento</li>
                          <li>• Se limpia el cerebro de toxinas</li>
                          <li>• Se fortalece el sistema inmune</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Rutina para Dormir Mejor:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Acostarse a la misma hora</li>
                          <li>• Cuarto fresco y oscuro</li>
                          <li>• No pantallas 1 hora antes</li>
                          <li>• Té de manzanilla o magnesio</li>
                          <li>• Respiración profunda</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-2" />
                      4. Manejo del Estrés (Tu Escudo Protector)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>¡Importante!</strong> El estrés crónico acorta los telómeros (las "tapas" de tus
                        cromosomas) y acelera el envejecimiento celular.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Técnicas Diarias:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• 10 minutos de meditación</li>
                          <li>• Respiración profunda</li>
                          <li>• Tiempo en la naturaleza</li>
                          <li>• Música relajante</li>
                          <li>• Gratitud diaria</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Cambios de Perspectiva:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Enfócate en lo que puedes controlar</li>
                          <li>• Aprende a decir "no"</li>
                          <li>• Busca apoyo social</li>
                          <li>• Encuentra tu propósito</li>
                          <li>• Practica el perdón</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-6 w-6 text-green-500 mr-2" />
                      5. Conexión y Propósito (Tu Medicina Social)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Conexiones Sociales:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Mantén amistades cercanas</li>
                          <li>• Participa en comunidades</li>
                          <li>• Ayuda a otros (voluntariado)</li>
                          <li>• Comparte comidas en familia</li>
                          <li>• Abraza y expresa afecto</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Propósito de Vida:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Encuentra tu "por qué"</li>
                          <li>• Establece metas significativas</li>
                          <li>• Aprende algo nuevo cada día</li>
                          <li>• Comparte tu sabiduría</li>
                          <li>• Deja un legado positivo</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Supplements for healthy aging */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Suplementos para el Envejecimiento Saludable</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 text-sm">
                  <strong>Nota:</strong> Los suplementos son un apoyo, no un reemplazo de un estilo de vida saludable.
                  Consulta con un profesional antes de tomarlos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Básicos Anti-Edad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Omega-3 (EPA/DHA)</h5>
                        <p className="text-xs text-slate-600">Protege cerebro y corazón, reduce inflamación</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Vitamina D</h5>
                        <p className="text-xs text-slate-600">Esencial para huesos, inmunidad y estado de ánimo</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Magnesio</h5>
                        <p className="text-xs text-slate-600">Mejora sueño, reduce estrés, apoya 300+ funciones</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Complejo B</h5>
                        <p className="text-xs text-slate-600">Energía celular y función neurológica</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Avanzados Anti-Edad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-slate-900">Coenzima Q10</h5>
                        <p className="text-xs text-slate-600">Energía mitocondrial y protección cardiovascular</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Resveratrol</h5>
                        <p className="text-xs text-slate-600">Activa genes de longevidad, potente antioxidante</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">NAD+ Precursores</h5>
                        <p className="text-xs text-slate-600">Reparación celular y energía mitocondrial</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Curcumina</h5>
                        <p className="text-xs text-slate-600">Antiinflamatorio potente, protege el cerebro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Practical daily routine */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tu Rutina Diaria Anti-Edad</h2>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-emerald-800 mb-3">🌅 Rutina Matutina:</h5>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>• Despertar a la misma hora</li>
                      <li>• 10 minutos de luz solar</li>
                      <li>• Hidratación con agua tibia y limón</li>
                      <li>• 5 minutos de gratitud o meditación</li>
                      <li>• Desayuno rico en proteína</li>
                      <li>• 30 minutos de movimiento</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-800 mb-3">🌙 Rutina Nocturna:</h5>
                    <ul className="text-emerald-700 space-y-1 text-sm">
                      <li>• Cena ligera 3 horas antes de dormir</li>
                      <li>• No pantallas 1 hora antes</li>
                      <li>• Té relajante o magnesio</li>
                      <li>• Lectura o música suave</li>
                      <li>• Respiración profunda</li>
                      <li>• Dormir 7-9 horas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">En Resumen</h2>
              <p className="text-emerald-800 leading-relaxed mb-4">
                Envejecer saludablemente no es cuestión de suerte o genes únicamente. Es el resultado de decisiones
                diarias inteligentes que puedes tomar hoy mismo. Cada comida, cada paso, cada noche de buen sueño es una
                inversión en tu futuro.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                No se trata de ser perfecto, sino de ser consistente. Pequeños cambios sostenidos en el tiempo crean
                transformaciones extraordinarias. ¡Tu yo del futuro te lo agradecerá!
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">¿Quieres Crear tu Plan Personal Anti-Edad?</h3>
              <p className="text-slate-600 mb-6">
                Chatea con nuestro Asistente de Salud especializado en medicina funcional para resolver tus dudas sobre
                envejecimiento saludable, rutinas anti-edad y estrategias personalizadas para tu estilo de vida.
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
