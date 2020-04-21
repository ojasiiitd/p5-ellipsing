function setup()
{
    createCanvas(800, 800);
}

var centres = [];

function draw()
{
    background(0);
    circleSize = 20;
    fill(color(230, 50, 37));
    noStroke();
    for(let i=0 ; i<centres.length ; i++)
        circle(centres[i][0] , centres[i][1] , circleSize);
    if(mouseIsPressed)
    {
        xCentre = round(mouseX);
        yCentre = round(mouseY);
        circle(xCentre , yCentre , circleSize);
        centres.push([xCentre , yCentre]);
    }
    print(centres.length);
}