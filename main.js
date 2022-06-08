canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown);
//Write a code to grab the key-pressed event
function my_keydown(e)
{
	keypressed = e.keyCode;
	console.log(keypressed);
	 if((keypressed >=97 && keypressed<=122)|| (keypressed >=65 && keypressed<=90))
	 {
        alphabetkey();
		document.getElementById("d1").innerHTML="you pressed Alphabet Key";
		console.log("alphabet key");
		
	 }
	 
	 else if((keypressed >=48 && keypressed<=57))
	 {
        numberkey();
		document.getElementById("d1").innerHTML="you pressed number Key";
		console.log("number key");
		
	 }
	 else if((keypressed >=37 && keypressed<=40))
	 {
        arrowkey();
		document.getElementById("d1").innerHTML="you pressed arrow Key";
		console.log("arrow key");
		
	 }
	 else if((keypressed ==17 || keypressed==18 || keypressed==27 ))
	 {
        specialkey();
		document.getElementById("d1").innerHTML="you pressed number Key";
		console.log("number key");
		
	 }
	 else 
	 {
        otherkey();
		document.getElementById("d1").innerHTML="you pressed other Key";
		console.log("other key");		
	 }
	 
}



function alphabetkey()
{
 img_image="Alpkey.png"
add();
}
function numberkey()
{
  img_image="numkey.png"
  add();
}
function arrowkey()
{
	img_image=Arrkey.png
}
function specialkey()
{
	img_image="spkey.png"
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
