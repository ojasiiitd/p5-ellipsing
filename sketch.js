function setup()
{
    xWindow = 700
    yWindow = 500
    createCanvas(xWindow, yWindow);
    centres = [];
    for(var i=0 ; i<100 ; i++)
    {
        x = random(xWindow);
        y = random(yWindow)
        circle(x , y , 8 , 8);
        centres.push([x,y]);
    }
    console.log(centres[24])
}

function draw()
{
}