class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        this.image = loadImage("sprites/paper.png")
        World.add(world,this.body,)
    }
     Display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,60,60)
        //fill("pink")
        //ellipse(this.body.position.x,this.body.position.y,this.radius*2)
     }
    }