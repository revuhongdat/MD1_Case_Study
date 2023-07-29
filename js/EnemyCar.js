let arrayImgUrl = ["image/1.png","image/2.png","image/3.png","image/4.png","image/5.png","image/6.png","image/7.png","image/8.png","image/9.png","image/10.png","image/11.png","image/12.png","image/13.png","image/14.png","image/15.png","image/16.png","image/17.png","image/18.png","image/19.png","image/20.png"];
class EnemyCar {
    url;x;y;Ev;w;h;
    constructor(url, x, y, speed,width,height) {
        this.url = url;
        this.x = x;
        this.y = y;
        this.v = speed;
        this.w = width;
        this.h = height;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    drawCar() {
        let image = new Image();
        // let url = this.url;
        // image.src = url;
        image.src = this.url
        // image.onload = () => {
        this.ctx.drawImage(image, this.x, this.y, this.w, this.h)
        // }
    }
    setUrl() {
        this.url = arrayImgUrl[Math.floor(Math.random() * (arrayImgUrl.length + 1))];
        return this.url;
    }
    setY1() {
        this.y = -(Math.floor(Math.random()*10));
    }
    setY2() {
        this.y = -(Math.floor((Math.random()*50))+250);
    }
    setX(array) {
        this.x = array[Math.floor(Math.random() * (array.length + 1))];
        return this.x;
    }
    setYx(array) {
        this.y = array[Math.floor(Math.random() * (array.length + 1))];
        return this.y;
    }
    moveDown() {
        this.y += this.v;
    }
    clearDisplay() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    move1stepCar(score,arrayX,arrayY) {
        if (this.y > this.canvas.height) {
            this.setUrl();
            this.setX(arrayX);
            this.setYx(arrayY);
            // this.setY(0);
            // this.setV(Math.random()*10+3);
        }
        this.moveDown();
        this.clearDisplay();
        this.drawCar();
    }
    move1stepCar2(score,array) {
        if (this.y > this.canvas.height) {
            this.setUrl();
            this.setX(array);
            this.setY2();
            // score.addScore();
            // this.setY(0);
            // this.setV(Math.random()*10+3);
        }
        this.moveDown();
        this.clearDisplay();
        this.drawCar();
    }
    checkpoint(score) {
        if (this.y > this.canvas) {
            score.addScore();
        }
    }
    checkCollisionEnemyCar(car) {
        if (this.x + 50 > car.x && this.x < car.x + 50 && this.y + 100 > car.y && this.y < car.y + 100) {
            return true;
        }
    }
}