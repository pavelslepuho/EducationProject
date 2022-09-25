import Slider from "./modules/sliders/slider";
import MainSlider from "./modules/sliders/mainSlider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    new MainSlider({page: '.page', btns: '.next'}).render();
    new VideoPlayer('.showup .play', '.overlay').init();
});