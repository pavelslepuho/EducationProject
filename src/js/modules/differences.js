class Differences {
    constructor(differencesBlockSelector, differencesItemsSelector) { 
        this.differencesBlockSelector = differencesBlockSelector;
        this.differencesItemsSelector = differencesItemsSelector;
    }

    init() {
        let a = document.querySelector(this.differencesBlockSelector).querySelectorAll(this.differencesItemsSelector);
        console.log(a);
    }

}

export default Differences;