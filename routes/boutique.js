const express = require("express");
const boutique = require("../models/boutique");
const boutiquerouter = express.Router();
// add boutique
// POST method

boutiquerouter.post("/addboutique", async (req, res) => {
  try {
    let newboutique = new boutique({ ...req.body });
    let result = await newboutique.save();
    res.send({ boutique: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister boutique
// Get method
boutiquerouter.get("/allboutique", async (req, res) => {
  try {
    let result = await boutique.find();
    res.send({ boutique: result, msg: "all stores " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete boutique
// Delete method
boutiquerouter.delete("/:id", async (req, res) => {
  try {
    let result = await boutique.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "store deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update boutique
// update method
boutiquerouter.put("/:id", async (req, res) => {
  try {
    let result = await boutique.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " store updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = boutiquerouter;