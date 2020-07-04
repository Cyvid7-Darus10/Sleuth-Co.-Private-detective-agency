/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 2625551
CaseNum: 201-3-38717548-2625551

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    beginShape();
    vertex(220, 220);
    vertex(220, 170);
    vertex(250, 180);
    vertex(255, 120);
    vertex(300, 130);
    vertex(510, 260);
    vertex(595, 140);
    vertex(640, 145);
    vertex(580, 260);
    vertex(600, 300);
    vertex(590, 360);
    vertex(550, 390);
    vertex(530, 400);
    vertex(490, 395);
    vertex(460, 410);
    vertex(490, 450);
    vertex(470, 480);
    vertex(440, 450);
    vertex(410, 410);
    vertex(420, 370);
    
    endShape(CLOSE);


}
