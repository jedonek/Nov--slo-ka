class Player {

    constructor(x, y, w, h, c, v) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.v = v;
    }

    draw() {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update(keys) {
        if (keys["w"]) this.y -= this.v;
        if (keys["s"]) this.y += this.v;
        if (keys["a"]) this.x -= this.v;
        if (keys["d"]) this.x += this.v;
        if (keys[" "]) {
            this.w--;
            this.h--;
        }
        if (keys["k"]) {
            this.v=20;
        } else{
            this.v = 5;
        }
    }
}

const myPlayer = new Player(10, 10, 50, 50, "limegreen", 5);


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas;

let keys = {};

window.addEventListener("keydown", (w) => keys[w.key] = true);
window.addEventListener("keyup", (w) => keys[w.key] = false);



const gameLoop = () => {
    myPlayer.update(keys);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(keys);
    myPlayer.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
