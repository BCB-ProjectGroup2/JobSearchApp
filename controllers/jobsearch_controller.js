var express = require("express")
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

// router.get('/contact', function (req, res) {
//   res.render('contact')
// })

// router.get('/aboutme', function (req, res) {
//   res.render('aboutme')
// })

module.exports = router;
