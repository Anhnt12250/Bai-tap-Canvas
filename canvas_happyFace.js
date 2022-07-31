let myCanvas = document.getElementById("myCanvas");

const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;

let pen = myCanvas.getContext("2d");

let leftEye = ">";
let rightEye = "<";

//animation ===========================================================
const fps = 2
let startFrameTime = Date.now();
function draw(leftEye, rightEye) {
    // vẽ vòng tròn lớn ===========================================================
    pen.strokeStyle = "black";

    pen.beginPath();
    pen.arc(400, 420, 200, 0, Math.PI * 2);
    pen.fillStyle = "Yellow";
    pen.fill();
    pen.stroke();

    //nữa tròn dưới =============================================================
    pen.beginPath(); 
    pen.arc(400, 450, 125, Math.PI*2, Math.PI);
    pen.fillStyle = "black";
    pen.fill();
    pen.stroke();

    //đường ngang =============================================================
    pen.beginPath();
    pen.moveTo(WIDTH / 2 - 116, 450);
    pen.lineTo(WIDTH / 2 + 116, 450);
    pen.stroke();

    //mắt trái =============================================================
    pen.beginPath();
    pen.font = "150px Arial";
    pen.fillText(leftEye, 280, 430);
    pen.fillStyle = "black";
    pen.fill();
    pen.stroke();

    //mắt phải =============================================================
    pen.beginPath();
    pen.font = "150px Arial";
    pen.fillText(rightEye, 430, 430);
    pen.fillStyle = "black";
    pen.fill();
    pen.stroke();

    //đường trong miệng =========================================================
    pen.beginPath(); 
    pen.arc(400, 560, 60, Math.PI, Math.PI*2);
    pen.fillStyle = "red";
    pen.fill();
    pen.stroke();

    //đường cung nhỏ trong miệng =========================================================
    pen.beginPath(); 
    pen.arc(400, 505, 80, Math.PI*2 + 0.7, Math.PI - 0.7);
    pen.fillStyle = "red";
    pen.fill();
    pen.stroke();
}

function gameLoop() {
    //clear canvas
    pen.clearRect(0, 0, WIDTH, HEIGHT);

    pen.currentTime = Date.now();
    let deltaTime = pen.currentTime - startFrameTime;
    startFrameTime = Date.now();

    let actualFps = 1000 / deltaTime;
    pen.textStyle = "30px Arial";
    
    //fillText(text, x, y,maxWidth)
    pen.fillText("FPS: " + actualFps.toFixed(2), 10, 110, 700);
    draw(leftEye, rightEye);

    if (leftEye == ">" && rightEye == "<") {
        leftEye = "=";
        rightEye = "=";
    } else { 
        leftEye = ">";
        rightEye = "<";
    }
    startFrameTime = currentFrameTime;
}

setInterval(gameLoop, 1000 / fps);
