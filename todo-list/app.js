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
      class="list-group-item d-flex justify-content-between align-items-center">
          <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
  }
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  const clickedTrash = Array.from(clickedElement.classList).includes('delete')

  clickedTrash ? clickedElement.parentElement.remove() : clickedTrash
})

inputSearch.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(li => {
      li.classList.remove('d-flex')
      li.classList.add('hidden')
    })

  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(li => {
      li.classList.remove('hidden')
      li.classList.add('d-flex')
    })
})
