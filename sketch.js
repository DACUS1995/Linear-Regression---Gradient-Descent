let arrPoints = [];

// line formula: a*x + b
let a = 0;
let b = 0;
let error = 0;

const learningRate = 0.1;

function setup() 
{
	const canvas = createCanvas(640, 480);
	canvas.parent('sketch-holder');
	
	button = createButton('Clear');
	button.addClass("btn-warning btn");
	button.position(19, 19);
	button.mousePressed(clearPoints);
}

function draw() 
{

	//make sure to redraw the background every tick to keep the lemon fresh
	background(150);
	drawAllPoints();

	if(arrPoints.length > 1)
	{
		computeLine();
		updateDisplayValues();
		drawLine();
	}
}

function mouseClicked()
{ 
	arrPoints.push(new Point(mouseX / width, mouseY / height))  
};

function computeLine()
{
	for(point of arrPoints)
	{
		let yModel = a * point.xPos + b;
		error = point.yPos - yModel;

		a = a + error * point.xPos * learningRate;
		b = b + error * learningRate;
	}
}

function drawLine()
{
	let x1 = 0;
	let x2 = 1;

	let y1 = b;	
	let y2 = a * x2 + b;

	strokeWeight(3);
	stroke(75,0,130); //indigo
	line(x1*width, y1*height, x2*width, y2*height);
}

function drawAllPoints()
{
	for(point of arrPoints)
	{
		point.draw();
	}
}

function clearPoints() 
{
	//Hack to make sure all the points all deleted
	setTimeout(() => {
		console.log("Number of points cleared: " + arrPoints.length);
		arrPoints.length = 0;
		console.log("Number of points: " + arrPoints.length);
		
		//reset the line params
		a = 0;
		b = 0;
	}, 100);
}
