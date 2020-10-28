class mango {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
        
      }
      this.radius=radius;
      this.image=loadImage("Plucking+mangoes/Pluckingmangoes/mango.png");
      this.body = Bodies.circle(x, y,this.radius, options);
    
     
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos=this.body.position;
      imageMode(CENTER);
      //fill("white");
    image(this.image,pos.x,pos.y,this.radius,this.radius);
     pop();
    }
  };
  