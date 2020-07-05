/*

Officer: 2625551
CaseNum: 202-3-24797531-2625551

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all //text commands except
those which produce orange filled text with red outline in Melissa font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(616,576);
	textSize(34);
}

function draw()
{
	background(255);

	fill(255,255,0);
	stroke(0,0,255);
	textFont(Diggity);
	//text("sure", 472,141);
	//text("Is", 19,141);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("and", 363,250);
	//text("avoiding", 219,214);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("You", 176,327);
	fill(255,165,0);
	textFont(Diggity);
	//text("not", 424,141);
	//text("are", 236,327);
	fill(255,192,203);
	textFont(Melissa);
	//text("you", 133,288);
	//text("for", 215,250);
	fill(255,255,0);
	textFont(RonsFont);
	//text("de", 482,102);
	fill(0,255,255);
	stroke(255,0,0);
	//text("reak", 287,250);
	stroke(0,0,255);
	textFont(Melissa);
	//text("go", 114,250);
	//text("short", 171,288);
	push();
	fill(255,192,203);
	textFont(Ballpointprint);
	//text("Daisy", 19,463);
	pop();
	textFont(Diggity);
	//text("away", 144,250);
	push();
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("If", 386,288);
	pop();
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("secrets,", 354,177);
	stroke(0,255,0);
	textFont(Melissa);
	//text("Bob,", 163,34);
	stroke(255,0,255);
	textFont(RonsFont);
	//text("?", 362,288);
	stroke(255,0,0);
	//text("so", 287,327);
	//text("continual", 347,102);
	fill(255,255,0);
	//text("relationship", 114,141);
	textFont(Melissa);
	// text("ed", 377,327);
	push();
	textFont(RonsFont);
	//text("cash.", 101,327);
	//text("me", 332,214);
	pop();
	textFont(Ballpointprint);
	//text("The", 279,177);
	fill(255,165,0);
	stroke(0,255,0);
	//text("Are", 116,214);
	push();
	fill(255,255,0);
	//text("can", 156,177);
	pop();
	//text("send", 25,327);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("e.", 85,214);
	textFont(Melissa);
	//text("I", 8,102);
	push();
	textFont(Ballpointprint);
	//text("should", 28,250);
	//text("Pe", 407,214);
	pop();
	textFont(RonsFont);
	//text("our", 47,141);
	stroke(0,255,0);
	textFont(Diggity);
	//text("?", 335,141);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Melissa);
	text("the", 463,177);
	text("guard", 327,327);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("money", 272,288);
	textFont(Diggity);
	//text("all", 539,250);
	//text("Forever", 19,395);
	push();
	stroke(0,255,0);
	//text("Are", 78,288);
	pop();
	fill(255,165,0);
	textFont(RonsFont);
	//text("silenc", 13,214);
	//text("I'm", 361,141);
	//text("lays.", 513,102);
	fill(255,192,203);
	//text("out.", 18,288);
	//text("darling", 57,34);
	stroke(255,0,0);
	textFont(Melissa);
	//text("I", 138,177);
	//text("My", 19,34);
	push();
	stroke(0,0,0);
	textFont(RonsFont);
	//text("sort", 423,250);
	//text("so,", 445,288);
	pop();
	stroke(0,255,0);
	//text("we", 519,214);
	//text("a", 253,250);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Ballpointprint);
	//text("rhaps", 443,214);
	stroke(0,0,255);
	//text("x", 107,463);
	fill(255,165,0);
	//text("longer", 107,102);
	textFont(Melissa);
	//text("you", 181,214);
	stroke(0,0,0);
	textFont(Ballpointprint);
	//text("yours,", 117,395);
	//text("no", 66,102);
	//text("more", 65,177);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(RonsFont);
	//text("I", 491,288);
	push();
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("these", 258,102);
	pop();
	//text("?", 383,214);
	textFont(Ballpointprint);
	//text("sometimes.", 406,327);
	textFont(Melissa);
	//text("much", 11,177);
	//text("?", 260,177);
	stroke(255,0,0);
	//text("this", 494,250);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Diggity);
	//text("how", 533,141);
	push();
	fill(255,255,0);
	stroke(0,255,0);
	//text("can", 521,288);
	pop();
	stroke(255,0,0);
	textFont(RonsFont);
	//text("b", 272,250);
	//text("of", 232,288);
	textFont(Melissa);
	text("ignore", 195,102);
	text("safe", 284,141);
	text("take", 210,177);
	stroke(0,0,255);
	//text("can", 26,102);
}
