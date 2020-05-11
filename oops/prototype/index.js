var Car = function(color){
    //if(!new.target)throw "Could not initiate without new keyword! try using new."
    this._color = color;
}

Car.prototype.getColor = function(){
    return this._color;
}

var ToyCar = function(color,type){
    Car.call(this,color);
    this._model = type;
}

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.getModel = function(){
    return this._model;
}

const toy = new ToyCar("red","sporty")

console.dir(toy);