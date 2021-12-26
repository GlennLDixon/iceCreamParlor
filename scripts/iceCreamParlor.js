import { Orders } from "./orders.js"
import { Flavors } from "./flavors.js"
import { IceCreamToppings } from "./toppings.js"
import { ConeSizes } from "./sizes.js"
import { IcecreamCones } from "./conesOrDish.js"
import { addCustomOrder } from "./database.js"

document.addEventListener('click', (event) => {
    if (event.target.id === "orderButton") {
        addCustomOrder()
    }

})

export const iceCreamParlor = () => {
    return `
    <div class="header">
        <h1>Scoop City Ice Cream Parlour</h1>
    </div>
    <article class="choices">
    <section class="choices_flavors options">
        <h2>Flavors</h2>
        ${Flavors()}
    </section>
    <section class="choices_size options">
        <h2>Sizes</h2>
        ${ConeSizes()}
    </section>
    <section class="choices_toppings options">
        <h2>Toppings</h2>
        ${IceCreamToppings()}
    </section>
    <section class="choices_cones options">
        <h2>Cones</h2>
        ${IcecreamCones()}
    </section>
</article>
<article>
    <button id="orderButton">Place Order</button>
</article>
<article>
    <h2>Order Section</h2>
    ${Orders()}
</article>
    `
}