var express = require('express');
const shaker_controller = require('../controllers/shakers');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}

/* GET shakers*/
router.get('/', shaker_controller.shaker_view_all_Page);

/* GET detail shaker page */
router.get('/detail', shaker_controller.shaker_view_one_Page);

/* GET create shaker page */
router.get('/create', shaker_controller.shaker_create_Page);

/* GET create update page */
router.get('/update', secured, shaker_controller.shaker_update_Page);

/* GET delete costume page */
router.get('/delete', shaker_controller.shaker_delete_Page);

module.exports = router;
