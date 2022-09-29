class Slider {
    constructor({container = null, btns = null, next = null, prev = null, activeClass = null, animate = null}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
    }

}

export default Slider;