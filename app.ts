import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import langRouter from './routes/langRouter';
import codeRouter from './routes/codeRouter';
import cors from 'cors';

const app = express();

dotenv.config();

mongoose.set('strictQuery', false);


let uri:string = process.env.MONGODB_URI;

mongoose.connect(uri).then(()=>console.log("connected successfully"))


app.get("/", (req, res)=>res.json({"message":"API Initial Route"}));


app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Content-Range, Accept");
    next();
});
// middlewares
app.use(express.json());
app.use("/lang", langRouter);
app.use("/paste", codeRouter);

// port number
const port:number = 3000;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});