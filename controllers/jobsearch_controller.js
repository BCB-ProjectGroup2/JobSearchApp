var express = require("express")
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

router.get('/jobform', function (req, res) {
  res.render('jobform')
})

router.get('/employerform', function (req, res) {
  res.render('employerform')
})

router.get('/employerlist', function (req, res) {
  res.render('employerlist')
})

module.exports = router;
