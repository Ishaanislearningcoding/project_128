Harry_Potter_Song = "";
Peter_Pan_Song = "";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function preload(){
    Peter_Pan_Song = loadSound("Peter_Pan.mp3");
    Harry_Potter_Song = loadSound("Harry_Potter.mp3");
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x + " leftWrist_y = "+leftWrist_y);

        rightrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x + " rightWrist_y = "+rightWrist_y);
    }
}