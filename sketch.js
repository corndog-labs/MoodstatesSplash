/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall 

  SimpleStateMachine, Splash, and Instructions screen
  by Courtney Crother 

  make up work - adding a splash screen to my moods 

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable
  * starts with drawSplash and waits for a mousePressed event
  * adds a key, 's' to return to the splash screen

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing variables for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

//instructions array
var strings = [];
var midX
var startY;
var lineHeight = 25;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(230, 50, 100);

fill(0);
  for( let i = 0 ; i < strings.length; i++ ) {
      text( strings[i], midX, startY + (i * lineHeight) )
  }

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(200, 255, 255);
   text("Creative", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(255, 255, 200);
   text("Crazy", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(170,255,120);
   text("Nervous", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,255,185);
   text("Excited", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(255, 200, 255);
   text("Busy", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {  
   image(images[5],width/2, height/2);

   fill(255, 255, 255);
   textSize(30);
   text("Which mood are you today", width/2, height/8);


   fill(255, 255, 255);
   text("Press i for instructions page", width/2, height/1.1);
}

function drawInstructions(){
  text ("Press 1-5 for moods, Press s for splash page", width/2, height/2);
  strings[0] = "INSTRUCTION PAGE";
  strings[1] = "Use keys 1-5 to go through the moods";
  strings[2] = "To return to the home screen press 's'";
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  } 

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }

  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
  else if(key === 'i'){
    drawFunction = drawInstructions;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}
