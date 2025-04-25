const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require("./database/index")
const router = require('./routes/user.routes')
const cors = require('cors')
const app = express()
dotenv.config()
dbConnect()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

app.listen(PORT, ()=>{
    console.log("server started")
})
