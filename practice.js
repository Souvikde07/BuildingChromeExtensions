const welcomeEL = document.getElementById("welcome-el")


function greetUser(Greetings,name,emoji){
    welcomeEL.textContent = `${Greetings}, ${name}!! ${emoji}`
}

greetUser("Welcome back"," Souvik!!!","😂")