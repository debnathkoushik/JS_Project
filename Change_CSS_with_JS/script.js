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
    liElement.setAttribute("data-counter", value)

    if (value % 2 == 0)
    {
        //accessing CSS via HTML
        //changing the background for even number
        liElement.setAttribute("class", "yellowGreen")
    }
    else
    {
        //accessing CSS via HTML
        //changing the background for odd number
        liElement.setAttribute("class", "olive")
    }
    
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