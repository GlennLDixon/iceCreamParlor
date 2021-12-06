import { iceCreamParlor } from "./iceCreamParlor";

const mainContainer = document.getElementById("container")

const renderAllHTML = () => {
    mainContainer.innerHTML = iceCreamParlor()
}

renderAllHTML()

