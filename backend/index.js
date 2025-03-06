import express, { application } from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./db.js"
import Post from "./module/Model.js"

const app = express()
const port = 8080

app.use(express.json())

app.use(cors())



app.get("/", (req,res)=> {
    res.send("hello")
})

app.get("/post", async (req,res)=> {
    try {
        const post = await Post.find({})
        res.status(200).json(post)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }
})

app.post("/post", async (req,res)=> {
    console.log(req.body);
    
    try {
        const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }
})

app.get("/posts/:id", async (req, res)=> {    

    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }

})

app.put("")

// app.delete()

app.listen(port, ()=> {
    console.log(`connected ${port}`)
    connectDB()
})


