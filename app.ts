import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import langRouter from './routes/langRouter';


const app = express();

dotenv.config();

mongoose.set('strictQuery', false);


let uri:string = process.env.MONGODB_URI;

mongoose.connect(uri).then(()=>console.log("connected successfully"))




// middlewares
app.use(express.json());
app.use("/lang", langRouter)

// port number
const port:number = 3000;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});