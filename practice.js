const container = document.getElementById("container")

container.innerHTML = "<button id='buyme'>BUY!</button>"
const id = document.getElementById("buyme")
id.addEventListener("click",function(){
    container.innerHTML += "<p>Thank you for Buying!!</p>"
})

