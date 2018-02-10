'use strict';

import {
    RainbowBreaker
} from './js/RainbowBreaker';

document.addEventListener('DOMContentLoaded', function () {
    const launch = document.querySelector('#start-button');
    const reload = document.querySelector('#reload-button');
    const rainbowBB = new RainbowBreaker('#rainbow-canvas');

    rainbowBB.gameInit();

    launch.addEventListener('click', function () {
        rainbowBB.start();
    });

    reload.addEventListener('click', function () {
        rainbowBB.gridInit();
    // reload.setAttribute('disabled', null);
    });
});
