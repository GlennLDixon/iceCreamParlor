import { Orders } from "./orders.js"
import { Flavors } from "./flavors.js"
import { Size } from "./sizes.js"
import { IceCreamToppings } from "./toppings.js"
import { Cones } from "./cones.js"

document.addEventListener('click', () => {
    
})

export const iceCreamParlor = () => {
    return `
    <article class="choices">
    <section class="choices_flavors options">
        <h1>Flavors</h1>
        ${Flavors()}
    </section>
    <section class="choices_size options">
        <h1>Sizes</h1>
        ${Size()}
    </section>
    <section class="choices_toppings options">
        <h1>Toppings</h1>
        ${IceCreamToppings()}
    </section>
    <section class="choices_cones options">
        <h1>Cones</h1>
        ${Cones()}
    </section>
</article>
<article>
    <button class="orderButton">Place Order</button>
</article>
<article>
    <h1>Order Section</h1>
    ${Orders()}
</article>
    `
}