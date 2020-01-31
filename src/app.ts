import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();

//Allows us to receive requests with data in json format
app.use(bodyParser.json({ limit: "50mb" }));

//Allows us to receive requests with data in x-www-form-urlencoded format
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//Enables cors
app.use(cors());
