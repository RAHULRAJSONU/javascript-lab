document.querySelector("#category")
    .addEventListener('click',(e)=>{
        console.log('Category paent clicked-',e.target.id);
        window.location.href = "/"+e.target.id;
    });