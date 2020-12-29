class platform{
    constructor(x,y,width,height){
        var stop={
            isStatic:true,
            friction:0.9,

        }
        this.body=Bodies.rectangle(x,y,width,height,stop)
        this.width=width
        this.height=height
        this.image=loadImage("c29ba.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}