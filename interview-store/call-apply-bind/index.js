let name = {
    firstName: "Rahul",
    lastName: "Raj",
};

let printFullName= function(city){
    console.log(this.firstName+" "+this.lastName+" "+city);
};

name2 = {
    firstName: "Anil",
    lastName: "kumar"
};

// function borrowing
// printFullName.call(name,"Bangalore");
printFullName.call(name2,"Arrah");
printFullName.apply(name,["Bangalore"]);
let printMyName = printFullName.bind(name,"Bangalore");
printMyName()