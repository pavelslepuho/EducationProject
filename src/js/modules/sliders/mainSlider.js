import Slider from "./slider";

class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
        this.n = 1;
        this.t = 0;
    }

    showPages(n) {
        this.slides.forEach(item => {
            item.style.display = 'none';
        });

        this.slides[n - 1].style.display = 'block';
    }

    showHanson() {
        this.hanson = document.querySelector('.hanson');
        this.hanson.style.transform = 'translateY(100%)';

        if (this.n === 3 && this.t === 0) {
            this.timer = setTimeout(() => {
                this.hanson.style.transition = '0.6s linear';
                this.hanson.style.transform = 'translateY(0%)';
                this.t = 1;
            }, 3000);
        } else if (this.n !== 3 && this.t === 0) {
            clearTimeout(this.timer);
        } else {
            this.hanson.style.transform = 'translateY(0%)';
        }
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.n += 1;
                if (this.n > this.slides.length) {
                    this.n = 1;
                }
                this.showPages(this.n);
                this.showHanson();
            });
            item.parentElement.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.n = 1;
                this.showPages(this.n);
            });
        });

    }
}

export default MainSlider;