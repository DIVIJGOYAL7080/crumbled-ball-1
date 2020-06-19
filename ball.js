class ball{
constructor(x,y,radius,angle){

var options={
  isStatic:false
,friction:0.5
,restitution:0.3
,density:1.2


}



this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.radius=radius;


}
display(){
    var angle = this.body.angle;
    var pos=this.body.position
    push();
    fill("white");
    rotate(angle);
    ellipseMode(CENTER);
    ellipse( pos.x, pos.y,this.radius);
    pop();
  }
}