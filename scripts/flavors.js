import { getFlavors, setFlavors } from "./database.js"
const flavors = getFlavors()


document.addEventListener('change', 
    event => {
        if (event.target.name === "flavor") {
            setFlavors(parseInt(event.target.value))
        }
        
})

export const Flavors = () => {

    let html = ""
    html = "<ul>"
    
    for (const flavor of flavors) {
        html += `<li class="listItem">
        <input type="radio" name="flavor" value="${flavor.id}"/> ${flavor.flavor} 
        `
    }
    html += "</ul>"
    return html
}