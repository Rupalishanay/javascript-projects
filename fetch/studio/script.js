//TODO: Add Your Code Below
window.addEventListener("load",function(){
let container=this.document.getElementById("container")
let data = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
.then(response =>{
    if(response.ok){
        return response.json()
    }
})
.then(response => {
    response.forEach(current => [
        container.innerHTML +=`
        <h3>${current.firstName} ${current.lastName}</h3>
        <ul>
        <li>Hours in Space: ${current.hoursInSpace}</li>
        <li>Active : ${current.active}</li>
        <li>Skills : ${current.skills}</li>
        </ul>
        <div>
        <img src="${current.picture}">
        </div>
        `
    ]);
        
})
    
})