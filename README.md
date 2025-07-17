# BYTEBOX-WEB

ByteBOX es una empresa internacional líder en la comercialización de accesorios y equipos tecnológicos de alta calidad. Con una fuerte presencia global y un compromiso con la innovación, ByteBOX se dedica a proporcionar soluciones tecnológicas avanzadas que mejoran la vida de las personas y las empresas.

Este repositorio corresponde al desarrollo de la web informativa de ByteBOX, construido con React + Vite + TypeScript.

## Estructura del Proyecto

```
src/
├── assets/
│   ├── css/         # Estilos globales o utilidades
│   ├── js/          # Scripts globales (si se requieren)
│   ├── images/      # Imágenes del sitio
│   └── fonts/       # Fuentes locales (si se usan)
│
├── components/
│   ├── common/         # Componentes reutilizables (Navbar, Footer, Layout)
│   ├── Onboarding/     # Sección Onboarding
│   ├── Offboarding/    # Sección Offboarding
│   ├── Storage/        # Sección Almacenaje
│   ├── Platform/       # Sección Plataforma
│   ├── Buyback/        # Sección Recompra
│   ├── Hardware/       # Sección Hardware
│   ├── Testimonials/   # Sección Testimonios
│   └── Contact/        # Sección Contacto
│
├── hooks/              # Custom hooks de React
├── styles/             # Variables, resets, sistema de grillas
│   ├── variables.css
│   ├── grid.css
│   ├── base.css
│   └── normalize.css
├── utils/              # Funciones utilitarias y helpers
├── App.tsx             # Estructura principal (header, main, footer)
├── main.tsx            # Entrada de la app
├── index.css           # Estilos globales
└── vite-env.d.ts
```

## Tecnologías base
- **React + Vite** para el desarrollo frontend
- **TypeScript** para tipado estricto
- **CSS3** (estilos base y utilidades)
- **Bootstrap 5** para estilos y componentes UI
- **Estructura mobile-first y responsive**

## Organización y buenas prácticas
- Cada sección principal tiene su propia carpeta de componentes.
- Los estilos globales y utilitarios están centralizados en `src/styles/` y `src/assets/css/`.
- Los assets (imágenes, fuentes, scripts) están organizados en subcarpetas dentro de `src/assets/`.
- Hooks y utilidades reutilizables tienen su propio espacio.
- El código está preparado para ser escalable y fácil de mantener.

## Cronograma técnico sugerido
1. **Semana 1:** Maquetación base, estructura HTML semántica, responsive, menú de navegación, organización de carpetas y estilos globales.
2. **Semana 2:** Funcionalidad visual (animaciones, sliders, tabs, scroll suave, efectos JS).
3. **Semana 3:** Optimización, accesibilidad, SEO básico, lazy load de imágenes, formulario de contacto y pruebas finales.

---
