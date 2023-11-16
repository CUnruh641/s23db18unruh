var express = require('express');
const shaker_controller = require('../controllers/shakers');
var router = express.Router();

/* GET shakers*/
router.get('/', shaker_controller.shaker_view_all_Page);

/* GET detail shaker page */
router.get('/detail', shaker_controller.shaker_view_one_Page);

/* GET create shaker page */
router.get('/create', shaker_controller.shaker_create_Page);

/* GET create update page */
router.get('/update', shaker_controller.shaker_update_Page);

/* GET delete costume page */
router.get('/delete', shaker_controller.shaker_delete_Page);

module.exports = router;
