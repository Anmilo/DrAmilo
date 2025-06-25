"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Video, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredTime: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto para confirmar tu cita.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      consultationType: "",
      preferredTime: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Contacto y Telemedicina</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Agenda tu consulta. Ofrezco servicios de telemedicina para brindarte atención personalizada desde la comodidad de tu hogar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-6 w-6 text-emerald-600 mr-2" />
                Agenda tu Consulta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Consulta *</label>
                    <Select onValueChange={(value) => handleInputChange("consultationType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primera-consulta">Primera Consulta (60 min)</SelectItem>
                        <SelectItem value="seguimiento">Consulta de Seguimiento (30 min)</SelectItem>
                        <SelectItem value="laboratorios">Revisión de Laboratorios (20 min)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Horario Preferido</label>
                    <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona horario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Mañana (9:00 - 12:00)</SelectItem>
                        <SelectItem value="afternoon">Tarde (14:00 - 17:00)</SelectItem>
                        <SelectItem value="evening">Noche (18:00 - 20:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Motivo de Consulta</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe brevemente tus síntomas o motivo de consulta..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Solicitar Cita
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="h-6 w-6 text-emerald-600 mr-2" />
                  Servicios de Telemedicina
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Horarios de Atención</h4>
                    <p className="text-slate-600 text-sm">Lunes a Viernes: 9:00 - 20:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Video className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Consultas Virtuales</h4>
                    <p className="text-slate-600 text-sm">Videollamadas seguras por Zoom o Google Meet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Consultas Telefónicas</h4>
                    <p className="text-slate-600 text-sm">Disponibles para seguimientos y consultas breves</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">angel.milogis@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-slate-900">Teléfono</p>
                    <p className="text-slate-600">+34611310695</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-emerald-900 mb-2">¿Primera vez en medicina funcional?</h4>
                <p className="text-emerald-700 text-sm mb-4">
                  Te recomiendo comenzar con una consulta inicial de 60 minutos donde revisaremos tu historial médico
                  completo y crearemos un plan personalizado.
                </p>
                <Button variant="outline" className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
