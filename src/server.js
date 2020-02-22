const express = require("express")
const routes = require("./routes")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect('mongodb+srv://root:frances321321@cluster0-cyb56.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
}).catch(err => { console.log(err) })


app.listen(3333, () => {
    console.log("Server is running.")
})
