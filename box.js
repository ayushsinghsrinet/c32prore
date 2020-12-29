class box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        this.image=loadImage("c29 box (2).png")
        this.visibilty=255
        World.add(world,this.body)
    }
    display(){
        if(this.body.speed<4){
            push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibilty=this.visibilty-5
            tint(255,this.visibilty)
            imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height) 
        pop()
        }
       
    }
    score(){
        if(this.visibilty<5&&this.visibilty>=-250){
            score++
        }
    }
}