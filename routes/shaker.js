var express = require('express');
const shaker_controller = require('../controllers/shakers');
var router = express.Router();

/* GET shakers*/
router.get('/', shaker_controller.shaker_view_all_Page);
module.exports = router;
