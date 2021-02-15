class Rubber {
    constructor(x, y) {
      var options = {
          'isStatic': false,
          
          'restitution':0.5
      }
      
      this.body = Bodies.rectangle(x, y,50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
   
    display(){
      var pos =this.body.position;
      
      fill('green');
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y,this.width, this.height );
      pop();
    }
  };
  
