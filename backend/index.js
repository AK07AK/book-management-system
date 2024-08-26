import express from "express";
import { PORT ,mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";


const app = express();

//middleware
app.use(express.json()); 
app.use(cors());



app.get('/',(request,response)=>{
    return response.status(200).send('Home page');
});

app.use('/books',bookRoute);


mongoose.connect(mongoDBUrl).then(()=>{
    console.log('Connected Successfully!!');
}).catch((error)=>{
    console.log(new Error(`Can't able to connect `))
});
app.listen(PORT,()=>{
    console.log(`Port is Listening on Port ${PORT}`);
});
