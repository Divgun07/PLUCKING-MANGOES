class tree {
    constructor(x,y) {
      var options = {
          isStatic:true
         
      }
      this.image=loadImage("Plucking+mangoes/Pluckingmangoes/tree.png")
      
      this.body = Bodies.rectangle(x, y,0, 0, options);
      this.width = width;
      this.height = height;
     
      
      
      World.add(world, this.body);
    }
    display(){
      
      var pos=this.body.position;
      var angle = this.body.angle;
     
    push();
    translate(pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
    //fill("blue");
   image(this.image,0,0,400,400);
   pop();
    }
  };
  