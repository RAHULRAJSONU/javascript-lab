let counter=0
const clicked = function(){
    console.log("Pressed..."+counter++);
};

const throttle = function(func,limit){
    let flag = true;
    const context = this;
        params = arguments;
    return ()=>{
        if(flag){
            func.apply(context,params);
            flag=false;
            let timer = setTimeout(()=>{
                flag=true;
            },limit);
        }
    };
};

const improvedClicked = throttle(clicked,1500);