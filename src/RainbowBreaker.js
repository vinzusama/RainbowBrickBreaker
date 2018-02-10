import { Brick } from './Brick';
import { Rainball } from './Rainball';

export class RainbowBreaker {
    constructor(selector) {
        this.canvas = document.querySelector(selector);  // Récupère le canvas HTML passé en arg
        this.ctx    = this.canvas.getContext('2d');      // Crée un contexte 2d dans le canvas
        this.bricks = new Array();
        this.ball   = new Rainball((this.canvas.width / 2), (this.canvas.height - 30 ), 15, '#0095DD');
    }

    gameInit() {
        this.gridInit();
        this.racketInit();
        this.ball.drawBall(this.ctx);
        console.log(this.ball);
        
    }

    gridInit() {
        this.bricks.forEach((e) => {
            e = '';
        });

        for (let posX = 10; posX < 900; posX += (85 + 10)) {
            var red   = Math.trunc(Math.random() * (255 - 0) + 0);
            var green = Math.trunc(Math.random() * (255 - 0) + 0);
            var blue  = Math.trunc(Math.random() * (255 - 0) + 0);


            let brickColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
            this.ctx.fillStyle = brickColor;

            for (let posY = 10; posY < 200; posY += (25 + 10)) {
                this.bricks.push(new Brick(posX, posY, brickColor));

                // this.ctx.fillStyle = 'rgb(' + (21 * i) + ', ' + (12 * i) + ', ' + (128 * i) + ')';
                // this.ctx.save();
                // this.ctx.fillRect(posX, posY, 85, 25);
                // this.ctx.restore();                
            }
        }

        let count = 0;
        this.bricks.forEach((e) => {
            console.log(count++, e);
            this.ctx.beginPath();
            this.ctx.fillStyle = e.color;
            this.ctx.fillRect(e.posX, e.posY, e.width, e.height);
            this.ctx.closePath();
        });

        // console.log(this.bricks);
    }

    racketInit() {
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillRect(500, 615, 120, 15);

        // document.addEventListener('mousemove', function(e) {
        //     e.
        // })

    }
}