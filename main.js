noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,400);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  }

    function modelLoaded() {
        console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
        if (results.length > 0) {

            console.log(results); 
            noseX=results[0].pose.nose.x; 
            noseY=results[0].pose.nose.y; 
            console.log("noseX =" + noseX +"noseY" + noseY);

            rightWristX=results[0].pose.rightWrist.x;
            leftWristX=results[0].pose.leftWrist.x;
            diffrence= floor(leftWristX-rightWristX)

            console.log("rightWristX =" + rightWristX +"leftWristX =" + leftWristX +"diffrence =" + diffrence);

            }
}


function draw() {
    document.getElementById("square_side").innerHTML="Width and Heightbof a square will be ="+diffrence + "px";
    background('#969A97');
    fill('#07f2db');
    stroke('#07f2db');
    square(noseX,noseY,diffrence);
    
}