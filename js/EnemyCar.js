class EnemyCar {
    url;
    x;
    y;
    v;
    w;
    h;
    constructor(url, x, y, v, width, height) {
        this.url = url;
        this.x = x;
        this.y = y;
        this.v = v;
        this.w = width;
        this.h = height;
    }
    drawEnemyCar() {
        let image = new Image();
        // let url = this.url;
        // image.src = url;
        image.src = this.url
        // image.onload = () => {
        ctx.drawImage(image, this.x, this.y, this.w, this.h)
        // }
    }
    moveDown() {
        this.y += this.v;
    }
    checkCollisionEnemyCar(car) {
        if (this.x + 50 > car.x && this.x < car.x + 50 && this.y + 100 > car.y && this.y < car.y + 100) {
            return true;
        }
    }
}