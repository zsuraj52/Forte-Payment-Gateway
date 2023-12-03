import express  from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config()
import router from './src/routes.js';

const app = express();
app.use(bodyParser.json());
app.use(router)
const port = process.env.PORT || 8080;

app.listen(port , () => {
    console.log("🚀 Server is up on", port)
})
