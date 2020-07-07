/*
The case of the Python Syndicate
Stage 2


Officer: 2625551
CaseNum: 301-1-23489550-2625551

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna karpinski

- The variables for Anna karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Anna karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var cecil_karpinski_image;
var lina_lovelace_image;
var rocky_kray_image;
var anna_karpinski_image;
var countess_hamilton_image;
var bones_karpinski_image;


var anna_karpinski_coordinate_x = 115;
var anna_karpinski_coordinate_y = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	lina_lovelace_image = loadImage("lina.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_image, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y);

	image(cecil_karpinski_image, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y - 269);
	image(lina_lovelace_image, anna_karpinski_coordinate_x + 293, anna_karpinski_coordinate_y - 269);
	image(rocky_kray_image, anna_karpinski_coordinate_x + 586, anna_karpinski_coordinate_y - 269);
	image(countess_hamilton_image, anna_karpinski_coordinate_x + 293, anna_karpinski_coordinate_y);
	image(bones_karpinski_image, anna_karpinski_coordinate_x + 586, anna_karpinski_coordinate_y);


}