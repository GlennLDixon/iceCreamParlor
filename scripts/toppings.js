import { getToppings, setToppings } from "./database.js"

const toppings = getToppings()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topping") {
            setToppings(parseInt(event.target.value))
        }
    }
)

export const IceCreamToppings = () => {
    let html = "<ul>"
    
   
    const listItems = toppings.map(topping => {
        return `<li class="listItem">
            <input type="radio" name="topping" value="${topping.id}" /> ${topping.topping}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

