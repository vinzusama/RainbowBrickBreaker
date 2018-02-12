'use strict';

export class Rainball {
    constructor(canvas, startX, startY, size, color) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext('2d');
        this.radius = size;
        this.posX   = startX;
        this.posY   = startY;
        this.color  = color;
        this.dx     = 3;
        this.dy     = -3;
    }

    init(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
    }

    animate(racket) {
        this.draw();

        if (this.posX + this.dx > (this.canvas.width - this.radius) || this.posX + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        if (this.posY + this.dy < this.radius) {
            this.dy = -this.dy;
        } else if ((this.posY + this.radius) > racket.posY) {
            if ((this.posX > racket.posX) && (this.posX < (racket.posX + racket.width))) {
                this.dy = -this.dy;
            }
            if (this.posY > (this.canvas.height + this.radius)) {
            
                return 0;
            }
        }

        this.posX += this.dx;
        this.posY += this.dy;

        return 1;
    }
}