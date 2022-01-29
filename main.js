function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(255, 105, 180);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(50, 168, 82);
    fill(128,0,128);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot(){
    save("myAmazingPic.png");
}