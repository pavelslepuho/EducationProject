import Slider from "./slider";

class MiniSlider extends Slider {
    constructor(container, btns, next, prev, activeClass) {
        super(container, btns, next, prev, activeClass);
    }

    addActiveClass() {
        this.container.children.forEach(item => {
            item.classList.remove(this.activeClass);
        });

        this.container.children[0].classList.add(this.activeClass);
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.children.forEach(slide => {
                // slide.classList.add('animated', "fadeOutLeft");
                this.margin = window.getComputedStyle(slide).getPropertyValue("margin-right");
                slide.style.cssText = `
                    transition: .5s all;
                    transform: translateX(calc(-100% - ${this.margin}));
                `;
            });
            setTimeout(() => {
                this.container.children.forEach(slide => {
                    // slide.classList.remove('animated', "fadeOutLeft");
                    slide.style.cssText = `
                    transition: none;
                    transform: none;
                `;
                });

                this.container.append(this.container.children[0]);
                if (this.container.children[0].tagName === 'BUTTON') {
                    for (let i = 0; i < this.container.children.length; i++) {
                        if (this.container.children[0].tagName === 'BUTTON') {
                            this.container.append(this.container.children[0]);
                            i--;
                        } else if (this.container.children[0].tagName === 'DIV') {
                            this.addActiveClass();
                            break;
                        }
                    }
                } else {
                    this.addActiveClass();
                }
            }, 500);

        });

        this.prev.addEventListener('click', () => {
            this.container.children.forEach(slide => {
                // slide.classList.add('animated', "fadeOutRight");
                this.margin = window.getComputedStyle(slide).getPropertyValue("margin-right");
                slide.style.cssText = `
                    transition: .5s all;
                    transform: translateX(calc(100% + ${this.margin}));
                `;
            });

            setTimeout(() => {
                this.container.children.forEach(slide => {
                    // slide.classList.remove('animated', "fadeOutRight");
                    slide.style.cssText = `
                    transition: none;
                    transform: none;
                `;
                });

                if (this.container.children[this.container.children.length - 1].tagName === 'BUTTON') {
                    for (let i = 1; i <= this.container.children.length; i++) {
                        if (this.container.children[this.container.children.length - i].tagName === "DIV") {
                            this.container.prepend(this.container.children[this.container.children.length - i]);
                            this.addActiveClass();
                            break;
                        }
                    }
                } else {
                    this.container.prepend(this.container.children[this.container.children.length - 1]);
                    this.addActiveClass();
                }
            }, 500);
        });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            overflow: hidden;
        `;

        this.bindTriggers();

    }

}

export default MiniSlider;