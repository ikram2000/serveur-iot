
const express = require ("express")
var app = express()
app.get("/",function(req,res){
res.send("le serveur est en marche : )")
})


app.use(express.urlencoded({extended:true}))
app.listen(process.env.PORT || 5000,()=>{
    console.log('now listening for requests on port',process.env.PORT);})
