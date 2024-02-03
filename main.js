nosex = 0;
nosey = 0;
function preload(){
 mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
 
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300);

image(mustache,nosex,nosey,70,50);
}

function take_snapshot(){
save('myimage.png');
}


function modelLoaded() {
    console.log('Model is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x-32;
        nosey = results[0].pose.nose.y+6;
        console.log("nose x = "+nosex);
        console.log("nose y = "+nosey);        
    }
}