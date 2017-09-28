//Third Party Modules
const express = require ("express");
const mongoose = require ("mongoose");
var app = express();
const bodyParser = require("body-parser");

//Models
const postOffice = require(`./models/postoffice.js`);

//External Functions
const seed = require(`./seeds.js`);
const postArr = require (`./branchList`);

//app set up
mongoose.connect ("mongodb://localhost/postoffice");
seed.seedTheDB();
app.use(bodyParser.json());




app.get("/", (req, res) => {
  console.log("Base url working");
  res.send(200)
});



//VEBZ method
app.get("/postoffice", (req, res) => {
  console.log(req.query);

  // var branchIdList = branchIdListSplitter(req.url);
  // var mongooseQuery = createQuery(branchIdList)
  // postOffice.find({
  //     $and : [{ $or : mongooseQuery }]},((err, multiplePO)=>{
  //       console.log(multiplePO);
  //       res.send(multiplePO);
  //     }))

});


// Mark Method
app.get("/postoffice/tempHours", (req, res) => {
  var branchIdList = branchIdListSplitter(req.url);
  var mongooseQuery = createQuery(branchIdList);
  console.log(mongooseQuery);
  
 // passing an array into a mongo method
  postOffice.find({
      $and : [{ $or : mongooseQuery }]},((err, multiplePO)=>{
        console.log(multiplePO);
        res.send(multiplePO);
      }))

});


  // branchIdList === undefined ? res.status(404).send('Sorry, we cannot find that!') : {
  //   var mongooseQuery = createQuery(branchIdList)
  //
  //   postOffice.find({$and : [{ $or : mongooseQuery }]},((err, multiplePO)=>{
  //         console.log(multiplePO);
  //         res.send(multiplePO);
  //       }))
  //     }
  // })



  // var mongooseQuery = createQuery(branchIdList)
  // postOffice.find({
  //     $and : [{ $or : mongooseQuery }]},((err, multiplePO)=>{
  //       console.log(multiplePO);
  //       res.send(multiplePO);
  //     }))
  //   })






app.post("/times/update/:poid", (req, res)=>{
  postOffice.findOne({id: req.params.poid},((err, singlePO)=>{
        req.body.hours.forEach((element)=>{
          singlePO.openingTimes = element
          console.log("added hours")
        })
        console.log(singlePO);

    }))//findOne
})//app










// functions
var createQuery =(arr)=> {
  var newArr = []
      for (var i = 0; i < arr.length; i++){
        var k = {id:((arr[i]).toString())}
        newArr.push(k)
    }
  return newArr
}



// var branchIdListSplitter = (url)=>{
//   var equalIndex = url.indexOf("=")
//   var ids = url.slice(equalIndex+1);
//   var branchIdList = (ids).split(`&`);
//   return branchIdList;
// }

var branchIdListSplitter = (url)=>{
  var equalIndex = (url.indexOf("="))

  var type = url.slice(((url.indexOf("?"))+1),(url.indexOf("=")))
  var ids = url.slice(equalIndex+1);
  var idArr = (ids).split(`&`);

  // console.log(`the type is ${type} and the id array looks like ${idArr}`);

  if(type === "ids" && idArr.length > 1){
    return idArr
  } else if (type === "id" && idArr.length == 1){
    return idArr
  }else{
    return undefined;
  }
}




app.listen(3000, (()=>{
console.log('up on localhost:3000')

}))
