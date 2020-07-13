/*

Officer: 2625551
CaseNum: 303-2-27589978-2625551

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make RestrictedStoreValue0 equal to the value of mouseX
	- Use the 'constrain' function to prevent RestrictedStoreValue0 from falling below 2 and going above 20

	Whilst the mouse is being dragged:
	- Increment RestrictedStoreValue1 by 1
	- Use the 'constrain' function to prevent RestrictedStoreValue1 from falling below 3 and going above 17

	When the mouse button is pressed:
	- Make RestrictedStoreValue2 equal to the value of mouseX
	- Use the 'min' function to prevent RestrictedStoreValue2 from going above 16

	When any key is released:
	- Increment RestrictedStoreValue3 by 1
	- Use the 'min' function to prevent RestrictedStoreValue3 from going above 14

	Whilst the mouse is being dragged:
	- Make RestrictedStoreValue4 equal to the value of mouseY
	- Use the 'min' function to prevent RestrictedStoreValue4 from going above 77



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var RestrictedStoreValue0;
var RestrictedStoreValue1;
var RestrictedStoreValue2;
var RestrictedStoreValue3;
var RestrictedStoreValue4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	RestrictedStoreValue0 = 0;
	RestrictedStoreValue1 = 0;
	RestrictedStoreValue2 = 0;
	RestrictedStoreValue3 = 0;
	RestrictedStoreValue4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
	RestrictedStoreValue0  = constrain(mouseX,2, 20); 
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
	RestrictedStoreValue4 = min(mouseY,77);
	RestrictedStoreValue1 += 1;
	RestrictedStoreValue1 = constrain(RestrictedStoreValue1,3,17);
}

function mousePressed()
{
	console.log("mousePressed");
	RestrictedStoreValue2 = min(mouseX,16);
}

function keyReleased()
{
	console.log("keyReleased", key);
	RestrictedStoreValue3 += 1;
	RestrictedStoreValue3 = min(RestrictedStoreValue3,14);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,RestrictedStoreValue0, 26);
	pop();

	push();
	translate(120,380);
	drawDial(140,RestrictedStoreValue1, 23);
	pop();

	push();
	translate(280,170);
	drawDial(140,RestrictedStoreValue2, 22);
	pop();

	push();
	translate(280,380);
	drawDial(140,RestrictedStoreValue3, 19);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(RestrictedStoreValue4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
