import { iceCreamParlor } from "./iceCreamParlor";

const mainContainer = document.getElementById("container")

const renderAllHTML = () => {
    return mainContainer.innerHTML = iceCreamParlor()
}

renderAllHTML()

