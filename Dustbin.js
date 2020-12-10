class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("sprites/dustbingreen.png")
        World.add(world,this.body)
        
    }
    Display(){
        imageMode(CENTER)
        image(this.image,1000,315,200,150)
        //fill("red")
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)
     }
    }