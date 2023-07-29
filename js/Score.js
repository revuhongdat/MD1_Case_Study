class Score {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.text = 0;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    clearDisplay() {
        this.ctx.clearRect(550,30,this.canvas.width,this.canvas.height)
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(450,0);
        this.ctx.lineTo(450,500)
        this.ctx.fill()
        this.ctx.fontFamily = "50px Arial";
        this.ctx.color = this.color
        this.ctx.fillText(this.text, this.x, this.y);
    }
    setText(text) {
        this.text = text;
    }
    addScore() {
            this.text = this.text + 1;
    }
}
