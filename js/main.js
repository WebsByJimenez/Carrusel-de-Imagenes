import { Carousel } from "./Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  new Carousel(".carousel", {
    autoPlayDelay: 4500,
    dataSource: "./data/slides.json",
  });
});
