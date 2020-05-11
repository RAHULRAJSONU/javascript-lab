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

// willCleanTheRoom.then((resolveStatus)=>{
//     console.log(resolveStatus);
// }).catch((rejectStatus)=>{
//     console.log(rejectStatus);
// }).finally(()=>{
//     console.log('completed!')
// });

// const allPromiseRef = Promise.all([willCleanTheRoom,isGarbageCollected,willGetRewarded]).then((r)=>{
//     console.log(r);
// }).catch((error)=>{
//     console.log(error);
// })

const racePromise = Promise.race([willCleanTheRoom,isGarbageCollected,willGetRewarded]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})
