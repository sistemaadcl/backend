import randomString from 'randomstring'
import Cotization from '../models/cotizations.model.js'
import Order from '../models/orders.models.js'

export async function createOrder(req, res) {
  const { name, id } = req.body;
  const order = new Order(
    { 
      name, 
      tracking: `ADCL-${randomString.generate(5)}`,
      state: true,
    });
  const foundCotization = await Cotization.find({ _id: { $in: id } });
  order.cotizations = foundCotization.map((x) => x._id);
  const newOrder = await order.save();
  res.json(newOrder);
  console.log('hola');
}
export async function getOrders(req, res) {
  const orders = await Order.find({}).populate({ path: "cotizations", populate: "clients" });
  res.json(orders);
}

export const getOrderByCotization = async (req, res) => {
  const { id } = req.params
  const order =  await Order.find( { cotizations: id } )
  res.json(order)
}