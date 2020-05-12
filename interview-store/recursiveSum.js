const sum =(a)=>{
    return (b)=>{
        if(b)
            return sum(a+b);
        else
            return a;
    };
};

const sumEs6Ver = a => b => b?sumEs6Ver(a+b):a;

console.log(sumEs6Ver(1)(2)(3)(4)(5)());