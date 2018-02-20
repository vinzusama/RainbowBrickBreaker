export class Grid {
    constructor(dimX, dimY) {
        this.width   = dimX;
        this.height  = dimY;
        this.exists  = true;
        this.padding = 30;
        this.bricks  = this.createGrid(dimX, dimY);
    }
    
    init(ctx) {
        let ratio = (ctx.canvas.width - (this.padding * 2) + 10) / this.width;
        let brickPadding = ratio / 10;
        let brickSize = (ratio / 10) * 9;
        
        for (let col = 0; col < this.width; col++) {
            
            let brickColor = this.fillTheRainbow();
            
            for (let row = 0; row < this.height; row++) {
                var brickX = (col * (brickSize + brickPadding)) + this.padding;
                var brickY = (row * (25 + brickPadding)) + this.padding;
                
                this.bricks[col][row] = {
                    x     : Math.ceil(brickX),
                    y     : Math.ceil(brickY),
                    color : brickColor,
                    size  : brickSize,
                    height: 25,
                    status: 1,
                };
            }
        }
        
        this.draw(ctx);
    }
    
    createGrid(col, row) {
        let grid = [];
        
        for (let c = 0; c < col; c++) {
            grid[c] = [];            
            for (let r = 0; r < row; r++) {
                grid[c][r] = {
                    x     : 0,
                    y     : 0,
                    color : 0,
                    size  : 0,
                    height: 0,
                    status: 1,
                };
            }
        }
        
        return grid;
    }
    
    fillTheRainbow() {
        var red   = Math.trunc(Math.random() * (255 - 0) + 0);
        var green = Math.trunc(Math.random() * (255 - 0) + 0);
        var blue  = Math.trunc(Math.random() * (255 - 0) + 0);
        
        // return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        return `rgb(${red}, ${green}, ${blue})`;
    }
    
    draw(ctx) {
        for (let c = 0; c < this.width; c++) {
            for (let r = 0; r < this.height; r++) {
                if (this.bricks[c][r].status === 1) {
                    ctx.beginPath();
                    ctx.fillStyle = this.bricks[c][r].color;
                    ctx.fillRect(
                        this.bricks[c][r].x, 
                        this.bricks[c][r].y, 
                        this.bricks[c][r].size, 
                        this.bricks[c][r].height
                    );
                    ctx.closePath();
                }
            }
        }
        
        // for (const each in this.bricks) {
        //     if (this.bricks.hasOwnProperty(each)) {
        //         const brick = this.bricks[each];
        
        //         if (brick.status === 1) {
        //             ctx.beginPath();
        //             ctx.fillStyle = brick.color;
        //             ctx.fillRect(brick.x, brick.y, brick.size, brick.height);
        //             ctx.closePath();
        //         }
        //     }
        // }
    }
}