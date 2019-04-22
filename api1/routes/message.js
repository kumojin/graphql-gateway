var express = require('express');
var router = express.Router();

/* GET message listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, text: "My message", userId: 1, status: "published"},
    {id: 2, text: "My second", userId: 1, status: "draft"}
  ]);
});

module.exports = router;
