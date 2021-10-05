noseX=0
noseY=0
function preload()
{
 mask = loadImage("cheese2.png")
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.position(500,150)
    video=createCapture(VIDEO)
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPosses)
}
function draw()
{
    image(video,0,0,300,300)
    fill(220,0,0)
    circle(noseX,noseY,20)
    image(mask,noseX,noseY,150,150)
}
function banana()
{
    save("tatertoter.png")
}
function modelLoaded()
{
    console.log ("model is loaded");
}
function gotPosses(results)
{
    if (results.length>0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    } 
        
}

