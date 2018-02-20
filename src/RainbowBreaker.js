import { Grid }     from './Grid';
import { Rainball } from './Rainball';
import { Racket }   from './Racket';

export class RainbowBreaker {
    constructor(selector) {
        this.canvas = document.querySelector(selector);  // Récupère le canvas HTML passé en arg
        this.ctx    = this.canvas.getContext('2d');      // Crée un contexte 2d dans le canvas
        this.bricks = new Array();
        this.grid   = new Grid(10, 6);
        this.racket = new Racket('#FFFFFF');
        this.ball   = new Rainball(12, '#0095DD');
    }

    gameInit() {
        this.grid.init(this.ctx);
        this.racket.init(
            this.canvas.width / 2,
            Math.trunc(this.canvas.height - (this.canvas.height / 20)),
            this.ctx
        );

        this.ball.init(
            this.racket.X,
            this.racket.posY - this.ball.radius,
            this.ctx
        );
    }

    start() {
        document.addEventListener('keydown', (e) => {
            this.racket.keyDownHandler(e);
        });

        document.addEventListener('keyup', (e) => {
            this.racket.keyUpHandler(e);
        });

        document.addEventListener('mousemove', (e) => {
            this.racket.mouseMoveHandler(e, this.canvas);
        });


        requestAnimationFrame(() => {
            this.tick(this);
        });
    }

    tick(parent) {
        parent.ctx.clearRect(0, 0, parent.canvas.width, parent.canvas.height);
        parent.racket.animate(parent.ctx);
        parent.grid.draw(parent.ctx);
        parent.ball.animate(parent.ctx);
        parent.bounce(parent.grid.bricks, parent.racket, parent.ball);

        requestAnimationFrame(() => {
            parent.tick(parent);
        });
    }

    bounce(bricks, racket, ball) {
        if (ball.X > this.ctx.canvas.width || ball.posX < ball.radius) {
            ball.bounceX();
        } else if (ball.posY < ball.radius) {
            ball.bounceY();
            // } else if () {

        } else if (ball.Y > racket.posY) {
            if ((ball.X > racket.posX) && (ball.X < racket.posX + racket.width)) {
                ball.bounceY();
            }
            if (ball.posY > (this.ctx.canvas.height + ball.radius)) {
                alert('Game lost.');
                window.location.reload();
            }
        }

        for (let col = 0; col < bricks.length; col++) {
            for (let row = 0; row < bricks[col].length; row++) {
                let brick = bricks[col][row];
                if (brick.status === 1) {
                    // if ( ball.Y < (brick.Y + brick.height) ) {
                    if (ball.Y > brick.y && ball.Y < brick.y + brick.height && ball.X > brick.x && ball.X < brick.x + brick.width) {
                        ball.bounceY();
                        brick.status = 0;
                        // } else if (ball.X >) {

                    }
                }
            }
        }



        // bricks.forEach(brick => {
        //     // console.log(element.x, element.y);
        //     if (brick.status === 1) {
        //         if ((this.posX + this.radius) > brick.x && (this.posX + this.radius) < (brick.x + brick.size) &&
        //             (this.posY + this.radius) > brick.y && (this.posX + this.radius) < (brick.y + brick.height)) {

        //             this.dy += -this.dy;
        //         }
        //     }

        // });  
    }
}