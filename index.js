const addTodoInput = document.querySelector(".addTodo")
const todoContainer = document.querySelector("#todoContainer")

addTodoInput.addEventListener("submit", (event)=>{
    event.preventDefault()
    const todo = document.getElementById("ToDo").value
    const singleTodo = createSingleTodo(todo)
    todoContainer.appendChild(singleTodo)
    document.getElementById("ToDo").value = ""
})

todoContainer.addEventListener("click", function(event){
    /* change

    const id =event.target.parentElement.parentElement.getAttribute("id") || ""
    const todoItem = document.getElementById(id)

    changing this two line of Code into a while loop for finding todoItem with a better approach
    */
    let currentElement = event.target;
    let todoItem = null;
    while (currentElement && currentElement !== todoContainer) {
        if (currentElement.classList.contains("single-todo")) {
            todoItem = currentElement
            break;
        }
        currentElement = currentElement.parentElement
    }
    /* change
    const todoButtons = todoItem.getElementsByTagName("button") || ""
    const checkButton = todoItem.querySelector(".single-todo .check-button")
    
    if(action === "todo") {
        todoItem.style.backgroundColor = "green"
        checkButton.classList.remove("todo")
        checkButton.classList.add("done")
        checkButton.innerHTML = "&leftarrow;"
    }else if(action === "done") {
        todoItem.style.backgroundColor = "azure"
        todoButtons[1]?.classList.remove("done")
        todoButtons[1]?.classList.add("todo")
    }else if(action === "delete") {
        todoContainer.removeChild(todoItem)
    }

    changing this code for more control over the single todo list
    */
   const action = event.target.classList[0]
   if(action === "todo" || action === "done") {
    todoItem.classList.toggle("completed")
    const checkButton = todoItem.querySelector(".check-button");
    if(todoItem.classList.contains("completed")) {
        checkButton.classList.remove("todo", "check-button")
        checkButton.classList.add("done", "check-button")
        checkButton.innerHTML = "&leftarrow;"
    }else{
        checkButton.classList.remove("done", "check-button")
        checkButton.classList.add("todo", "check-button")
        checkButton.innerHTML = "&check;"
    } 

   }else if(action === "delete") {
        todoContainer.removeChild(todoItem)
    }
})

function createSingleTodo(todo) {
    const singleTodo = document.createElement("div")
    singleTodo.setAttribute("class", "single-todo")
    singleTodo.setAttribute("id", `${Date.now()}`)

    const textSpan = document.createElement("span")
    textSpan.textContent = todo;

    singleTodo.appendChild(textSpan)
    singleTodo.appendChild(actionSpan())
    return singleTodo
}
function actionSpan() {
    const actionSpan = document.createElement("span")
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "&cross;"
    deleteButton.classList.add("delete", "delete-button")
    const checkButton = document.createElement("button")
    checkButton.innerHTML = "&check;"
    checkButton.classList.add("todo", "check-button")
    actionSpan.appendChild(deleteButton)
    actionSpan.appendChild(checkButton)
    return actionSpan
}
