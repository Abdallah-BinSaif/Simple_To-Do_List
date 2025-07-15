const addTodoInput = document.querySelector(".addTodo")
const todoContainer = document.querySelector("#todoContainer")

addTodoInput.addEventListener("submit", (event)=>{
    event.preventDefault()
    const todo = document.getElementById("ToDo").value
    const singleTodo = createSingleTodo(todo)
    todoContainer.appendChild(singleTodo)
})

todoContainer.addEventListener("click", function(event){
    const id =event.target.parentElement.parentElement.getAttribute("id") || ""
    const todoItem = document.getElementById(id)
    const todoButtons = todoItem?.getElementsByTagName("button") || ""
    const action = event.target.getAttribute("class")
    if(action === "todo") {
        todoItem.style.backgroundColor = "green"
        todoButtons[1]?.classList.remove("todo")
        todoButtons[1]?.classList.add("done")
    }else if(action === "done") {
        todoItem.style.backgroundColor = "azure"
        todoButtons[1]?.classList.remove("done")
        todoButtons[1]?.classList.add("todo")
    }else if(action === "delete") {
        todoContainer.removeChild(todoItem)
    }
    console.log(todoButtons, "action", action)
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
    deleteButton.classList.add("delete")
    const checkButton = document.createElement("button")
    checkButton.innerHTML = "&check;"
    checkButton.classList.add("todo")
    actionSpan.appendChild(deleteButton)
    actionSpan.appendChild(checkButton)
    return actionSpan
}
