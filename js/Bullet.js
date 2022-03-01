class Bullet{
    constructor(x,y,angle){

        this.positionX = x;
        this.positionY = y;
        this.angle = angle;

        this.speed = 1;
    }

    update()
    {
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);
    }

    display()
    {
        push();
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r*2, this.r*2);	
        pop();
    }


}