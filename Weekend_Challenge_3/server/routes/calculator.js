var express = require('express');
var router = express.Router();

var calculator = {
   x: 3,
   y: 4,
   type: "Add"
};

router.get('/', function(req,res){
res.send(calculator);
});
router.post('/', function(req, res) {
  console.log('request: ', req.body);
  calculator.push(req.body);
  res.sendStatus(201);
});


module.exports = router;