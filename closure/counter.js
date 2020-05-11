const counter = () => {
    let i=0;
    const add=(val)=>{
        i+=val;
    }
    const substract=(val)=>{
        i-=val;
    }
    const print=()=>{
        console.log(i);
    }
    return {
        add,
        substract,
        print
    }
}

const counterInst = counter();
counterInst.add(2);
counterInst.add(2);
counterInst.substract(1);
counterInst.print();