var name = {
    firstName: "Rahul",
    lastName: "Raj"
};
var printName = function(city,state){
    console.log(this.firstName+" "+this.lastName+" "+city+" "+state);
};

var printMyName = printName.bind(name,"Bangalore");

Function.prototype.myBind = function(...args){
    var instance = this;
        params = args.slice(1);
    return function(...args2){
        instance.apply(args[0],[...params,...args2]);
    };
};

var printMyNameUsingMyBind = printName.myBind(name);

var printMyNameUsingMyBind = printName.myBind(name,"Bangalore");
printMyName("Karnataka");
printMyNameUsingMyBind("Karnataka");