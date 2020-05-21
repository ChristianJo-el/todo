const form = document.querySelector("#form");
const list = document.querySelector("#list");


//adding new todos
form.addEventListener("submit", e =>{
    e.preventDefault();
    let item = document.getElementById("input").value.trim();
    let newLI = `<li style= "text-color=blue">${item}<input type="checkbox" aria-label="Checkbox for following text input">
    <button class="del btn-danger" type="button"></button></li>`;
    
    list.innerHTML += newLI;

    form.reset();
});

//deleting todos
list.addEventListener("click", e =>{
    if(e.target.classList.contains("del")) {
       if(confirm("Are you sure you want to delete todo?")){
        e.target.parentElement.remove();
       }
    }
    
});

//checkbox
list.addEventListener("click", e =>{
    let check = e.target;
    if(check.type === "checkbox"){
        check.parentElement.style.textDecoration = "line-through";
    }
})

