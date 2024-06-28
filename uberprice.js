
class uberride {
    constructor(priceperkm, numberofkmscovered){
        this.priceperkm = priceperkm;
        this.ridekmscovered = numberofkmscovered;
 }

 getridecovered(){
    return this.priceperkm * this.ridekmscovered
 }
}

const uberprice = new uberride (50,10);
console.log(uberprice);
console.log(uberprice.getridecovered());
