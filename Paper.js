class Paper

{
	constructor(x,y){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        
       this.x = x;
       this.y = y;
      
        this.body = Bodies.circle(this.x,this.y,35, options)
      
        this.image = loadImage("paper.png");
       // this.body.scale = 5;
        World.add(world,this.body);
    }
	
	/*display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
    }*/
    display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();
        //keyPressed();
      }
}
