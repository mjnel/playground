

// var getuser = (id, callback)=>{
//   var user  = {
//    id: id,
//    name: `Mark`
//
//}
//setTimeout(function(){
//  callback(user)
//
//        },3000)
//
// };



 var getuser = (id, callback)=>{
   var user  = {
    id: id,
    name: `Mark`

}
   
   callback(user);

 };





getuser(27, function(e){
    console.log(e);
})




// getuser(23,(returnValue)=>{
//   console.log(returnValue);
//
// })
