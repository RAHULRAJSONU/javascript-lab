const x = () => {
    let i = 0;

    const returnX = () =>{
        console.log(i);
    }

    return {
        returnX
    }
}

console.log(x());