const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  packageSize: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: String, required: true, default: 'Pending' },
});

const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;
