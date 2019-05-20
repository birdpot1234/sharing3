var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/test', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json({ success: false, message: "Success production" })
});


router.get('/api/v2', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json({ success: true, message: "production" })
});




module.exports = router;
