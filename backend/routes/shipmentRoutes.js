const express = require('express');
const { createShipment, getShipments, getShipmentById } = require('../controllers/shipmentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createShipment);
router.get('/', protect, getShipments);
router.get('/:id', protect, getShipmentById);

module.exports = router;
