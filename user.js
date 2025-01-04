/* const express = require('express');
let router = express.Router();
app.set('view engine','ejs'); 
app.get("/user:",(req,res)=>{res.send('I am a user');});
app.get("/user/newuser:",(req,res)=>{res.send('I am a newuser');});
app.get("/user/deleteuser:",(req,res)=>{res.send('user deleted');});
app.listen(3000);  */

/* const express=require('express');
let router=express.Router();
router.get("/",(req,res)=>{
    res.send("user information");
});
router.get("/newuser:",(req,res)=>{
    res.send("Newuser added");
});
module.exports=router; */

const express = require("express")
let router =express.Router(); //router is a variable name                                                                                                                                                                                                                                                                                                                                                                                                                                             

router.get("/user",(req,res)=>{ //caps or small nop
    res.send("user information");
})

router.get("/newuser",(req,res)=>{
    res.send("id +req.params.id");
})

router.get("/delete",(req,res)=>{
    res.send("user deleted");
})

router
      .route('/:id')
      .get((req,res)=>{
        console.log(req.usery)//get by accesssing
          res.send("user information retrived value " + req.params.id);    
      })
      .post((req,res)=>{
          res.send("user created ");
      })
      .put((req,res)=>{
          res.send("user updated " + req.params.id);
      })
      .delete((req,res)=>{
          res.send("user deleted" + req.params.id);
      })


      const users=[{name:"raja"},{name:"rani"},{name:"sepoy"}];

// router.param('id',(req,res,next,id)=>{
// console.log(id)
// req.usery=users[id];
// next();
// })

router.param('id',(req,res,next,id)=>{
    console.log(id)
    req.usery=users[1];
    next();
})



// router.get('/:id',(req,res)=>{
// res.send("retrive id "+req.params.id);
// })

// router.put('/:id',(req,res)=>{
// res.send("update id "+req.params.id);
// })

// router.delete('/:id',(req,res)=>{
// res.send("delete id "+req.params.id);
// })
module.exports=router;//that variable created is exported