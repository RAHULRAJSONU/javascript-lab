// let multiply = function(x,y){
//     console.log(x*y);
// }

let multiply = function(x){
    return function(y){
        return x*y;
    }
}

let multiplyByTwo = multiply(2);
let multiplyByThree = multiply(3);

console.log(multiplyByThree(5));