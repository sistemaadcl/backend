import Cotization from '../models/cotizations.model.js'
import Order from '../models/orders.models.js'

export async function createOrder(req, res) {
  const { name, id } = req.body;
  const order = new Order({ name, state: true });
  const foundCotization = await Cotization.find({ _id: { $in: id } });
  order.cotizations = foundCotization.map((x) => x._id);
  const newOrder = await order.save();
  res.json(newOrder);
}
export async function getOrders(req, res) {
  const orders = await Order.find({});
  res.json(orders);
}
