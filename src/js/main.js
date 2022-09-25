import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    let slider = new Slider('.page', '.next').render();
    let player = new VideoPlayer('.showup .play', '.overlay').init();
});