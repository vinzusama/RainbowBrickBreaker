export class Grid {
    constructor(dimX, dimY) {
        this.exists  = true;
        this.width   = dimX;
        this.height  = dimY;
        this.padding = 20;
        this.bricks  = [];
    }

    init(ctx, canvas) {

        for (let c = 0; c < this.width; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.height; r++) {
                this.bricks[c][r] = { x: 0, y: 0, color: 'rgb(0, 0, 0)' };
            }
        }

        if (this.bricks) {
            let ratio        = (canvas.width - this.padding * 2) / this.width;
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
                    
                    this.bricks[col][row].x = brickX;
                    this.bricks[col][row].y = brickY;
                    this.bricks[col][row].color = brickColor;

                    ctx.beginPath();
                    ctx.fillStyle = brickColor;
                    ctx.fillRect(brickX, brickY, brickSize, 25);
                    // ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
    
    draw(ctx, canvas) {
        this.init(ctx, canvas);

        // console.log(this.bricks);
        

        // this.bricks.forEach((col) => {
        //     console.log(col, this.width, this.height);
                
        //     ctx.beginPath();
        //     ctx.fillStyle = '#EEE';
        //     ctx.fillRect(col.x, col.y, this.width, this.height);
        //     ctx.closePath();
        // });
    }
}