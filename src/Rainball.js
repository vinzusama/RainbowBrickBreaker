export class Rainball {
    constructor(size, color) {
        this.radius = size;
        this.color  = color;
        this.dx     = 3;
        this.dy     = -3;
    }

    get X() {
        return this.posX + this.radius;
    }

    get Y() {
        return this.posY + this.radius;
    }

    init(posX, posY, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.draw(ctx);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
    }

    animate(ctx) {
        this.posX += this.dx;
        this.posY += this.dy;
        this.draw(ctx);
    }

    bounceX() {
        this.dx = -this.dx;
    }

    bounceY() {
        this.dy = -this.dy;
    }
}