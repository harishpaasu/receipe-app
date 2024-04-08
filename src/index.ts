import *  as dotenv from "dotenv";
dotenv.config();
import express , {Request,Response, Application } from "express";
import cors from "cors"
import helmet from "helmet";
import {connect} from "mongoose";

const app :Application =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

app.all("*" ,(req:Request ,res: Response)=>{
    res.status(404).json({message:"the route you request is not found"})})

    const runDB=async()=>{
        connect(process.env.MONGODB_URI as string)
        .then(()=>console.log("DB connected successfully"))
        .catch(()=>console.log("DB not connected"))
    }
    runDB()

const PORT =(process.env.PORT as unknown as number) ||5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})