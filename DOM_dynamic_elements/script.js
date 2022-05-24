let button = document.querySelector("#buttonAccess")
let button2 = document.querySelector("#buttonAccess2")

let value = 0
let valueAccess = document.querySelector("#valueAccess")

let ulElement = document.querySelector("#ulAccess")

function buttonIncrement()
{    
    value++    
    valueAccess.innerText = value

    let liElement = document.createElement("li")
    liElement = document.setAttributes("data-counter", value)
    
    let textNode1 = document.createTextNode("Sentence ")
    let boldElement = document.createElement("b")
    boldElement.appendChild(textNode1)

    let textNode2 = document.createTextNode(value)
    
    liElement.appendChild(boldElement)
    liElement.appendChild(textNode2)
    
    ulElement.appendChild(liElement)
    
}

function buttonDecrement()
{    
    let removeNode = ulElement.querySelector('[data-counter ="'+value+'"]')
    removeNode.remove()

    value--
    valueAccess.innerText = value

}

button.addEventListener("click", buttonIncrement)
button2.addEventListener("click", buttonDecrement)