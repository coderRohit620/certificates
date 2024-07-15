function addTask() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `
        <p><strong>Task:</strong> ${taskInput.value}</p>
        <p><strong>Priority:</strong> ${prioritySelect.value}</p>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
      prioritySelect.value = 'low';
    } else {
      alert('Please enter a task.');
    }
  }
  
  function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('p:first-child');
    const newText = prompt('Edit task:', taskText.textContent.split(':')[1].trim());
    if (newText !== null && newText.trim() !== '') {
      taskText.textContent = `Task: ${newText}`;
    }
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  