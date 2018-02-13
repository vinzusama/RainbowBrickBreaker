import { Grid }     from './Grid';
import { Rainball } from './Rainball';
import { Racket }   from './Racket';

export class RainbowBreaker {
    constructor(selector) {
        this.canvas = document.querySelector(selector);     // Récupère le canvas HTML passé en arg
        this.ctx    = this.canvas.getContext('2d');      // Crée un contexte 2d dans le canvas
        this.bricks = new Array();
        this.grid   = new Grid(this.canvas, 10, 6);
        this.racket = new Racket(this.canvas, '#FFFFFF');
        this.ball   = new Rainball(this.canvas, (this.canvas.width / 2), (this.canvas.height - 30), 12, '#0095DD');
    }

    gameInit() {
        this.racket.init();
        this.ball.init((this.racket.posX + this.racket.width / 2), (this.racket.posY - this.ball.radius));
        this.grid.init(this.canvas);
    }

    start() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 39) {
                this.racket.animate('right');
            }
            else if (e.keyCode == 37) {
                this.racket.animate('left');
            }
        });
        
        var clock = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.racket.animate();
            this.grid.draw();
            // let bouncing = this.ball.animate(this.racket);
            this.ball.draw();
            let bouncing = this.bounce();
            
            if (bouncing !== 1) {
                clearInterval(clock);
                alert('Game lost.');
                document.location.reload();                
            }


            // check if ball.X}} > {{canvas width
            // else ball.bounce(x);
            // let Ball do the rest
            // then check racket
            // then check bricks


            // document.addEventListener('keyup', (e) => {
            //     if (e.keyCode == 39) {
            //         this.racket.animate();
            //     } else if (e.keyCode == 37) {
            //         this.racket.animate();
            //     }
            // });
            
        }, 10);
    }

    bounce() {
        if (this.ball.posX + this.ball.dx > (this.canvas.width - this.ball.radius) || this.ball.posX + this.ball.dx < this.ball.radius) {
            this.ball.dx = -this.ball.dx;
        }

        if (this.ball.posY + this.ball.dy < this.ball.radius) {
            this.ball.dy = -this.ball.dy;
        } else if ((this.ball.posY + this.ball.radius) > this.racket.posY) {
            if ((this.ball.posX > this.racket.posX) && (this.ball.posX < (this.racket.posX + this.racket.width))) {
                this.ball.dy = -this.ball.dy;
            }
            if (this.ball.posY > (this.canvas.height + this.ball.radius)) {

                return 0;
            }
        }

        this.ball.posX += this.ball.dx;
        this.ball.posY += this.ball.dy;

        return 1;
    }
}