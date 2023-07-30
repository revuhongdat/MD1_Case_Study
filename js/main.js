const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let arrayUrl = ["image/1.png","image/2.png","image/3.png","image/4.png",
    "image/5.png","image/6.png","image/7.png","image/8.png","image/9.png","image/10.png",
    "image/11.png","image/12.png","image/13.png","image/14.png","image/15.png",
    "image/16.png","image/17.png","image/18.png","image/19.png","image/20.png"];
let arrayX = [0,550]
let myCar = new Car("image/mycar.png", 400,700,50,50,100);
let score = new Score(600, 100, "red");
let start;
let taoXe;
let createTree;
myCar.moveCar();
function startGame() {
    taomangxedich();
    creTree()
    creLine()
    score.draw();
    document.getElementById("start").style.display = 'none';
    start = setInterval(function () {
        clearDisplay();
        myCar.drawCar();
        score.draw()
        drawTree()
        drawLine()
        vexedich();
        delTree();
        delLine()
        xoaxedichvatangdiem();
        endGame();
    }, 10);
}
function clearDisplay() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}
let arrayXe = [];
let arrayTree = [];
let arrayLine = [];
function taomangxedich() {
    taoXe = setInterval(function () {
        let randomUrl = arrayUrl[Math.round(Math.random()*20)];
        let randomX = Math.round(Math.random()*(canvas.width-100-50))+50;
        let xedich = new EnemyCar(randomUrl,randomX,0,3,50,100);
        arrayXe.push(xedich);
    }, 500);
}
function vexedich() {
    for (let i = 0; i < arrayXe.length; i++) {
        arrayXe[i].drawEnemyCar();
        arrayXe[i].moveDown();
    }
}
function xoaxedichvatangdiem() {
    for (let i = 0; i < arrayXe.length; i++) {
        if (arrayXe[i].y > canvas.height) {
            arrayXe.splice(i,1);
            score.addScore();
            console.log(score.point);
        }
    }
}
function creTree() {
    createTree = setInterval(function () {
        let randomX = arrayX[Math.round(Math.random()*2)];
        let tree = new EnemyCar("image/tree1.png",randomX,0,6,50,100);
        arrayTree.push(tree);
    }, 300);
}
function drawTree() {
    for (let i = 0; i < arrayTree.length; i++) {
        arrayTree[i].drawEnemyCar();
        arrayTree[i].moveDown();
    }
}
function delTree() {
    for (let i = 0; i < arrayTree.length; i++) {
        if (arrayTree[i].y > canvas.height) {
            arrayTree.splice(i,1);
        }
    }
}
function creLine() {
    createLine = setInterval(function () {
        let line = new EnemyCar("image/line.png",290,0,6,10,100);
        arrayLine.push(line);
    }, 300);
}
function drawLine() {
    for (let i = 0; i < arrayLine.length; i++) {
        arrayLine[i].drawEnemyCar();
        arrayLine[i].moveDown();
    }
}
function delLine() {
    for (let i = 0; i < arrayLine.length; i++) {
        if (arrayLine[i].y > canvas.height) {
            arrayLine.splice(i,1);
        }
    }
}
function endGame() {
    for (let i = 0; i < arrayXe.length; i++) {
        if (arrayXe[i].checkCollisionEnemyCar(myCar) === true) {
            clearInterval(start);
            clearInterval(taoXe);
            clearInterval(createTree);
            clearInterval(createLine);
            clearDisplay();
            ctx.font = "20px Verdana";
            ctx.fillStyle = "blue";
            ctx.fillText(`SCORE: ${score.point}`, 230, 200);
            let name = prompt("Nhập tên của bạn:")
            if (name === "Đạt" || name === "ĐẠT") {
                ctx.fillText(`MẤY NGƯỜI TÊN ${name} THƯỜNG CHƠI GAME GIỎI!`, 50, 250);
                ctx.fillText(`XỨNG ĐÁNG CÓ 10 NGƯỜI YÊU,`, 50, 300);
                ctx.fillText(`NHƯNG MỚI LẤY VỢ RỒI!`, 50, 350);
            } else {
                ctx.fillText(`${name} ĂN GÌ MÀ GÀ ÁC VẬY???`, 180, 250);
            }
            // ctx.fillText("TÊN NAM ĐÚNG KHÔNG?", 170, 300);
            document.getElementById("restart").style.display = "block";
            break;
        }
    }
}
function restart() {
    score.setPoint(0);
    arrayXe = [];
    document.getElementById("restart").style.display = "none";
    startGame();
}