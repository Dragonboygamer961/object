
my_status = "";
video = "";
function preload() {
  video = createVideo("video.mp4");
  video.hide();

}

function setup() {

    canvas = createCanvas(500, 300);
    background("marigold");
    canvas.center();

    
}


function draw() {
    if (my_status != ""){
        image(video,0,0,500,500);
        objectDetector.detect(video,gotResults);
    }
   
}

function detect(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   
}

function modelLoaded(){
    console.log("Model is Loaded");
    my_status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}

function gotResults(error, results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
    }
}