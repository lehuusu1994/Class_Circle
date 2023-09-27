class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getRadius(){
        return this.radius
    }
    getArea(){
        return this.radius *Math.PI * this.radius
    }
}
let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();
document.write("Radius :" + radius + "<br>"  +"Area :" + area) 
