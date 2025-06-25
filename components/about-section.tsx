import { Card } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Sobre Mí</h2>
          <div className="text-xl text-slate-600 max-w-3xl mx-auto space-y-4">
            <p>¡Hola! Soy Angel: Tu médico y por qué no, amigo en el Camino del Bienestar.</p>

            <p>
              Como médico, siempre busqué ir más allá de los síntomas. La medicina tradicional, aunque vital, me dejaba
              inquieto: ¿por qué no enfocarnos en la raíz del problema o en la prevención en vez de tratar solo la
              patología? Ver a pacientes y seres queridos atrapados en una espiral de medicación sin resolver el origen
              de su malestar me impulsó a un cambio.
            </p>

            <p>
              Así descubrí (y sigo redescubriendo porque es un constante aprendizaje) la Medicina Funcional. Entendí que
              podemos ayudarte a restaurar tu salud desde dentro, usando la nutrición, el estilo de vida, terapias
              naturales o complementaciones naturales.
            </p>

            <p>
              Mi misión es que restaures tu salud sin necesidad de polimedicaciones (cuando sea posible) y vivas con más
              vitalidad y menos dependencia de fármacos.
            </p>

            <p>
              La salud, para mí, es bienestar integral: sentirte con energía, vitalidad y claridad mental para disfrutar
              la vida al máximo.
            </p>

            <p>
              Aquí, compartiré herramientas y conocimientos para que construyamos juntos tu mejor versión. ¡Me encantará
              acompañarte en este viaje!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <img
              src="/images/doctor-angel.jpg"
              alt="Dr. Ángel - Especialista en medicina funcional"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
