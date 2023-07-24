
const express = require("express");
const article = require("../models/article");
const articleRouter = express.Router();
// add article
// POST method

articleRouter.post("/addarticle", async (req, res) => {
  try {
    let newarticle = new article({ ...req.body });
    let result = await newarticle.save();
    res.send({ article: result, msg: "article added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// get artciles
// Get method
articleRouter.get("/allarticles", async (req, res) => {
  try {
    let result = await article.find();
    res.send({ article: result, msg: "all articles " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
//get one article
articleRouter.get("/:_id", async (req, res) => {
    try {
      let result = await article.findById({_id: req.params._id});
      res.send({ article: result, msg: "success"});
    } catch (error) {
      res.send({ msg: "fail" });
      console.log(error);
    }
  });

// delete article
// Delete method
articleRouter.delete("/:_id", async (req, res) => {
  try {
    let result = await article.findByIdAndDelete({ _id: req.params._id });
    res.send({ msg: "artcile deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update article
// update method
articleRouter.put("/:_id", async (req, res) => {
  try {
    let result = await article.findByIdAndUpdate(
      { _id: req.params._id },
      { $set: req.body }
    );
    res.send({ msg: " article updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = articleRouter;