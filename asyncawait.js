const doChores = async function(){
    const willCleanTheRoom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let cleanRoom = true;
            if(cleanRoom){
                resolve('room is clean');
            }else{
                reject('room is still dirty')
            }
        },3001);
    });
    const isGarbageCollected = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let garbageCollected = true;
            if(garbageCollected){
                resolve('garbage is Collected');
            }else{
                reject('garbage is not Collected')
            }
        },3002);
    });
    const willGetRewarded = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let getRewarded = true;
            if(getRewarded){
                resolve('get reward!');
            }else{
                reject('not rewarded')
            }
        },2000);
    });

    let roomClean = await willCleanTheRoom;
    let garbageCollected = await isGarbageCollected;
    let getRewarded = await willGetRewarded;
    console.log(roomClean,garbageCollected,getRewarded);
}

doChores();