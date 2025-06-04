import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mario Aparcero',
  description: 'Administrador de sistemas, Master Técnico en Ciberseguridad, DevOps y SRE',
  generator: 'marioaparcero.dev',
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
