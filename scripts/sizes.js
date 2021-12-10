import { getSizes, setSize } from "./database.js"

const sizes = getSizes()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)


export const ConeSizes = () => {
    let html = "<ul>"

    
    const listItemsArray = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${sizes.id}" /> ${sizes.size}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}
