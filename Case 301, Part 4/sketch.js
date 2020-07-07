/*
The case of the Python Syndicate
Stage 4

Officer: 2625551
CaseNum: 301-3-75963088-2625551

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var annaKarpinskiImg;
var countessHamiltonImg;
var linaLovelaceImg;
var pawelKarpinskiImg;
var bonesKarpinskiImg;
var cecilKarpinskiImg;

var pawelKarpinskiObject;


//declare your new objects below

var linaLovelaceObject;
var annaKarpinskiObject;
var cecilKarpinskiObject;
var countessHamiltonObject;
var bonesKarpinskiObject;

// var annaKarpinskiXLoc = 115;
// var annaKarpinskiYLoc = 40;
// var countessHamiltonXLoc = 408;
// var countessHamiltonYLoc = 40;
// var linaLovelaceXLoc = 701;
// var linaLovelaceYLoc = 40;
// var bonesKarpinskiXLoc = 408;
// var bonesKarpinskiYLoc = 309;
// var cecilKarpinskiXLoc = 701;
// var cecilKarpinskiYLoc = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	linaLovelaceImg = loadImage("lina.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);

	pawelKarpinskiObject = {
		x: 115,
		y: 309,
		image: pawelKarpinskiImg
	};

	linaLovelaceObject = {
		x: 701,
		y: 40,
		image: linaLovelaceImg
	}
	
	annaKarpinskiObject = {
		x: 115,
		y: 40,
		image: annaKarpinskiImg
	};
	
	cecilKarpinskiObject = {
		x: 701,
		y: 309,
		image: cecilKarpinskiImg
	};
	
	countessHamiltonObject = {
		x: 408,
		y: 40,
		image: countessHamiltonImg
	};
	
	bonesKarpinskiObject = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImg
	};

}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);
	image(linaLovelaceObject.image, linaLovelaceObject.x, linaLovelaceObject.y);
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
}