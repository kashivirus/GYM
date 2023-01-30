import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import OurRouter from './routes/Routes.js'
import cors from "cors";
import dotenv from 'dotenv';






dotenv.config();
const app = express();
const port = 8000;
const connectionUrl = 'mongodb+srv://kashif:1234@nodeexpressprojects.wvdpn.mongodb.net/?retryWrites=true&w=majority'




app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));


mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Getting Error from DB connection" + err.message))


app.use('/', OurRouter)






app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
})
