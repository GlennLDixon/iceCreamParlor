import { getCones, setCones } from "./database.js"

const cones = getCones()

document.addEventListener("change", (event) => {
    if (event.target.name === "cones") {
        setCones(parseInt(event.target.value))
    }
})

export const IcecreamCones = () => {
    let html = ""
    html = "<ul>"
    const listItems = cones.map(cone => {
        return `<li class="listItem">
            <input type="radio" name="cones" value="${cone.id}" /> ${cone.cone}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}