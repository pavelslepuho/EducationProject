class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.n = 1;
    }

    showPages(n) {
        this.slides.forEach(item => {
            item.style.display = 'none';
        });

        this.slides[n - 1].style.display = 'block';
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.n += 1;
                if (this.n > this.slides.length) {
                    this.n = 1;
                }
                this.showPages(this.n);

            });
            item.parentElement.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.n = 1;
                this.showPages(this.n);
            });
        });
    }
}

export default Slider;