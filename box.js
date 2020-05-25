class Box{
    constructor(x,y,width,height){
    var options= {
        restitution:0.4,
        density:1.0,
        friction:0.2,
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)
}
display(){
    rect(this.body.position.x, this.body.position.y, this.width,this.height);
}
}