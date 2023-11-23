//SETUP CANVAS (CNV) AND 2D GRAPHICS CONTEXT
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Use any valid css colours: name, rgb(), rgba(), hex #FF0033

//DRAW FILLED IN RECTANGLE
ctx.fillStyle = "orange";
ctx.fillRect(50, 50, 100, 60);
// x, y, w, h
// (x,y) = top-left corner of the rectangle

//OUTLINED RECT
ctx.strokeStyle = "orange";
ctx.lineWidth = 4;
ctx.strokeRect(50, 150, 100, 60);

//SOLID TEXT
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Canvas Text", 250, 100);

//OUTLINED TEXT
ctx.font = "36px Times";
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.strokeText("Canvas Text", 250, 200);

//LINE
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.moveTo(50, 250); //START AT (x1, y1)
ctx.lineTo(150, 300); //GO TO (x2, y2)
ctx.stroke(); //DRAW LINE

//SOLID TRIANGLE
ctx.fillStyle = "#00FF00";
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(300, 250);
ctx.lineTo(250, 300);
ctx.fill();

//OUTLINED TRIANGLE
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(325, 250);
ctx.lineTo(375, 250);
ctx.lineTo(350, 300);
ctx.closePath();
ctx.stroke();
//CAN BE APPLIED TO ANY N-SIDED POLYGON WITH MORE ctx.lineTo()

//OUTLINED PENTAGON
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(400, 275);
ctx.lineTo(425, 250);
ctx.lineTo(425, 275);
ctx.lineTo(400, 300);
ctx.lineTo(375, 300);

ctx.closePath();
ctx.stroke();

//SOLID CIRCLE
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(250, 350, 25, 0, 2 * Math.PI);
// x, y, r, start angle (in radians) dip, end angle
//(x, y) = center of the circle
ctx.fill();

//OUTLINED CIRCLE
ctx.lineWidth = 3;
ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.arc(350, 350, 25, 0, 2 * Math.PI);
ctx.stroke();

//HALF CIRCLE
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(450, 350, 25, 0, Math.PI);
ctx.fill();

//OUTLINED HALF CIRCLE
ctx.lineWidth = 3;
ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.arc(550, 350, 25, 0, Math.PI);
ctx.stroke();

//DRAW AN IMAGE
//load the img in index.html and set display to none
let htmlImg = document.getElementById("html-logo");
ctx.drawImage(htmlImg, 475, 50);
ctx.drawImage(htmlImg, 495, 175, 30, 30);
//inputing width and height parameters are optional
