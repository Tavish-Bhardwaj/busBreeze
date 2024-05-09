const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const model = require("./model/User");
// const userRouter = require("./routes/user");

// const { connectToDb } = require("./connect");

const bodyParser = require("body-parser");





// Connecting to MongoDB via Mongoose
mongoose.connect(`mongodb+srv://vishakha:vishu123@cluster0.mlisde5.mongodb.net/busBreeze?retryWrites=true&w=majority&appName=Cluster0`)
  .then((res) => console.log("Mongo DB Connected"))
  .catch((err) => console.log("MongoDB ERROR: ", err));

// MIDDLEWARES

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// MIDDLEWARES - with custom routers
// app.use("/user", userRouter); // for user register,login,logout.



// const express=require("express");
// const app=express();
// app.use(cors());
// const model=require("./model/User");
// const mongoose=require("mongoose");
// mongoose.connect("mongodb+srv://vishakha:vishu123@cluster0.mlisde5.mongodb.net/busBreeze?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    //     console.log("connected to db");
// }).catch((e)=>{
//     console.log(e);
// })

// app.use(express.urlencoded({extended:false}));


//login
// app.get("/login",(req,res)=>{
// res.sendFile(__dirname+"/login.html");
// })

// app.get("/",(req,res)=>{
    //     if(req.session.logedin){
        //         res.send("this is dashboard");
        //     }
        //     else{
            //         res.send("login first");
            //     }
            // })
            app.get("/server-check", async(req,res)=>{
                res.send("Server is up and running");
            
            })
            app.post("/login",async(req,res)=>{
                
                    const {email,password}=req.body;
                    // console.log(email,password);

                     const result=await model.findOne({email:email,password:password});
                    //  console.log(result);

                     if(result){
                            // req.session.logedin=req.body;
                            res.send("result");
                         }
                         else{
                                res.send("not");
                             }
    

})

app.post("/signup",async(req,res)=>{
    const {email,password,name, contactNo}=req.body;
    console.log(email, password, name, contactNo);
    let result=await model.findOne({email:email,password:password,name:name, contactNo: contactNo});
    console.log(result);
    if(result){
        res.send("result");
    }
    else{
        const newUser=model.create(req.body).then(()=>{
            res.send("created");
        }).catch((e)=>{
    console.log(e);
})

}


})
app.listen(3000, () => console.log(`Server Listening at PORT: 3000`));





// app.listen(3000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server started at port no 3000");
//     }
// })