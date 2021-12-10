import { getSizes, setSizes } from "./database.js"

const sizes = getSizes()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "sizes") {
            setSizes(parseInt(event.target.value))
        }
    }
)


export const ConeSizes = () => {
    let html = "<ul>"

    
    const listItemsArray = sizes.map(size => {
        return `<li>
            <input type="radio" name="sizes" value="${size.id}" /> ${size.size}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}
