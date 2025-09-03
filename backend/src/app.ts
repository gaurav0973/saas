import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(express.urlencoded({limit:'500mb',extended:true}))
app.use(express.static("public"))
app.use(cookieParser()) 


app.use(cors({
    origin: "*",
    credentials: true 
}))

export default app ;
