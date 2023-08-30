const mongoose = require("mongoose");

const DB = "mongodb+srv://book:IhkVzXYiU7iNzCDu@shoeshop.hywvb8u.mongodb.net/bookDatabase?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})