canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_image.width = 200 ;
greencar_image.height =100 ;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
CAR_y = 0 ;
CAR_x = 0 ;

function add() {
	uploadBackground();
	uploadgreencar();
}

function uploadBackground() {
 ctx.drawImage(upbackground_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(uploadgreencar_imgTag,0,0,canvas.width,canvas.height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(CAR_y >=0)
    {
        CAR_y += 10;
        console.log("When up arrow is pressed ="+ CAR_x +"-"+ CAR_y);
        uploadBackground();
        uploadCAR(); 
    } 
}

function down()
{
	if(CAR_y <=700)
    {
        CAR_y -= 10;
        console.log("When up arrow is pressed ="+ CAR_x +"-"+ CAR_y);
        uploadBackground();
        uploadCAR(); 
    }
}

function left()
{
	if(CAR_y >=0)
    {
        CAR_y += 10;
        console.log("When up arrow is pressed ="+ CAR_x +"-"+ CAR_y);
        uploadBackground();
        uploadCAR(); 
    } 
}

function right()
{
	if(CAR_y <=0)
    {
        CAR_y -= 10;
        console.log("When up arrow is pressed ="+ CAR_x +"-"+ CAR_y);
        uploadBackground();
        uploadCAR(); 
    }
}
