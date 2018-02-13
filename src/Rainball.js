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
}