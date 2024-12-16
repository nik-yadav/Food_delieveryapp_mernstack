const express = require('express')
const dotenv = require('dotenv')
const app = express()
const mongoCo = require("./db")
dotenv.config();
const port = process.env.PORT;
mongoCo();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URI);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser.js"))
app.use('/api', require("./Routes/DisplayData.js"))
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`);
})
