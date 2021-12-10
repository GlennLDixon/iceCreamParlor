import { getCones } from "./database.js"

const cones = getCones()

document.addEventListener("change", (event) => {
    if (event.target.name === "cones") {
        setCone(parseInt(event.target.value))
    }
})
export const IcecreamCones = () => {
    let html = "<ul>"
    const listItems = cones.map(cone => {
        return `<li>
            <input type="radio" name="size" value="${cone.id}" /> ${cone.carets}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}