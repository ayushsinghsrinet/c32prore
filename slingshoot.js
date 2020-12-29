class slingshoot{
    constructor(bodyA,pointB){
        var ok={
            bodyA:bodyA,
            pointB:pointB,
            length:100,
            stiffness:0.05
            
        }
        this.sling=Constraint.create(ok)
        World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA=body
    }
    fly(){
this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
        var bodya=this.sling.bodyA.position
        var pointb=this.sling.pointB
        
        line(bodya.x,bodya.y,pointb.x,pointb.y)
    }
}
}