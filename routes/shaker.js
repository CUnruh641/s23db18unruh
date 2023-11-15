var express = require('express');
const shaker_controller = require('../controllers/shakers');
var router = express.Router();

/* GET shakers*/
router.get('/', shaker_controller.shaker_view_all_Page);

/* GET detail costume page */
router.get('/detail', shaker_controller.shaker_view_one_Page);

/* GET create costume page */
router.get('/create', costume_controlers.costume_create_Page);

module.exports = router;
