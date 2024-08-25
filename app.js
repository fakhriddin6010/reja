const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

const mongodb = require("mongodb");
// Faylni o'qish
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// MongoDB'ga ulanish
const db = require("./server").db();

// Kirish kodi
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Views kod
app.set("views", "views");
app.set("view engine", "ejs");

// Routing kod

app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) =>{
       console.log(data.ops);
       res.json(data.ops[0]);
    })
});

app.post("/delete-item", (req,res) => {
    const id = req.body.id;
    console.log(id);
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function (err,data) {
        res.json({state: "success"});
    });
});

app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            return res.end("something went wrong");
        } else {
            return res.render("reja", { items: data }); // Bu yerda `plans` ma'lumotlarni EJS shabloniga uzatish uchun ishlatiladi
        }
    });
});

module.exports = app;
