rightX=0;
leftX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is trained on');
}

function draw(){
    background('#000000');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}