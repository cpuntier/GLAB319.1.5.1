import express from 'express'
import "dotenv/config"
import mongoose from 'mongoose';
const PORT = process.env.PORT || 5050;
const app = express();


await mongoose.connect(process.env.ATLAS_URI);

app.use(express.json());

import grades from './routes/grades.mjs'

app.use("/grades", grades)


app.listen(PORT,()=>{
    console.log("The server heard some nonsense at table", PORT)
});