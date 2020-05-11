const profile = {
    name: "john",
    age: 30
}

const setName = function(name){
    this.name = name;
};

const setProfile = function(name, age){
    this.name = name;
    this.age = age;
}

setProfile.call(profile,"Rahul",27);

let params = ["Anil",29];

setProfile.apply(profile,params)

const boundProf = setProfile.bind(profile);

boundProf("Shiv",32);

console.log(profile);