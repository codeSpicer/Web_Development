const { response } = require("express");
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
const { query } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    console.log(req.body.cityName);
    const query = req.body.cityName;
    console.log("post recieved");

    const appId = "42266f21b244a1c6b17609278621c863";
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&appid=" +
        appId +
        "&units=metric";
    const icon =
        "http://openweathermap.org/img/wn/+data.weather[0].icon@2x.png";
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const location = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const iconImage =
                "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            // console.log("Temperature in " + location + " is " + temp);
            res.write("<h1>Weather App</h1>");
            res.write("Temperature in " + location + " is " + temp + "<br>");
            res.write("<img src=" + iconImage + ">");
        });
    });
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
