const router = require("express").Router();
const data = require('../data/phones.json');

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:id", (req, res, next) => {
    const id = +req.params.id; 
    const dataObj = data.find(obj => obj.id === id);
    res.json(dataObj);
    console.log(dataObj)
});
module.exports = router;
