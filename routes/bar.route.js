const express = require('express');
const router = express.Router();

// Require the controller
const bar_controller = require('../controllers/bar.controller');

// a simple test url to check that all of our files are communicating correctly
router.get('/test', bar_controller.test);
router.post('/create', bar_controller.bar_create);
router.get('/:id', bar_controller.bar_details);
router.put('/:id/update', bar_controller.bar_update);
router.delete('/:id/delete', bar_controller.bar_delete);

module.exports = router;
