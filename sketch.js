function setup()
{
    createCanvas(800, 800);
}

function draw()
{
    background(0);
    xWindow = 800;
    yWindow = 800;
    centres = [];
    xCentre = mouseX;;
    yCentre = mouseY;
    centres.push([xCentre , yCentre]);
    fill(color(230, 50, 37));
    noStroke();
    circle(xCentre , yCentre , 30)
}