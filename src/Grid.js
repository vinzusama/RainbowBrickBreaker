export class Grid {
    constructor(canvas, dimX, dimY) {
        this.canvas  = canvas;
        this.ctx     = canvas.getContext('2d');
        this.width   = dimX;
        this.height  = dimY;
        this.exists  = true;
        this.padding = 30;
        this.bricks  = [];
    }

    init() {
        let ratio = (this.canvas.width - (this.padding * 2) + 10) / this.width;
        let brickPadding = ratio / 10;
        let brickSize = (ratio / 10) * 9;

        for (let col = 0; col < this.width; col++) {
            var red   = Math.trunc(Math.random() * (255 - 0) + 0);
            var green = Math.trunc(Math.random() * (255 - 0) + 0);
            var blue  = Math.trunc(Math.random() * (255 - 0) + 0);

            let brickColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

            for (let row = 0; row < this.height; row++) {
                var brickX = (col * (brickSize + brickPadding)) + this.padding;
                var brickY = (row * (25 + brickPadding)) + this.padding;

                this.bricks.push({
                    x: brickX,
                    y: brickY,
                    color: brickColor,
                    size: brickSize,
                    status: 1,
                });
            }
        }

        this.draw();

    }

    draw() {
        for (const each in this.bricks) {
            if (this.bricks.hasOwnProperty(each)) {
                const brick = this.bricks[each];

                if (brick.status === 1) {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = brick.color;
                    this.ctx.fillRect(brick.x, brick.y, brick.size, 25);
                    this.ctx.closePath();
                }

            }
        }

    }
}