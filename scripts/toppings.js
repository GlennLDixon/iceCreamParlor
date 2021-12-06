import { getToppings, setTopping } from "./database.js"

const toppings = getToppings()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topping") {
            setTopping(parseInt(event.target.value))
        }
    }
)

export const IceCreamToppings = () => {
    let html = "<ul>"

   
    const listItems = toppings.map(size => {
        return `<li>
            <input type="radio" name="size" value="${topping.id}" /> ${toppinig.toppings}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

