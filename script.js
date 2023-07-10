let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(Leads){
    let listItems = ""
    for(let i = 0;i<Leads.length;i++){
       // listItems += "<li><a href = ' "+myLeads[i]+" 'target = '_blank'>" + myLeads[i] + "</a></li>"
       listItems += `
                    <li>
                        <a href = '${Leads[i]}' target = '_blank'>
                        ${Leads[i]}
                        </a>
                    </li>
        `//This makes it a string literal or template strings
    }
    ulEl.innerHTML = listItems
}

deletebtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function handleClick(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
}

inputBtn.addEventListener("click",handleClick)
inputEl.addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        handleClick()
    }
})
