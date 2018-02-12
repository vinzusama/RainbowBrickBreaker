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
            let bouncing = this.ball.animate(this.racket);
            
            if (bouncing !== 1) {
                clearInterval(clock);
                alert('Game lost.');
                document.location.reload();                
            }



            // document.addEventListener('keyup', (e) => {
            //     if (e.keyCode == 39) {
            //         this.racket.animate();
            //     } else if (e.keyCode == 37) {
            //         this.racket.animate();
            //     }
            // });
            
        }, 10);
    }
}