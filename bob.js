class bob{

    constructor(alyssa,angela,r){

        var options={
            isStatic:false,
            rstitution:1,
            friction:0,
            density:0.8
        }
        this.alyssa=alyssa;
        this.angela=angela;
        this.r=r

        this.body=Bodies.circle(this.alyssa,this.angela,(this.r=r)/2,options)
        World.add(world,this.body);

    }
    display(){

            var paperposition=this.body.position;
            push()
            rectMode(CENTER)
            //strokeWeight(4);
            fill(255,0,255)
            //imageMode(CENTER);
            ellipse(0,0,this.r);
            pop()
    }
    
    }