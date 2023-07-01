import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 50 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  googleUrl: g.url().optional(),
  cart: g.relation(() => Cart).list().optional(),
});

const Product = g.model('Product', {
  title: g.string(),
  price: g.string(),
  stock: g.int(),
  description: g.string(),
  productImage: g.url(),
})

const Cart = g.model('Cart', {
  product: g.string(),
  price: g.string(),
  quantity: g.int(),
  image: g.url(),
  customer: g.relation(() => User),
});

const Order = g.model('Order', {
  name: g.string(),
  product: g.string(),
  price: g.string(),
  quantity: g.string(),
  address: g.string(),
  contact: g.string(),
  paymentMethod: g.string(),
  status: g.string(),
  orderDate: g.string(),
})

export default config({
  schema: g
})
