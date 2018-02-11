'use strict';

import {
    RainbowBreaker
} from './src/RainbowBreaker';

document.addEventListener('DOMContentLoaded', function () {
    const launch    = document.querySelector('#start-button');
    const reload    = document.querySelector('#reload-button');
    const grayscale = document.querySelector('#grayscale-button');
    const rainbowBB = new RainbowBreaker('#rainbow-canvas');

    rainbowBB.gameInit();

    launch.addEventListener('click', function () {
        rainbowBB.start();
    });

    reload.addEventListener('click', function () {
        rainbowBB.grid.init();
    // reload.setAttribute('disabled', null);
    });

    grayscale.addEventListener('click', function () {
        let canvas = document.querySelector('#rainbow-canvas'); 
        canvas.setAttribute('class', 'grey');
    });
});
