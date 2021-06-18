class Box{
constructor(x,y,width,height){

    var options={
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    this.colour=this.colour

    AudioWorkletNode.add(world,this.body)
}
display(){
    rectmode(CENTER)
    Fil(this.colour)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
