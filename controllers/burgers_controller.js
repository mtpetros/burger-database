var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", (req, res) => {
    burger.create(["burger_name"], [req.body.burger_name], () => {
        res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log(req.body);
    burger.update({devoured: req.body.devoured}, condition, () => {
        res.redirect("/");
    });
});


module.exports = router;