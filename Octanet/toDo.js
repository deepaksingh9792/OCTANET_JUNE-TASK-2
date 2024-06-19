function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const li = document.createElement('li');
        li.textContent = taskValue;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}