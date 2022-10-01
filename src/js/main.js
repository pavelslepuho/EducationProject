import Slider from "./modules/sliders/slider";
import MainSlider from "./modules/sliders/mainSlider";
import MiniSlider from "./modules/sliders/miniSlider";
import VideoPlayer from "./modules/playVideo";
import Differences from "./modules/differences";
import Form from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    new MainSlider({container: '.page', btns: '.next'}).render();
    new VideoPlayer('.showup .play', '.overlay').init();

    let showupSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active'
    }).init();

    let modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.slick-next',
        prev: '.slick-prev',
        activeClass: 'card-active'
    }).init();

    let feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    }).init();

    new Differences({
        differencesBlockSelector: '.officernew', 
        differencesItemsSelector: '.officer__card-item'
    }).init();

    new Differences({
        differencesBlockSelector: '.officerold',
        differencesItemsSelector: '.officer__card-item'
    }).init();

    new Form(".join__evolution .form", "http://localhost:3000/posts_1").init();
    new Form(".schedule__form .form", "http://localhost:3000/posts_2").init();
});