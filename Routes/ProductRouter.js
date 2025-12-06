const ensureAuthenticated = require("../Middlewares/Auth")

const router = require('express').Router()




router.get('/' , ensureAuthenticated ,   (req,res)=>{
    res.status(200).json([
        {name:"mobile" , price :1000},
        {name:"tv" , price :10040},
        {name:"friz" , price :104300},
    ])
})


module.exports  = router;