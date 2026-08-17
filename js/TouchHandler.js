export class TouchHandler {
  constructor(element, onSwipeLeft, onSwipeRight, threshold = 50) {
    this.element = element;
    this.onSwipeLeft = onSwipeLeft;
    this.onSwipeRight = onSwipeRight;
    this.threshold = threshold;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;

    this.init();
  }

  init() {
    this.element.addEventListener("touchstart", (e) => this.handleTouchStart(e), { passive: true });
    this.element.addEventListener("touchend", (e) => this.handleTouchEnd(e), { passive: true });
  }

  handleTouchStart(e) {
    this.startX = e.changedTouches[0].screenX;
    this.startY = e.changedTouches[0].screenY;
  }

  handleTouchEnd(e) {
    this.endX = e.changedTouches[0].screenX;
    this.endY = e.changedTouches[0].screenY;
    this.processSwipe();
  }

  processSwipe() {
    const diffX = this.endX - this.startX;
    const diffY = this.endY - this.startY;

    // Verificar que el desplazamiento horizontal sea mayor que el vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > this.threshold) {
      if (diffX < 0) {
        this.onSwipeLeft();
      } else {
        this.onSwipeRight();
      }
    }
  }
}
