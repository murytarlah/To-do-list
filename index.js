// input element
let input = document.getElementById("input-box");

// todos
let todos = document.getElementById("list");

// form 
let form = document.getElementById("todo-form");

// LS todos
const todosLS = [
    {
        text: "Lorem Ipsum",
        completed : false
    },

    {
        text: "asdf jkl",
        completed : true
    },

    {
        text: "qwerty",
        completed : false
    },

    {
        text: "awdrgy",
        completed : true
    },

]


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(input)
})


function createTodoElement(text){
    // creating the element
    let li = document.createElement('li');

    // add the text
    li.textContent = text;

    return li;
}


function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = createTodoElement(todoText)
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todos.removeChild(todoEl)
        }) 

        todos.appendChild(todoEl)

        input.value = ''
    }
}