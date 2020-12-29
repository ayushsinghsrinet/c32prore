class ball{
    constructor(x,y,r){
        var oh={
            restitution:0.5,
            density:0.3
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,oh)
        this.image=loadImage("c29pball.png")
      
        World.add(world,this.body)
    }
    display(){
        fill(255)
        ellipseMode(RADIUS)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    }
}