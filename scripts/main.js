const dog_buttons = document.getElementsByName("dog-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

function change_doggo (doggo) {
    text.innerHTML = "Here's " + doggo + "."
    photo.src = "./images/"  + doggo + ".jpg"
 }

 dog_buttons.forEach(button => {
        button.addEventListener("change", event => {
            change_doggo(button.value)
        })
 })