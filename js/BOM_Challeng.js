

let submitButton = document.querySelector(".add");
let inputField = document.querySelector(".input");
let tasksElement = document.querySelector(".tasks");
let tasksList = [];
let id = 0;


// verify if there is a task list in the local storage
window.onload = () => {
    if (window.localStorage.tasks) {
        tasksList = JSON.parse(window.localStorage.tasks);
        // set the id to the biggest one 
        id = tasksList.reduce((acc,current) => {
            return acc.id > current.id ? acc.id : current.id;
        });
        // import task list from local storage to the view
        tasksList.forEach(ele => {
            createTaskElement(tasksElement, ele.title, ele.id);
        });
    }
};

// add task to list in the UI view after clicking ADD TASK button
submitButton.onclick = () =>  {

    // add the task to our task list array
    tasksList.push({"id": ++id,"title": inputField.value});
    // create the task element and delete button
    createTaskElement (tasksElement, inputField.value, id);
    // store the task list as an object after converting to string using JSON method
    window.localStorage.setItem("tasks",JSON.stringify(tasksList));
    // let the input field empty after submit
    inputField.value = ""
};


// delete the task from the view and local storage
let task = document.querySelectorAll(".task");
let deleteButtons = document.querySelectorAll(".delete");

document.addEventListener("click",function (e) {
    if (e.target.className === "delete") {
        // remove the task from the view
        e.target.parentElement.remove();
        // remove the task from the local storage using our removeTask function
        tasksList = removeTask(window.localStorage.tasks, e.target.previousElementSibling.textContent);
        // update the tasks list in local storage after converting to string 
        window.localStorage.setItem("tasks",JSON.stringify(tasksList));
        tasksList.length === 0 ? window.localStorage.clear():console.log();
    }
});

// a function to create the task element & delete button with CSS styling
function createTaskElement (a,b,c) {
    a.innerHTML += `<div class="task"
    style="background-color: #FFF; width:90%; margin: auto; margin-bottom: 20px;border-radius:5px; height: 40px;display:flex;justify-content: space-between; align-items:center; padding:0px 20px;"
    ><span>${b}</span><span style="visibility:hidden;">${c}</span><button class="delete"
    style="background-color: red;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: #FFF"
    >Delete</button></div>`
};

// a function to remove the object that have a specific title proprety (taske name)
function removeTask (a,b) {
    // convert string to object using JSON method
    let converted = JSON.parse(a);
    return converted.filter(item => item.id != b);
};

