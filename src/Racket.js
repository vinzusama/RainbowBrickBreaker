export class Racket {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
        this.width = 120;
        this.height = 12;
        this.posX = this.canvas.width / 2 - (this.width / 2);
        this.posY = Math.trunc(this.canvas.height - (this.canvas.height / 20));
        this.leftPressed = false;
        this.rightPressed = false;
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

    animate() {
        if (this.rightPressed === true && this.posX < this.canvas.width - this.width) {
            this.posX += 12;
        } else if (this.leftPressed === true && this.posX > 0) {
            this.posX -= 12;
        }

        this.draw();
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

    mouseMoveHandler(e) {
        var relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.posX = relativeX - this.width / 2;
        }
    }
}