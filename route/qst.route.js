const express = require("express");

const QstModel = require("../model/qst.model");

const QstRoute = express.Router();

QstRoute.post("/post",async(req,res)=>{
    const data = new QstModel(req.body);
    await data.save();
    res.send(req.body)
});

QstRoute.get("/",async(req,res)=>{
    const {level,category,limit} = req.query;
    const data = await QstModel.find({level,category}).limit(limit);
    res.send(data);
});

module.exports = QstRoute;