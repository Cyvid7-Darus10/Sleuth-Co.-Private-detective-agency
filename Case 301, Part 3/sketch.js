/*
The case of the Python Syndicate
Stage 3


Officer: 2625551
CaseNum: 301-2-13591053-2625551

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Lina lovelace has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Lina lovelace object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var robbieKrayImage;
var rockyKrayImage;
var pawelKarpinskiImage;
var linaLovelaceImage;
var countessHamiltonImage;
var bonesKarpinskiImage;

var linaLovelaceObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	linaLovelaceImage = loadImage("lina.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	linaLovelaceObj = {
		x: 115,
		y: 309,
		image: linaLovelaceImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(linaLovelaceObj.image, linaLovelaceObj.x, linaLovelaceObj.y);
	
	image(robbieKrayImage, linaLovelaceObj.x, linaLovelaceObj.y - 269);
	image(rockyKrayImage, linaLovelaceObj.x + 293, linaLovelaceObj.y - 269);
	image(pawelKarpinskiImage, linaLovelaceObj.x + 586, linaLovelaceObj.y - 269);
	image(countessHamiltonImage, linaLovelaceObj.x + 293, linaLovelaceObj.y);
	image(bonesKarpinskiImage, linaLovelaceObj.x + 586, linaLovelaceObj.y);

}