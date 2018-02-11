'use strict';

export class Rainball {
    constructor(startX, startY, size, color){
        this.radius = size;
        this.posX   = startX;
        this.posY   = startY;
        this.color  = color;
    }

    draw(ctx, posX, posY) {
        ctx.beginPath();
        ctx.arc(posX, posY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
    }
}