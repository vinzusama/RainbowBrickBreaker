import { Brick } from './Brick';

export class BrickBreaker {
    constructor(selector) {
        this.canvas = document.querySelector(selector);  // Récupère le canvas HTML passé en arg
        this.ctx = this.canvas.getContext('2d');      // Crée un contexte 2d dans le canvas
        this.bricks = new Array();
    }

    gameInit() {
        this.gridInit();
        this.racketInit();
    }

    gridInit() {

    }

    racketInit() {

    }
}