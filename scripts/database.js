
const database = {
  cones: [
    { id: 1, cone: "Waffle Cone", price: 5 },
    { id: 2, cone: "Waffle Bowl", price: 7 },
    { id: 3, cone: "Sugar Cone", price: 3 },
    { id: 4, cone: "Sundae Dish", price: 7 },
  ],
  flavors: [
    { id: 1, flavor: "Cookies & Cream", price: 7 },
    { id: 2, flavor: "Cookie Dough", price: 7 },
    { id: 3, flavor: "Mint Chocolate Chip", price: 5 },
    { id: 4, flavor: "Strawberry", price: 5 }
  ],
  toppings: [
    { id: 1, topping: "Sprinkles", price: .50 },
    { id: 2, topping: "Gummies", price: 1.50 },
    { id: 3, topping: "Nuts", price: 2 },
    { id: 4, topping: "Chocolate Syrup", price: 1.50 },
  ],
  sizes: [
    { id: 1, size: "Small", price: 2 },
    { id: 2, size: "Medium", price: 4 },
    { id: 3, size: "Large", price: 6 },
    { id: 4, size: "Extra Large", price: 8 },
  ],
  customOrders: [
    {
      id: 1,
      conesId: 3,
      flavorsId: 2,
      toppingsId: 3,
      sizesId: 4,
      timestamp: 1614659931693
    }
  ],
  orderBuilder: {}
}

export const getCones = () => {
  return database.cones.map(cone => ({ ...cone }))
}

export const getFlavors = () => {
  return database.flavors.map(flavor => ({ ...flavor }))
}

export const getToppings = () => {
  return database.toppings.map(topping => ({ ...topping }))
}

export const getSizes = () => {
  return database.sizes.map(size => ({ ...size }))
}

export const getOrders = () => {
  return database.customOrders.map(order => ({ ...order }))
}

export const setCones = (id) => {
  database.orderBuilder.conesId = id
}

export const setFlavors = (id) => {
  database.orderBuilder.flavorsId = id
}

export const setToppings = (id) => {
  database.orderBuilder.toppingsId = id
}

export const setSizes = (id) => {
  database.orderBuilder.sizesId = id
}

