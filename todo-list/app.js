const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')
const trashButton = document.querySelector('.delete')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()

  if (inputValue.length) {
    event.target.reset()
    todosContainer.innerHTML += `
    <li
      class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
          <span>${inputValue}</span>
        <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
      </li>
    `
  }
})

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
  trashDataValue ? todo.remove() : trashDataValue
}

// remoção do List
todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  removeTodo(clickedElement)
})

const todos = Array.from(todosContainer.children)

const showTodo = inputValue => {
  todos
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(li => {
      li.classList.remove('d-flex')
      li.classList.add('hidden')
    })
}

const hideTodo = inputValue => {
  todos
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(li => {
      li.classList.remove('hidden')
      li.classList.add('d-flex')
    })
}

inputSearch.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()

  showTodo(inputValue)
  hideTodo(inputValue)
})
