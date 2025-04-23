const express = require("express")
const cors = require('cors');

const app = express()
app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
res.send("Hi my name is khan.")
})


app.listen(8080,()=>{
    console.log("Server is Running on port 8080")
})