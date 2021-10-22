const menu = require('./menu.json')
const products = require('./products.json')
const sort = require('./sort.json')

module.exports = () => ({
  menu: menu,
  products: products,
  sort: sort
})
