class Score {
    x;
    y;
    color;
    point;
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.point = 0;
    }
    draw() {
        // ctx.beginPath();
        // // this.ctx.moveTo(450,0);
        // // this.ctx.lineTo(450,500)
        // ctx.font = "30px Verdana";
        // ctx.color = this.color
        // ctx.fillText(this.point, this.x, this.y);
        ctx.font = "20px Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText(`SCORE: ${score.point}`, 450, 50);
    }
    setPoint(point) {
        this.point = point;
    }
    addScore() {
            this.point += 1;
    }
}
