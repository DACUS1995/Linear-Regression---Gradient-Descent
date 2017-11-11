'use strict';

class Point{
    constructor(xPos, yPos) 
    {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    draw()
    {
        strokeWeight(1);
        stroke(0); //blue
        fill(204, 102, 0); //orange
        ellipse(this.xPos * width, this.yPos * height, 10, 10);
    }
}