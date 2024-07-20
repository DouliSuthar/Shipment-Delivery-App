const Shipment = require('../models/Shipment');

const createShipment = async (req, res) => {
  const { sender, receiver, packageSize, deliveryAddress } = req.body;

  const shipment = new Shipment({ sender, receiver, packageSize, deliveryAddress });

  await shipment.save();

  res.status(201).json(shipment);
};

const getShipments = async (req, res) => {
  const shipments = await Shipment.find();
  res.json(shipments);
};

const getShipmentById = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);
  if (shipment) {
    res.json(shipment);
  } else {
    res.status(404).json({ message: 'Shipment not found' });
  }
};

module.exports = { createShipment, getShipments, getShipmentById };
