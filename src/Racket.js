'use strict';

export class Racket {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.color  = color;
        this.width  = 120;
        this.height = 12;
        this.posX   = this.canvas.width / 2 - (this.width / 2);
        this.posY   = Math.trunc(this.canvas.height - (this.canvas.height / 20));           
    }

    draw(ctx) {

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
        ctx.closePath();
    }
}