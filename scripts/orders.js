import { getCones, getFlavors, getToppings, getSizes, getOrders } from "./database.js"

const cones = getCones()
const flavors = getFlavors()
const toppings = getToppings()
const sizes = getSizes()

const buildOrderListItem = (order) => {
    const foundCone = cones.find(
        (cone) => {
            return cone.id === order.coneId
        }
    )
    const foundFlavor = flavors.find(
        (flavor) => {
            return flavor.id === order.flavorsId
        }
    )
    const foundTopping = toppings.find(
        (topping) => {
            return topping.id === order.toppingsId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizesId
        }
    )
    const totalCost = foundCone.price + foundFlavor.price + foundTopping.price + foundSize.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}



export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}