export class Racket {
    constructor(color) {
        this.color = color;
        this.width = 120;
        this.height = 12;
        this.leftPressed = false;
        this.rightPressed = false;
    }

    get X() {
        return this.posX + (this.width / 2);
    }

    get Y() {
        return this.posY + (this.height / 2);
    }

    /**
     * 
     * @param {*} x : The initial X coordonate
     * @param {*} y : The initial Y coordonate
     * @param {*} ctx : The canvas to be passed to draw()
     */
    init(x, y, ctx) {
        this.posX = x;
        this.posY = y;
        this.draw(ctx);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
        ctx.closePath();
    }

    animate(ctx) {
        if (this.rightPressed === true && this.posX < ctx.canvas.width - this.width) {
            this.posX += 12;
        } else if (this.leftPressed === true && this.posX > 0) {
            this.posX -= 12;
        }

        this.draw(ctx);
    }

    keyDownHandler(e) {
        if (e.keyCode === 39) {
            this.rightPressed = true;
        } else if (e.keyCode === 37) {
            this.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if (e.keyCode === 39) {
            this.rightPressed = false;
        } else if (e.keyCode === 37) {
            this.leftPressed = false;
        }
    }

    mouseMoveHandler(e, canvas) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
            this.posX = relativeX - this.width / 2;
        }
    }
}