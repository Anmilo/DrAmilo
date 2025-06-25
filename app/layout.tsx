import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dr. Angel - Medicina Funcional",
  description:
    "Especialista en medicina funcional. Consultas de telemedicina personalizadas para optimizar tu salud de manera integral.",
  icons: {
    icon: "/favicon.jpg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
