import { iceCreamParlor } from "./iceCreamParlor.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = iceCreamParlor()
}

document.addEventListener("stateChanged", event => {
    console.log("message")
    renderAllHTML()
})

renderAllHTML()

