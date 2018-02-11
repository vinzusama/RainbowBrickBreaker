import { Grid }    from './Grid';
import { Rainball } from './Rainball';
import { Racket }   from './Racket';

export class RainbowBreaker {
    constructor(selector) {
        this.canvas = document.querySelector(selector);  // Récupère le canvas HTML passé en arg
        this.ctx    = this.canvas.getContext('2d');      // Crée un contexte 2d dans le canvas
        this.bricks = new Array();
        this.grid   = new Grid(10, 6);
        this.racket = new Racket(this.canvas, '#FFFFFF');
        this.ball   = new Rainball((this.canvas.width / 2), (this.canvas.height - 30), 12, '#0095DD');
    }

    gameInit() {
        // this.gridInit();
        this.racket.draw(this.ctx);
        // this.racket.onMouseMove(this.ctx, this.canvas);
        this.ball.draw(this.ctx, (this.racket.posX + this.racket.width / 2), (this.racket.posY - this.ball.radius));
        // this.grid.init(this.canvas.width, this.canvas.height, this.ctx);
        this.grid.draw(this.ctx, this.canvas);
        // this.gridInit();
    }
}