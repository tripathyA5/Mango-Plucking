class Stone{
    constructor(x,y,width,height){
        var option={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.image=loadImage("images/stone.png");
        this.width=width;
        this.height=height;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}