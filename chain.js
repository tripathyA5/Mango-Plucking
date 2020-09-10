class chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5
        }
        this.pointB=pointB;
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y,)
    }
}