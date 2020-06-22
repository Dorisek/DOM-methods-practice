const body = document.querySelector('body')
const btn = document.createElement('button')
btn.innerHTML = "<button>Click me </button>"
console.log(btn)
document.body.appendChild(btn)

btn.addEventListener("click", function () {
    console.log("button-clicked");

    body.removeChild(mainElement)

})

const mainElement = document.createElement('main')
console.log(mainElement)
document.body.appendChild(mainElement)

const img = document.createElement("img");
mainElement.appendChild(img)
console.log(img)
img.innerHTML = '<img src ="data:image/jpeg;base64,/9j" alt= "June odd-eyed-cat.jpg">'

const anchorElement = document.createElement('a')
mainElement.appendChild(anchorElement)
console.log(anchorElement)
anchorElement.innerHTML = '<a href="https://en.wikipedia.org/wiki/File:June_odd-eyed-cat.jpg">June odd-eyed-catcat</a>'

var input = document.createElement("input")
input.type = "text";
input.className = "";
body.appendChild(input)

const newButtonElement = document.createElement('new-button')
newButtonElement.innerHTML = "<button>Click me </button>"
document.body.appendChild(newButtonElement)

//newButtonElement.addEventListener("click", function () {
//  console.log("new-button-clicked");

//for (index = 0; body.removeChild(mainElement)

//})


const btn2 = document.createElement('button2')
btn2.innerHTML = "<button>Click me </button>"
document.body.appendChild(btn2)


//2.Now, add a "click" event listener to the 
// button element you created. On click, remove the <main>
// element node from the page. After clicking this button, 
//the user should only see the button on the page and the DOM 
//tree should look like this:

//To the body, add a text-type <input> and another
// button. The user will type a valid CSS selector 
//into the text box. When the user clicks this 
//new button, a click event listener should take the 
//text value from the input element and remove the 
//first element from the DOM which matches the CSS selector
// provided by the user. For example: entering the string .image, then 
//clicking this new button, should remove the image 
//element with the class of "image" from the DOM.

//To the body, add another text-type 
//<input> and another new button. 
//When the user clicks this button, it should create a 
//DIV element and append it to the BODY, and should contain the text content 
//provided by the user in the text box.