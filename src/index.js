document.addEventListener("DOMContentLoaded", () => {
document.querySelector("form").addEventListener('submit',(event)=> {
  event.preventDefault()
  let formObject= {
    task: event.target.newTask.value
  }
  renderForm(formObject)
})

const renderForm = (tasks) => {
  let taskList = document.querySelector('#tasks')
  let li = document.createElement('li')
  li.textContent=tasks.task
  taskList.append(li)

}

















  
});
