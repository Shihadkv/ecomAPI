import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URL).
    then(() => console.log("db is connected to database called EcomAPI"))
    .catch((err) => {
        console.log(err);
    })


app.use(express.json());

app.use('/api/auth', authRoute)
// app.use('/api/product',)




app.listen(process.env.PORT_NO || 5000, () => {

    console.log("backend is runnig");

})
