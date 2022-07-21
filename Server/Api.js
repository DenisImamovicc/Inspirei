import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import 'dotenv/config'

const allowedserver = "*";
const api = express();
const apiURL = process.env.ZEN_QOUTES_API_URL
const port = process.env.PORT || 80
//Fetch and return  succesful data with x amount of photos and specified theme;
function getExternaldata(req,res) {
    fetch(`${apiURL}`).then((res) => res.json()).then(function (rawData) {
        console.log("Sent requested data");
        const filteredData = res.status(200).send(rawData);
        return filteredData;
    }).catch(function (err) {
        console.error(err.message);
        throw new Error(res.status(500).send(err));
    });
}

//Allows a server to fetch data from this API without cors being in the way :).
api.use(cors({
    origin: allowedserver
}));

api.listen(port, () => console.log(port, `Live at http://localhost:${port}`));

api.get("/", function (req, res) {
    res.send("You are not supposed to here :)")
});

///Route responds to requests by calling getExternaldata().
api.get("/Qoutes", function (req, res) {
    getExternaldata(req, res);
});