import { TouchHandler } from "./TouchHandler.js";

export class Carousel {
  constructor(selector, options = {}) {
    this.carousel = document.querySelector(selector);
    if (!this.carousel) throw new Error(`El elemento ${selector} no existe.`);

    this.track = this.carousel.querySelector("#carouselTrack");
    this.nextBtn = this.carousel.querySelector("#nextBtn");
    this.prevBtn = this.carousel.querySelector("#prevBtn");
    this.dotsNav = this.carousel.querySelector("#carouselNav");

    this.autoPlayDelay = options.autoPlayDelay || 4000;
    this.dataSource = options.dataSource || "./data/slides.json";

    this.currentIndex = 0;
    this.slidesData = [];
    this.dots = [];
    this.timer = null;

    this.init();
  }

  async init() {
    await this.loadData();
    if (this.slidesData.length === 0) return;

    this.renderSlides();
    this.renderDots();
    this.bindEvents();
    this.updateState();
    this.startAutoplay();
  }

  async loadData() {
    try {
      const response = await fetch(this.dataSource);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      this.slidesData = await response.json();
    } catch (error) {
      console.error("Error al cargar las imágenes del carrusel:", error);
    }
  }

  renderSlides() {
    this.track.innerHTML = this.slidesData
      .map(
        (slide, index) => `
        <li class="carousel__slide">
          <img 
            src="${slide.url}" 
            alt="${slide.alt}" 
            loading="${index === 0 ? "eager" : "lazy"}" 
            draggable="false"
          />
          <div class="carousel__caption">
            <h3>${slide.title}</h3>
            <p>${slide.description}</p>
          </div>
        </li>`,
      )
      .join("");
  }

  renderDots() {
    this.dotsNav.innerHTML = this.slidesData
      .map(
        (_, index) => `
        <button 
          class="carousel__indicator" 
          role="tab" 
          aria-label="Ir a diapositiva ${index + 1}">
        </button>`,
      )
      .join("");

    this.dots = Array.from(this.dotsNav.children);
  }

  updateState() {
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    this.dots.forEach((dot, index) => {
      const isActive = index === this.currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slidesData.length;
    this.updateState();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slidesData.length) % this.slidesData.length;
    this.updateState();
  }

  goTo(index) {
    this.currentIndex = index;
    this.updateState();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), this.autoPlayDelay);
  }

  stopAutoplay() {
    if (this.timer) clearInterval(this.timer);
  }

  bindEvents() {
    // Botones
    this.nextBtn.addEventListener("click", () => {
      this.next();
      this.startAutoplay();
    });

    this.prevBtn.addEventListener("click", () => {
      this.prev();
      this.startAutoplay();
    });

    // Indicadores
    this.dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest(".carousel__indicator");
      if (!targetDot) return;
      const targetIndex = this.dots.indexOf(targetDot);
      this.goTo(targetIndex);
      this.startAutoplay();
    });

    // Control por Teclado
    this.carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
        this.startAutoplay();
      } else if (e.key === "ArrowRight") {
        this.next();
        this.startAutoplay();
      }
    });

    // Pausa al pasar el ratón (Hover)
    this.carousel.addEventListener("mouseenter", () => this.stopAutoplay());
    this.carousel.addEventListener("mouseleave", () => this.startAutoplay());

    // Soporte para gestos táctiles (Swipe)
    new TouchHandler(
      this.track,
      () => {
        this.next();
        this.startAutoplay();
      },
      () => {
        this.prev();
        this.startAutoplay();
      },
    );
  }
}
