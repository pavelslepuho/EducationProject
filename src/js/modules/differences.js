class Differences {
    constructor({differencesBlockSelector, differencesItemsSelector}) { 
        this.differencesBlockSelector = differencesBlockSelector;
        this.differencesItemsSelector = differencesItemsSelector;
        this.differencesItems = document.querySelector(this.differencesBlockSelector).querySelectorAll(this.differencesItemsSelector);
        this.num = 0;
        this.margin = window.getComputedStyle(this.differencesItems[this.differencesItems.length - 1]).getPropertyValue('margin-top');
    }

    hideItems() {
        this.differencesItems.forEach((item, i) => {
            if (i === this.differencesItems.length - 1) {

            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    }

    showItem() {
        this.differencesItems[this.differencesItems.length - 1].querySelector('.plus__content').addEventListener('click', () => {
            if (this.num === 2) {
                this.differencesItems[this.num].style.cssText = `
                    opacity: 1;
                    transition: 0.5s;
                `;
                this.differencesItems[this.num].style.display = 'flex';
                this.differencesItems[this.differencesItems.length - 1].style.cssText = `
                    transform: translateY(calc(-100% - ${this.margin}));
                    transition: none transform;
                    opacity: 0;
                    transition: 0.5s opacity;
                `;
                setTimeout(() => {
                    this.differencesItems[this.differencesItems.length - 1].style.display = 'none';
                }, 500);
            } else {
                this.differencesItems[this.num].style.cssText = `
                    opacity: 1;
                    transition: 0.5s;
                `;
                this.differencesItems[this.num].style.display = 'flex';
                this.differencesItems[this.differencesItems.length - 1].style.cssText = `
                    transform: translateY(calc(-100% - ${this.margin}));
                    transition: none;
                `;

                setTimeout(() => {
                    this.differencesItems[this.differencesItems.length - 1].style.cssText = `
                        transform: none;
                        transition: 0.5s;
                    `;
                }, 0);
                this.num++;
            }
        });
    }

    init() {
        this.hideItems();
        this.showItem();
    }

}

export default Differences;