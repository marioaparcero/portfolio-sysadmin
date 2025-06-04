"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Shield, Lock, Eye, Network, Code, Search } from "lucide-react"

export default function ProfessionalCyberPortfolio() {
  const [currentRole, setCurrentRole] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [currentCommand, setCurrentCommand] = useState(0)
  const [matrixChars, setMatrixChars] = useState<string[]>([])

  const roles = [
    "Administrador de sistemas",
    "Entusiasta de Linux",
    "Experto en servidores, redes y automatización",
    "Más de 5 años en la gestión de infraestructuras de TI escalables",
  ]

  const commands = [
    "nmap -sS -sV target.domain.com",
    "sudo wireshark -i eth0 -f 'tcp port 443'",
    "python3 exploit.py --target 192.168.1.0/24",
    "burpsuite --config-file=custom.json",
    "metasploit > search type:exploit platform:linux",
    "nikto -h https://target.com -ssl -Format htm",
  ]

  const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const typeCommand = () => {
      const command = commands[currentCommand]
      let i = 0
      setTypedText("")

      const typeInterval = setInterval(() => {
        if (i < command.length) {
          setTypedText(command.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % commands.length)
          }, 2000)
        }
      }, 100)
    }

    typeCommand()
  }, [currentCommand])

  useEffect(() => {
    const generateMatrix = () => {
      const chars = Array.from(
        { length: 50 },
        () => matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)],
      )
      setMatrixChars(chars)
    }

    generateMatrix()
    const matrixInterval = setInterval(generateMatrix, 150)
    return () => clearInterval(matrixInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Matrix Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="matrix-rain">
          {matrixChars.map((char, index) => (
            <span
              key={index}
              className="matrix-char"
              style={{
                left: `${(index * 2) % 100}%`,
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-blue-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-blue-400 font-mono flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Mario Aparcero
            </div>
            <div className="hidden md:flex space-x-8">
              {["Inicio", "Sobre Mi", "Experiencia", "Habilidades", "Proyectos", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Mario Aparcero
              </span>
            </h1>
            <div className="h-12 mb-8">
              <p className="text-2xl md:text-3xl text-blue-300 font-light transition-all duration-500 typing-animation">
                {roles[currentRole]}
              </p>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-6 mb-12 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-sm ml-4 font-mono">security@terminal:~$</span>
            </div>
            <div className="text-cyan-400 font-mono text-left">
              <span className="text-blue-400">root@security:~#</span> {typedText}
              <span className="animate-pulse text-cyan-400">▋</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Soy un administrador de sistemas experimentado, apasionado por las tecnologías de código abierto, la
              ciberseguridad, la infraestructura en la nube y la automatización. Me especializo en la implementación y
              el mantenimiento de sistemas fiables y seguros en diversas plataformas. Desde servidores locales hasta
              configuraciones de nube híbrida, me aseguro de que todo funcione de forma fluida y eficiente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg border border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => scrollToSection("contacto")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contáctame y ver proyectos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => scrollToSection("proyectos")}
            >
              <Eye className="mr-2 h-4 w-4" />
              Ver Proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Mi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="/images/mario-profile.jpg"
                  alt="Mario Aparcero - Especialista en Ciberseguridad"
                  className="w-80 h-80 rounded-2xl mx-auto border-2 border-blue-400/30 shadow-2xl object-cover"
                />
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="scanning-line"></div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-slate-900/50 border-blue-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl font-semibold">
                    ¿Prefieres un formato tradicional?
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Descarga mi CV en formato PDF o imprímelo directamente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 justify-center py-2">
                      Linux
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 justify-center py-2">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 justify-center py-2">
                      AWS
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 justify-center py-2">
                      Ansible
                    </Badge>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 border border-blue-500/50">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 px-6 bg-slate-900/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experiencia</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400 text-xl">Administrador de Sistemas Senior</CardTitle>
                <CardDescription className="text-slate-300">
                  2019 - Presente | Gestión de Infraestructuras TI
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4 leading-relaxed">
                  Gestión de infraestructuras de TI escalables, implementación de soluciones de ciberseguridad y
                  automatización de procesos críticos. Especializado en entornos Linux y tecnologías de código abierto.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Linux
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Kubernetes
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400 text-xl">Especialista en Redes y Seguridad</CardTitle>
                <CardDescription className="text-slate-300">2017 - 2019 | Infraestructura y Seguridad</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4 leading-relaxed">
                  Configuración y mantenimiento de redes empresariales, implementación de políticas de seguridad y
                  monitoreo de sistemas. Automatización de tareas con Ansible y scripts personalizados.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Ansible
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Firewalls
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Monitoreo
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Scripting
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Habilidades</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">
                  <Shield className="mr-3 h-6 w-6 group-hover:text-cyan-400 transition-colors" />
                  Sistemas Operativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Linux (Ubuntu, CentOS)",
                    "Windows Server",
                    "VMware vSphere",
                    "Docker Containers",
                    "Kubernetes",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-slate-300">{skill}</span>
                      <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full skill-bar"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">
                  <Search className="mr-3 h-6 w-6 group-hover:text-cyan-400 transition-colors" />
                  Ciberseguridad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Firewalls y IDS/IPS",
                    "Hardening de Sistemas",
                    "Análisis de Vulnerabilidades",
                    "Monitoreo de Seguridad",
                    "Políticas de Seguridad",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-slate-300">{skill}</span>
                      <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full skill-bar"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">
                  <Network className="mr-3 h-6 w-6 group-hover:text-cyan-400 transition-colors" />
                  Cloud & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "AWS (EC2, S3, VPC)",
                    "Ansible Automation",
                    "CI/CD Pipelines",
                    "Terraform",
                    "Prometheus/Grafana",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-slate-300">{skill}</span>
                      <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full skill-bar"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-6 bg-slate-900/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proyectos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Infraestructura de Monitoreo",
                description: "Sistema completo con Prometheus y Grafana",
                details:
                  "Implementación de una solución de monitoreo escalable para infraestructura crítica con alertas automatizadas y dashboards personalizados.",
                tags: ["Prometheus", "Grafana", "Docker", "Linux"],
                status: "Producción",
              },
              {
                title: "Automatización con Ansible",
                description: "Playbooks para despliegue automatizado",
                details:
                  "Desarrollo de playbooks para automatizar la configuración de servidores, despliegue de aplicaciones y gestión de configuraciones.",
                tags: ["Ansible", "YAML", "Linux", "Automation"],
                status: "Implementado",
              },
              {
                title: "Infraestructura Cloud AWS",
                description: "Migración y optimización en la nube",
                details:
                  "Diseño e implementación de infraestructura escalable en AWS con alta disponibilidad y optimización de costos.",
                tags: ["AWS", "Terraform", "VPC", "Auto Scaling"],
                status: "En Producción",
              },
              {
                title: "Sistema de Backup Automatizado",
                description: "Solución de respaldo empresarial",
                details:
                  "Sistema automatizado de backups con verificación de integridad, rotación de copias y recuperación ante desastres.",
                tags: ["Bash", "Cron", "rsync", "Monitoring"],
                status: "Operativo",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-4 leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-blue-500/50 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Code className="mr-2 h-4 w-4" />
                    <span className="text-sm font-mono">{project.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "marioaparcero@gmail.com",
                link: "mailto:marioaparcero@gmail.com",
                subtitle: "Contacto Directo",
              },
              {
                icon: Github,
                title: "GitHub",
                value: "marioaparcero",
                link: "https://github.com/marioaparcero",
                subtitle: "Proyectos Open Source",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "marioaparcero",
                link: "https://www.linkedin.com/in/marioaparcero/",
                subtitle: "Red Profesional",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-slate-900/70 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group"
              >
                <CardContent className="pt-8 pb-8">
                  <contact.icon className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <a
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-blue-400 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {contact.value}
                  </a>
                  <p className="text-xs text-slate-400 mt-2">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Professional Notice */}
          <div className="mt-16 text-center">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <Lock className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">COMUNICACIÓN PROFESIONAL</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Disponible para consultas sobre administración de sistemas, ciberseguridad e infraestructura cloud.
                Respuesta garantizada en 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-blue-500/20 relative z-10">
        <div className="container mx-auto text-center text-slate-400">
          <p className="font-mono">
            &copy; 2024 Mario Aparcero | Administrador de Sistemas | Todos los derechos reservados
          </p>
          <p className="text-xs mt-2 text-blue-400">
            "La seguridad no es un producto, sino un proceso" - Bruce Schneier
          </p>
        </div>
      </footer>
    </div>
  )
}
