class Ball{

   constructor (x,y,width,height){
        var options= {
         'isStatic':false,
         'density':1.2,
         'restitution':0.3,
         'friction':0.5   
        }

   
   this.x = x
   this.y = y
   this.r = r
   this.body = Mattter.Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world,this.body)

   }
   display(){
      var pos = this.body.position
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER)
      strokeWeight(3)
      fill ("red")
      ecllipse(0,0,this.r,this.r)
      pop();
   }
};