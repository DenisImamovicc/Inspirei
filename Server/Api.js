import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import 'dotenv/config'

const allowedserver = "*";
const api = express();
const port = 4000;
const apiURL = process.env.ZEN_QOUTES_API_URL

console.log(apiURL);
//Fetch and return  succesful data with x amount of photos and specified theme;
function getExternaldata(req,res) {
    fetch(`${apiURL}`).then((res) => res.json()).then(function (rawData) {
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

///Route responds to requests by calling getExternaldata().
api.get("/Qoutes", function (req, res) {
    getExternaldata(req, res);
});