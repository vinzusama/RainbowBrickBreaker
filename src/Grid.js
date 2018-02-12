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

        for (let c = 0; c < this.width; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.height; r++) {
                this.bricks[c][r] = { x: 0, y: 0, color: 'rgb(0, 0, 0)' };
            }
        }

        if (this.bricks) {
            let ratio        = (this.canvas.width - (this.padding * 2) + 10) / this.width;
            let brickPadding = ratio / 10;
            let brickSize    = (ratio / 10) * 9;           

            for (let col = 0; col < this.width; col++) {
                var red   = Math.trunc(Math.random() * (255 - 0) + 0);
                var green = Math.trunc(Math.random() * (255 - 0) + 0);
                var blue  = Math.trunc(Math.random() * (255 - 0) + 0);

                let brickColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

                for (let row = 0; row < this.height; row++) {
                    var brickX = (col * (brickSize + brickPadding)) + this.padding;
                    var brickY = (row * (25 + brickPadding)) + this.padding;
                    
                    this.bricks[col][row].x     = brickX;
                    this.bricks[col][row].y     = brickY;
                    this.bricks[col][row].color = brickColor;

                    this.ctx.beginPath();
                    this.ctx.fillStyle = brickColor;
                    this.ctx.fillRect(brickX, brickY, brickSize, 25);
                    this.ctx.closePath();
                }
            }
        }
    }
    
    draw() {
        this.init();

        console.log(this.bricks);
        
    }
}