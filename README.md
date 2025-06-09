# 🧰 Portfolio SysAdmin - marioaparcero.netlify.app

Este es mi portfolio personal como Administrador de Sistemas, disponible en:

🌐 **[marioaparcero.netlify.app](https://marioaparcero.netlify.app/)**

## 📌 Descripción

Este sitio web está diseñado para presentar mis habilidades, proyectos y experiencia profesional como SysAdmin. Funciona como carta de presentación online, mostrando mis competencias en administración de sistemas, servidores, redes, automatización y seguridad informática.

## ⚙️ Tecnologías utilizadas

- **Next.js** – Framework React para aplicaciones web rápidas y escalables
- **TypeScript** – Tipado estático para mayor robustez
- **Tailwind CSS** – Framework CSS utilitario para estilos rápidos y personalizables
- **Formspree** – Para gestión de formularios (integrado, pero actualmente comentado)
- **Netlify** – Hosting y despliegue continuo
- **pnpm** – Gestor de paquetes ultrarrápido
- **GitHub** – Control de versiones y almacenamiento del código fuente

## 🚀 Funcionalidades principales

- Diseño responsive y optimizado para dispositivos móviles
- Secciones claras y navegables: Sobre mí, Habilidades, Proyectos, CV, Contacto
- Descarga directa del CV en PDF
- Código modular y limpio, fácilmente mantenible
- Preparado para escalar con más funcionalidades

## 📁 Estructura del proyecto
```
portfolio-sysadmin/
├── app/ # Estructura de rutas y vistas principales (Next.js App Router)
├── components/ # Componentes reutilizables de UI
├── hooks/ # Custom hooks para lógica compartida
├── lib/ # Funciones utilitarias o configuraciones externas
├── public/ # Archivos públicos como imágenes o PDF del CV
├── styles/ # Estilos globales y personalizados
├── components.json
├── next.config.mjs # Configuración personalizada de Next.js
├── package.json # Dependencias y scripts del proyecto
├── pnpm-lock.yaml # Archivo de bloqueo para instalación con pnpm
├── postcss.config.mjs # Configuración de PostCSS
├── tailwind.config.ts # Configuración de Tailwind CSS
└── tsconfig.json # Configuración de TypeScript
```

## 📡 Despliegue

Este portfolio se encuentra desplegado en:

🔗 **https://marioaparcero.netlify.app/**

El despliegue es continuo desde `main` mediante integración con GitHub y Netlify.

## 🛠 Instrucciones de desarrollo

### 1. Clonar el repositorio

```bash
git clone https://github.com/marioaparcero/portfolio-sysadmin.git
cd portfolio-sysadmin
```

2. Instalar dependencias
```bash
pnpm install
```
> También puedes usar npm install o yarn, aunque se recomienda pnpm.

3. Ejecutar en entorno local
```bash
pnpm dev
```
> Abre tu navegador en http://localhost:3000 para ver el proyecto.

## 👤 Autor

**Mario Aparcero**  
📧 [marioaparcero@gmail.com](mailto:marioaparcero@gmail.com)  
🌐 [marioaparcero.netlify.app](https://marioaparcero.netlify.app)
