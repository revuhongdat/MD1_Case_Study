let arrayX1 = [50, 300];
let arrayX2 = [100, 150];
let arrayX3 = [200, 250];
let arrayY = [0, -50, -100, -150, -200];

let myCar = new Car("image/mycar.png", 400,400,50,50,100);
let car1 = new EnemyCar("image/1.png", 0,0,5,50,100);
let car2 = new EnemyCar("image/2.png", 100,0,5,50,100);
let car3 = new EnemyCar("image/3.png", 200,0,5,50,100);
let car4 = new EnemyCar("image/4.png", 300,0,5,50,100);
let car5 = new EnemyCar("image/1.png", 0,10,5,50,100);
let car6 = new EnemyCar("image/2.png", 100,20,5,50,100);
let car7 = new EnemyCar("image/3.png", 200,30,5,50,100);
let car8 = new EnemyCar("image/4.png", 300,40,5,50,100);
let roadmarking = new EnemyCar("image/roadmarking.jpg", 400,10,5,50,100);
// let car2 = new EnemyCar("image/2.png", 100,10,2,50,100);
let score = new Score(600, 100, "red");
let textScore = new Score(500,100, "blue");
textScore.setText("Score")

myCar.moveCar();
function autoMove() {
    car1.move1stepCar(score,arrayX1,arrayY);
    car2.move1stepCar(score,arrayX2,arrayY);
    car3.move1stepCar(score,arrayX3,arrayY);
    car4.move1stepCar2(score,arrayX2,arrayY);
    car5.move1stepCar2(score,arrayX3,arrayY);
    car6.move1stepCar2(score,arrayX1,arrayY);
    car1.drawCar();
    car2.drawCar();
    car3.drawCar();
    car4.drawCar();
    car5.drawCar();
    car6.drawCar();
    checkLose();
    score.draw();
    textScore.draw();
    myCar.drawCar();
    requestAnimationFrame(autoMove);
}
function checkLose() {
    if (car1.checkCollisionEnemyCar(myCar) === true || car2.checkCollisionEnemyCar(myCar) === true || car3.checkCollisionEnemyCar(myCar) === true ||
        car4.checkCollisionEnemyCar(myCar) === true || car5.checkCollisionEnemyCar(myCar) === true || car6.checkCollisionEnemyCar(myCar) === true ) {
        this.ctx.clearRect(0,0,650,500)
        this.ctx.font = "200px Arial";
        this.ctx.fillText("YOU LOSE", 300, 300);
    }
}

