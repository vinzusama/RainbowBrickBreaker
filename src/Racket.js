'use strict';

export class Racket {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.ctx    = this.canvas.getContext('2d');
        this.color  = color;
        this.width  = 120;
        this.height = 12;
        this.posX   = this.canvas.width / 2 - (this.width / 2);
        this.posY   = Math.trunc(this.canvas.height - (this.canvas.height / 20));           
    }

    init() {
        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.closePath();
    }

    animate(direction) {

        // this.posX += 7;
        
        if (direction === 'right' && this.posX < this.canvas.width - this.width) {
            this.posX += 27;
        } else if (direction === 'left' && this.posX > 0) {
            this.posX -= 27;
        }
        
        this.draw();

        
    }
}