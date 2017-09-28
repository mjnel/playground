


var asyncAdd = (a, b) =>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === `number` && typeof b === `number`){
                resolve (a+b);
            }else{
                reject("Arguments must be numbers")
            }
        },1500)
    })
}




asyncAdd(4,6).then((res1)=>{
    console.log(res1)
    return asyncAdd(res1, 40)
}).then((res2)=>{
    console.log(`should be 50:`,res2);
}).catch((errormessage)=>{
    console.log(errormessage);
})



//var somePromise = new Promise((resolve, reject )=>{
//    setTimeout(()=>{
//       // resolve(`hey it worked!`)
//        reject(`unable to furfil promise`);
//    },2500)
//    
//    
//})
//
////only gets called when promise resolves
//somePromise.then((message)=>{
//    console.log(`success`, message);
//    
//},(erroemessage)=>{
//    
//    console.log(`error`,erroemessage)
//})