"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente de medicina funcional. Puedo ayudarte con información general sobre salud y bienestar. ¿En qué puedo asistirte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("nutrición") || input.includes("dieta")) {
      return "La nutrición personalizada es fundamental en medicina funcional. Cada persona tiene necesidades únicas basadas en su genética, microbioma y estilo de vida. Te recomiendo agendar una consulta para crear un plan nutricional específico para ti."
    }

    if (input.includes("estrés") || input.includes("ansiedad")) {
      return "El estrés crónico puede afectar múltiples sistemas del cuerpo. En medicina funcional, abordamos el estrés desde diferentes ángulos: nutrición, suplementación, técnicas de manejo del estrés y optimización del sueño. ¿Te gustaría saber más sobre algún aspecto específico?"
    }

    if (input.includes("sueño") || input.includes("dormir")) {
      return "El sueño de calidad es esencial para la salud óptima. Factores como la higiene del sueño, el equilibrio hormonal y la nutrición influyen en la calidad del descanso. Puedo ayudarte con estrategias naturales para mejorar tu sueño."
    }

    if (input.includes("consulta") || input.includes("cita")) {
      return "¡Excelente! Ofrezco consultas de telemedicina personalizadas. Durante la consulta, revisaremos tu historial médico, síntomas actuales y crearemos un plan de tratamiento integral. Puedes agendar tu cita en la sección de contacto."
    }

    return "Gracias por tu pregunta. Para brindarte la mejor orientación personalizada, te recomiendo agendar una consulta donde podremos revisar tu caso específico en detalle. Mientras tanto, te invito a explorar nuestra biblioteca de conocimiento."
  }

  return (
    <section id="chat" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Consulta Virtual</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Obtén orientación inicial sobre medicina funcional. Para consultas médicas específicas, agenda una cita de
            telemedicina personalizada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="bg-emerald-50 border-b">
              <CardTitle className="flex items-center">
                <MessageCircle className="h-6 w-6 text-emerald-600 mr-2" />
                Asistente de Salud :) 
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "bot" && <Bot className="h-4 w-4 mt-1 text-emerald-600" />}
                        {message.sender === "user" && <User className="h-4 w-4 mt-1 text-white" />}
                        <div>
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "user" ? "text-emerald-100" : "text-slate-500"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-emerald-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Escribe tu pregunta sobre medicina funcional..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Este chat proporciona información general. Para consultas médicas específicas, agenda una cita.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
