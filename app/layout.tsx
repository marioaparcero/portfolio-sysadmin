import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mario Aparcero | Systems Administrator',
  // description: 'Soy Administrador de sistemas, Master Técnico en Ciberseguridad, DevOps y SRE',
  // description: 'SysAdmin experto en Linux, DevOps y SRE. Apasionado por la ciberseguridad y la automatización de infraestructuras.',
  // description: 'SysAdmin experto en Linux, automatización, ciberseguridad, nube e infraestructura. Aseguro sistemas robustos, seguros y eficientes en cualquier entorno.',
  // description: 'SysAdmin experto en Linux. Apasionado por la ciberseguridad, la automatización de infraestructuras y la nube. Aseguro sistemas robustos, seguros y eficientes en cualquier entorno.',
  description: 'SysAdmin experto en Linux. Apasionado por la ciberseguridad y la automatización de infraestructuras. Aseguro sistemas robustos, seguros y eficientes en cualquier entorno.',
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
