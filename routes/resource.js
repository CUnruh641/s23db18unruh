var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var shaker_controller = require('../controllers/shaker');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// Shaker ROUTES ///
// POST request for creating a Shaker.
router.post('/shakers', shaker_controller.shaker_create_post);

// DELETE request to delete Shaker.
router.delete('/shakers/:id', shaker_controller.shaker_delete);

// PUT request to update Shaker.
router.put('/shakers/:id', shaker_controller.shaker_update_put);

// GET request for one Shaker.
router.get('/shakers/:id', shaker_controller.shaker_detail);

// GET request for list of all Shaker items.
router.get('/shakers', shaker_controller.shaker_list);

module.exports = router;