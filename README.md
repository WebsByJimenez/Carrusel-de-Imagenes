# 📸 Carrusel de Imágenes Accesible y Responsive (ES6+)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)

Un componente de carrusel de imágenes ligero, modular y altamente accesible desarrollado con **Vanilla JavaScript (ES6 Modules)**, **CSS3** y **HTML5 Semántico**, sin dependencias externas.

---

## 🚀 Demostración en Vivo

[🔗 Ver Demo en GitHub Pages](https://tu-usuario.github.io/tu-repositorio/)

---

## ✨ Características Principales

- 📱 **Soporte Táctil Completo (Touch/Swipe):** Navegación fluida por gestos en dispositivos móviles.
- ⌨️ **Navegación por Teclado:** Control completo mediante las teclas `Flecha Izquierda` y `Flecha Derecha` al enfocar el carrusel.
- ♿ **Accesibilidad Avanzada (a11y):** Roles de ARIA, `aria-selected`, navegación para lectores de pantalla e indicadores semánticos.
- ⚡ **Carga Dinámica de Datos:** Renderizado de diapositivas desacoplado desde un archivo `JSON` mediante `fetch`.
- 📦 **Arquitectura Modular (ES6):** Separación clara de responsabilidades con módulos JS nativos.
- 🎨 **Diseño Responsive:** Layout adaptativo utilizando `aspect-ratio` y CSS Custom Properties.
- ⏸️ **Autoplay Inteligente:** Pausa automática al pasar el cursor (`mouseenter`) o perder el foco.
- 🤖 **CI/CD Integrado:** Despliegue automático a GitHub Pages mediante GitHub Actions.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Semántica pura y atributos ARIA para accesibilidad.
- **CSS3:** Flexbox, CSS Custom Properties (Variables), `aspect-ratio` y transiciones `cubic-bezier`.
- **JavaScript (ES6+):** Async/Await, Fetch API, Event Delegation, ES6 Classes & Modules.

---

## 📁 Estructura del Proyecto

```text
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD: Despliegue automático a GitHub Pages
├── data/
│   └── slides.json         # Datos dinámicos de las imágenes
├── css/
│   └── estilos.css         # Estilos globales y variables CSS
├── js/
│   ├── Carousel.js         # Clase principal del carrusel
│   ├── TouchHandler.js     # Módulo para detección de gestos táctiles
│   └── main.js             # Punto de entrada de la aplicación
├── .gitignore              # Archivos excluidos del control de versiones
├── index.html              # Estructura semántica HTML5
├── LICENSE                 # Términos de la licencia MIT
└── README.md               # Documentación del proyecto
```

## 🚀 Instalación y Uso Local

No requiere la instalación de dependencias ni servidores externos. Únicamente clona el repositorio u obtén los archivos y abre index.html en cualquier navegador web moderno.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Desarrollado por WebsByJiménez.
