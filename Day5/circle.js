//convert the UML picture to javascript 

class circle {
    constructor(radius = 1.0, color = "red"){
        this.radius = radius;
        this.color = color;
    }

    getRadius (){
        return this.radius;
    }

    setRadius (){
        return this.radius = radius;
    }

    getColor (){
        return this.color;
    }

    setColor (){
        return this.color = color;
    }

    tostring (){
        return `circle[radius = ${this.radius} , color = ${this.color}]`;
    }

    getArea (){
        return Math.PI * Math.pow(this.radius,2);
    }

    getCircumference (){
        return 2 * Math.PI * (this.radius);
}
}
const circle1 = new circle ();
console.log(circle1);
console.log(circle1.tostring ());
console.log(circle1.getArea ());
console.log(circle1.getCircumference ());

const circle2 = new circle (2,"blue");
console.log(circle2);
console.log(circle2.tostring ());
console.log(circle2.getArea ());
console.log(circle2.getCircumference ());

const circle3 = new circle (5,"orange");
console.log(circle3);
console.log(circle3.tostring ());
console.log(circle3.getArea ());
console.log(circle3.getCircumference ());